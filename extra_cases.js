/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import deploy from '../../helpers/deploy';
import {createWeb3, makeSnapshot, restoreSnapshot, utils} from '../../../src/utils/web3_tools';
import chaiEmitEvents from '../../helpers/chaiEmitEvents';
import AtlasStakeStoreMockJson from '../../../src/contracts/AtlasStakeStoreMock.json';
import {ATLAS1_STAKE, HERMES, ATLAS} from '../../../src/constants';
import {ONE, DAY, SYSTEM_CHALLENGES_COUNT, PAYOUT_PERIOD_UNIT} from '../../helpers/consts';
import {} from '../../helpers/consts';
import TimeMockJson from '../../../src/contracts/TimeMock.json';
import BN from 'bn.js';

chai.use(chaiAsPromised);
chai.use(chaiEmitEvents);

const {expect} = chai;

describe('Additional test cases', () => {
  let web3;
  let shelteringTransfers;
  let sheltering;
  let rolesStore;
  let challenges;
  let atlasStakeStore;
  let time;
  let fees;
  let deployer;
  let hermes;
  let atlas;
  let notSheltering;
  let otherNotSheltering;
  let transferId;
  const bundleId = utils.keccak256('bundleId');
  const storagePeriods = 100;
  const storageLimit = 10;
  const totalReward = 1000000;
  let snapshotId;
  const bundleUploadTimestamp = PAYOUT_PERIOD_UNIT * 12.6;
  const now = PAYOUT_PERIOD_UNIT * 21.1;
  const challengeTimeout = 3 * DAY;
  let challengeId;
  let userChallengeFee;

  const startTransfer = async (bundleId, sender) => shelteringTransfers.methods.start(bundleId).send({from: sender});
  const resolveTransfer = async (transferId, sender) => shelteringTransfers.methods.resolve(transferId).send({from: sender});
  const getTransferId = async (donor, bundleId) => shelteringTransfers.methods.getTransferId(donor, bundleId).call();

  const startChallenge = async (sheltererId, bundleId, challengerId, fee) => challenges.methods.start(sheltererId, bundleId).send({from: challengerId, value: fee});
  const getFeeForChallenge = async (storagePeriods) => fees.methods.getFeeForChallenge(storagePeriods).call();
  const setRole = async (targetId, role, sender = deployer) => rolesStore.methods.setRole(targetId, role).send({from: sender});
  const addShelterer = async (bundleId, sheltererId, totalReward, sender = deployer) => sheltering.methods.addShelterer(bundleId, sheltererId).send({from: sender, value: totalReward});
  const getShelteringExpirationDate = async (bundleId, sheltererId) => sheltering.methods.getShelteringExpirationDate(bundleId, sheltererId).call();
  const storeBundle = async (bundleId, uploader, storagePeriods, sender = deployer) => sheltering.methods.storeBundle(bundleId, uploader, storagePeriods).send({from: sender});
  const depositStake = async (atlasId, storageLimit, value, sender = deployer) => atlasStakeStore.methods.depositStake(atlasId, storageLimit).send({from: sender, value});
  const setTimestamp = async (timestamp, sender = deployer) => time.methods.setCurrentTimestamp(timestamp).send({from: sender});

  const resolveChallenge = async (challengeId, resolverId) => challenges.methods.resolve(challengeId).send({from: resolverId});
  const getChallengeId = async (sheltererId, bundleId) => challenges.methods.getChallengeId(sheltererId, bundleId).call();
  const markChallengeAsExpired = async (challengeId, marker) => challenges.methods.markAsExpired(challengeId).send({from: marker, gasPrice: '0'});
  
  before(async () => {
    web3 = await createWeb3();
    [deployer, hermes, atlas, notSheltering, notStaking, otherNotSheltering] = await web3.eth.getAccounts();
    ({shelteringTransfers, atlasStakeStore, sheltering, rolesStore, time, payoutsStore, challenges, fees} = await deploy({
      web3,
      sender: deployer,
      contracts: {
        shelteringTransfers: true,
        shelteringTransfersStore: true,
        bundleStore: true,
        sheltering: true,
        config: true,
        time: TimeMockJson,
        atlasStakeStore: AtlasStakeStoreMockJson,
        payouts: true,
        payoutsStore: true,
        rolesStore: true,
        challenges: true,
        challengesStore: true,
        fees: true
      }
    }));
    await setTimestamp(bundleUploadTimestamp);

    await setRole(hermes, HERMES);
    await setRole(atlas, ATLAS);
    await setRole(notSheltering, ATLAS);
    await setRole(otherNotSheltering, ATLAS);
    await depositStake(atlas, storageLimit, ATLAS1_STAKE);
    await depositStake(notSheltering, storageLimit, ATLAS1_STAKE);
    await depositStake(otherNotSheltering, storageLimit, ATLAS1_STAKE);

    await storeBundle(bundleId, hermes, storagePeriods);
    await addShelterer(bundleId, atlas, totalReward);
    transferId = await getTransferId(atlas, bundleId);
    challengeId = await getChallengeId(atlas, bundleId)
    expirationTime = await getShelteringExpirationDate(bundleId, atlas);
    userChallengeFee = new BN(await getFeeForChallenge(storagePeriods));
  });

  beforeEach(async () => {
    snapshotId = await makeSnapshot(web3);
  });

  afterEach(async () => {
    await restoreSnapshot(web3, snapshotId);
  });

  describe('The donor is challenged after initiating transfer', () => {
      beforeEach(async () => {
        await setTimestamp(now);
      })

      it('Handles resolving the transfer and the challenge', async () => {
        await startTransfer(bundleId, atlas);
        await startChallenge(atlas, bundleId, notSheltering, userChallengeFee);
        await resolveTransfer(transferId, notSheltering).to.be.fulfilled;
        await resolveChallenge(challengeId, otherNotSheltering).to.be.fulfilled;
      });

      it('Handles resolving the challenge and the transfer', async () => {
        await startTransfer(bundleId, atlas);
        await startChallenge(atlas, bundleId, notSheltering, userChallengeFee);
        await expect(resolveChallenge(challengeId, otherNotSheltering)).to.be.fulfilled;
        await expect(resolveTransfer(transferId, notSheltering)).to.be.fulfilled;
      });

      it('Handles challenge expiration before resolving the transfer', async () => {
        await startTransfer(bundleId, atlas);
        await startChallenge(atlas, bundleId, notSheltering, userChallengeFee);
        await setTimestamp(now + challengeTimeout + 1);
        await expect(markChallengeAsExpired(challengeId, notSheltering)).to.be.fulfilled;
        await expect(resolveTransfer(transferId, notSheltering)).to.eventually.be.rejected;
      });
      
      it('Handles trying to resolve the transfer before the challenge expires', async () => {
        await startTransfer(bundleId, atlas);
        await startChallenge(atlas, bundleId, notSheltering, userChallengeFee);
        await expect(resolveTransfer(transferId, notSheltering)).to.eventually.be.rejected;
        await setTimestamp(now + challengeTimeout + 1);
        await expect(markChallengeAsExpired(challengeId, notSheltering)).to.be.fulfilled;
      });
  });
});

import {createWeb3} from '../src/utils/web3_tools';
import config from '../config/config';
import HeadWrapper from '../src/wrappers/head_wrapper';
import RolesWrapper from '../src/wrappers/roles_wrapper';
import UploadsWrapper from '../src/wrappers/uploads_wrapper';
import FeesWrapper from "../src/wrappers/fees_wrapper";
import KycWhitelistWrapper from '../src/wrappers/kyc_whitelist_wrapper';
import WhitelistActions from '../src/actions/whitelist_actions';
import OnboardActions from '../src/actions/onboard_actions';
import UploadActions from '../src/actions/upload_actions';
import ShelteringWrapper from '../src/wrappers/sheltering_wrapper';
import BlockchainStateWrapper from '../src/wrappers/blockchain_state_wrapper';
import ChallengesWrapper from '../src/wrappers/challenges_wrapper';
import {loadContract} from '../src/utils/web3_tools';
import contractJsons from '../src/contract_jsons';
var colors = require('colors');

import {
  ATLAS,
  ATLAS3_STAKE,
  HERMES
} from '../src/constants';

const hermes = "0x5C012b30F3b69c8f249fB77f53423E9734f84FE7";
const atlasResolver = "0xbbC724eEE0B65a97D7A44222c0ea39d73F502Fb4";
const atlasChallenger = "0x70f846303C7534d36b30e9532C09138FA5FBF3Ac";
const owner = "0xeBfD1a5391130d58282a2943681aA549cf2B6035";

let web3;
let headWrapper;
let kycWhitelistWrapper;
let challengesWrapper;
let whitelistActions;
let onboardActions;
const storagePeriods = 1;
let uploadTime = [];
let resolveTime = [];
let challengeTime = [];
let transferTime = [];

const Start = async () => {
  console.log("Performance test".green.bold);
  web3 = await createWeb3();
  const blockchainWrapper = new BlockchainStateWrapper(web3);
  headWrapper = new HeadWrapper(config.headContractAddress, web3, owner);
  kycWhitelistWrapper = new KycWhitelistWrapper(headWrapper, web3, owner);
  whitelistActions = new WhitelistActions(kycWhitelistWrapper);

  const rolesWrapper = new RolesWrapper(headWrapper, web3, owner);
  onboardActions = new OnboardActions(kycWhitelistWrapper, rolesWrapper);  


  if (await addToWhiteList(hermes, HERMES, 0)) {
    await onboardActions.onboardAsHermes(hermes, hermes + "com");
  }

  if (await addToWhiteList(atlasResolver, ATLAS, ATLAS3_STAKE)) {
    await onboardActions.onboardAsAtlas(atlasResolver, ATLAS3_STAKE, atlasResolver + "com");
  }

  if (await addToWhiteList(atlasChallenger, ATLAS, ATLAS3_STAKE)) {
    await onboardActions.onboardAsAtlas(atlasChallenger, ATLAS3_STAKE, atlasChallenger + "com");
  } 

  const feesWrapper = new FeesWrapper(headWrapper, web3, hermes);
  const shelteringWrapper = new ShelteringWrapper(headWrapper, web3, hermes);  
  const uploadsWrapper = new UploadsWrapper(headWrapper, web3, hermes);
  const uploadActions = new UploadActions(uploadsWrapper, feesWrapper, shelteringWrapper, blockchainWrapper);
  
  challengesWrapper = new ChallengesWrapper(headWrapper, web3, atlasResolver);
  const limit = 200;
  for (var i = 0; i < limit; i++) {
    console.log(`${limit - i}`.gray);
    try {
      var {blockNumber} = await registerBundle(uploadActions, GetBundleId(i), storagePeriods);
      const [challengeCreationEvent] = await challengesWrapper.challenges(blockNumber);
      const challengeId = challengeCreationEvent.returnValues.challengeId;
      await resolveChallenge(challengeId, challengesWrapper);
    
      if (i % 2) {
        await transfer(atlasResolver, GetBundleId(i));
      } else {
        await challenge(atlasResolver, GetBundleId(i), atlasChallenger);
      }
    } catch (err) {
      console.log(err);
    }
  }  

  console.log(`Uplodad max time: ${(Math.max.apply(null, uploadTime))}s; everage time: ${average(uploadTime)}s`.white.bold);
  console.log(`Resolve max time: ${(Math.max.apply(null, resolveTime))}s everage time: ${average(resolveTime)}s`.white.bold);
  console.log(`Challenge max time: ${(Math.max.apply(null, challengeTime))}s; everage time: ${average(challengeTime)}s`.white.bold);
  console.log(`Transfer max time: ${(Math.max.apply(null, transferTime))}s; everage time: ${average(transferTime)}s`.white.bold);
}

const addToWhiteList = async(addr, role, stake) => {
  if (!await kycWhitelistWrapper.isWhitelisted(addr)) {
    await whitelistActions.add(addr, role, stake);
    return true;
  }
  return false;
}

function average(array) {
  var sum = 0;
  for( var i = 0; i < array.length; i++ ){
    sum += parseFloat( array[i]);
  }
  var avg = sum/array.length; 
  return avg;
}

const getContractByName = async(contractName) => {
  const contractAddress = await headWrapper.contractAddressByName(contractName);
  return loadContract(web3, contractJsons[contractName].abi, contractAddress);
}

const performTransaction = async(promise, transactionName, durationHolder) =>  {
  try {
    console.log(`${transactionName} started`);
    var dateBeforeTransaction = new Date();
    var res = await promise;
    var dateAfterTransaction = new Date();
    var duration = (dateAfterTransaction - dateBeforeTransaction) / 1000;
    console.log(`${transactionName} finished in ${duration}`.blue.bold);
    durationHolder.push(duration);
    return res; 
  } catch (err) {
    console.log(`Error while ${transactionName.toLowerCase()}`);
    console.log(err);
  }
}

const transfer = async(oldSheltering, bundleId) => {
  const shelteringTransfers = await getContractByName('shelteringTransfers');
  await performTransaction(shelteringTransfers.methods.start(bundleId).send({from: oldSheltering}), "Transfer", transferTime);
}

const challenge = async (sheltererId, bundleId, challengerId) => {
    var challenges = await getContractByName('challenges');
    var fees = await getContractByName('fees');    
    var fee = await fees.methods.getFeeForChallenge(storagePeriods).call();
    await performTransaction(challenges.methods.start(sheltererId, bundleId).send({from: challengerId, value: fee}), "Challenge", challengeTime);
}

const resolveChallenge = async (id) => {
   await performTransaction(challengesWrapper.resolve(id), "Resolve", resolveTime);
}

const registerBundle = async (uploadActions, bundleId, storagePeriods) => {
  return await performTransaction(uploadActions.uploadBundle(bundleId, storagePeriods), "RegisterBundle", uploadTime);
}

function GetBundleId(index){
  return "0x" + (index + 10000).toString(16);
}

Start();
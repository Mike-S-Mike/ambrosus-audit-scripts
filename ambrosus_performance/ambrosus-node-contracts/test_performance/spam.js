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

import {
  HERMES
} from '../src/constants';

const hermesSpamers = [
  "0x4a811ddd4f80f72b264b5870fed3695f1fab42e1",
  "0x7364cC62a970C8DC4468d2C06B69dB9cbbB54bcD",
  "0xBdce9d6D1FE51Cfa9D5138950608291CA7bE0423",
  "0x0fC2F0af9EC171036DD07A247EddfcE983e90901",
  "0xCE237c8152EFB8EF1652D943D0c66A430276F615",
  "0x4038D318E29a3e0bD58c980827f2288794B9d3bc",
  "0x7e8d38cB56B399Cb67b8363FF89E21A35751C9aF",
  "0x7A17A14567cbC75D0025083eCDF6bAc378E4b8FF",
  "0x54e2CaDB66a52A52AB80281c0e455F02684B5A2F",
  "0x4E6D4933f2077c4433AED9A7bf591D9d6B3D8524"
]

const owner = "0xeBfD1a5391130d58282a2943681aA549cf2B6035";

let web3;
let blockchainWrapper;
let whitelistActions;
let headWrapper;
var colors = require('colors');

const Spam = async () => {
  console.log("START spam".green.bold);
  web3 = await createWeb3();

  blockchainWrapper = new BlockchainStateWrapper(web3);
  headWrapper = new HeadWrapper(config.headContractAddress, web3, owner);
  const kycWhitelistWrapper = new KycWhitelistWrapper(headWrapper, web3, owner);
  whitelistActions = new WhitelistActions(kycWhitelistWrapper);

  //Add to white list
  for (const spamer of hermesSpamers) {
    await whitelistActions.add(spamer, HERMES, 0);
  };

  const rolesWrapper = new RolesWrapper(headWrapper, web3, owner);
  const onboardActions = new OnboardActions(kycWhitelistWrapper, rolesWrapper);
  
  //Onboard
  for (const spamer of hermesSpamers) {
    await onboardActions.onboardAsHermes(spamer, spamer + ".com");
  };

  var uploadWrappers = [];
  for (const spamer of hermesSpamers) {
    uploadWrappers.push(GetUploadActions(spamer));
  };
  
  var functionsUpload = [];
  const limit = 1;
  const storagePeriods = 1;

  var nextStartId = 0;
  while (nextStartId < limit * 20000) {    
    for (const spamerWrapper of uploadWrappers) {
      nextStartId = await registerBundles(spamerWrapper, storagePeriods, nextStartId, limit, functionsUpload);
    };

    //required for alignment of the transaction queue
    const timeout = 1000 * 1;
    await sleep(timeout);    
  }  

  for (const task of functionsUpload)
  {
    await task;
  }

  console.log(`Total ${nextStartId}`.red.bold);
}

function GetUploadActions(address) {
  const feesWrapper = new FeesWrapper(headWrapper, web3, address);
  const shelteringWrapper = new ShelteringWrapper(headWrapper, web3, address);  
  const uploadsWrapper = new UploadsWrapper(headWrapper, web3, address);
  const uploadActions = new UploadActions(uploadsWrapper, feesWrapper, shelteringWrapper, blockchainWrapper);
  return uploadActions;
}

const registerBundleImpl = async (uploadActions, bundleId, storagePeriods) => {  
  await uploadActions.uploadBundle(bundleId, storagePeriods)
}

const registerBundle = async (uploadActions, bundleId, storagePeriods) => {
  try {
    var dateBeforeTransaction = new Date(); 
    await registerBundleImpl(uploadActions, bundleId, storagePeriods);
    var dateAfterTransaction = new Date()
    console.log(`Successfully registered: ${bundleId} in ${(dateAfterTransaction - dateBeforeTransaction) / 1000}s`); 
  } catch (error) {
    console.error(error);
  }  
}

const registerBundles = async (uploadActions, storagePeriods, startId, count, functionsUpload) => {
  var i = startId;
  while (i < count + startId) {    
    const registerBundleTmp = registerBundle(uploadActions, GetBundleId(i), storagePeriods);    
    functionsUpload.push(registerBundleTmp);
    i++;
  }
  return i;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function GetBundleId(index){
  return "0x" + (index + 20000).toString(16);
}

Spam();
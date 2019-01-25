#!/bin/bash

docker-compose up -d

pushd ../ambrosus-node-contracts

yarn
yarn build

export WEB3_RPC=http://localhost:8545
export WEB3_NODEPRIVATEKEY="0x565e429a7c1886ee6aab0ac9fdcf78a80f995ab3725016628efacde750ee7770"
export WEB3_DEPLOYER_PRIVATEKEY="0x565e429a7c1886ee6aab0ac9fdcf78a80f995ab3725016628efacde750ee7770"

yarn task deploy --head=0x0000000000000000000000000000000000000F10 --validatorSet=0x0000000000000000000000000000000000000F00 --blockRewards=0x0000000000000000000000000000000000000F01
popd

read -p "Press any key to shut down the network... " -n1 -s
docker-compose down

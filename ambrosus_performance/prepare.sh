#!/bin/bash
git clone https://github.com/ambrosus/ambrosus-node-contracts.git ambrosus-node-contracts
unzip './performance.zip' -d .
cd ambrosus-node-contracts
git apply ../package.json.diff



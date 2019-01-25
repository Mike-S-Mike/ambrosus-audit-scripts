# Audit artifacts for ambrosus network

This folder contains all of the artifacts (scripts, diagrams, etc.) that were created during the audit of the ambrosus network:

 - The **"ambrosus_performance"** folder contains the scripts that were used for performance testing of the network. 
 - The **"docker"** folder contains a configuration for Parity and Docker that was used during the audit.
 - **"Ambrosus1.png"** and **"Ambrosus2.png"** - these images contain diagrams of cases of transaction ordering (used in the final report in one of the appendixes).
 - **"extra_cases.js"** - contains unit tests that reproduce the cases of transaction ordering that are described in the report.
 - **"gas_benchmark.js"** - contains a modified gas benchmark script that adds benchmarking of the expensive withdraw funciton.
 - **"static_analysis_out.md"** - contains the full output of the static analysis tool (including false-positives).

 ## Running the performance testing script

To prepare performance testing:

```
cd <path to ambrosus_performance folder>
./prepare.sh
cd ambnet-test-local
./setup_environment.sh
```

Wait while contracts deployed and **"Press any key to shut down the network..."** appears

In another terminal start a script to create a lot of spam on the network:
```
cd <path to ambrosus-node-contracts>
yarn test:spam
```

Now spam is started.

Open another terminal to start the testing script
```
cd <path to ambrosus-node-contracts>
yarn test:performance
```

You can watch parity's log in another terminal:

```
docker attach $(docker ps -q)
```

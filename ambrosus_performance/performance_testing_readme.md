## Running the performance testing script

To prepare performance testing:

```
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

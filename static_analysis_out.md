# Analysis results for ApolloDepositStore.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: ApolloDepositStore
- Function name: `releaseDeposit(address,address)`
- PC address: 775
- Estimated Gas Usage: 3175 - 38443

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ApolloDepositStore.sol:31

### Code

```
nsfer(amountToTransfer);
        return amountToTr
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ApolloDepositStore
- Function name: `releaseDeposit(address,address)`
- PC address: 816
- Estimated Gas Usage: 3943 - 73304

### Description

This binary add operation can result in integer overflow.
In file: ApolloDepositStore.sol:31

### Code

```
nsfer(amountToTransfer);
        return amountToTr
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ApolloDepositStore
- Function name: `migrateFunds(address)`
- PC address: 1446
- Estimated Gas Usage: 3155 - 38423

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ApolloDepositStore.sol:31

### Code

```
nsfer(amountToTransfer);
        return amountToTr
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ApolloDepositStore
- Function name: `migrateFunds(address)`
- PC address: 1487
- Estimated Gas Usage: 3923 - 73284

### Description

This binary add operation can result in integer overflow.
In file: ApolloDepositStore.sol:31

### Code

```
nsfer(amountToTransfer);
        return amountToTr
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ApolloDepositStore
- Function name: `migrateFunds(address)`
- PC address: 1821
- Estimated Gas Usage: 6910 - 111537

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ApolloDepositStore.sol:39

## External call
- SWC ID: 107
- Type: Informational
- Contract: ApolloDepositStore
- Function name: `storeDeposit(address)`
- PC address: 2669
- Estimated Gas Usage: 3153 - 38421

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ApolloDepositStore.sol:31

### Code

```
nsfer(amountToTransfer);
        return amountToTr
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ApolloDepositStore
- Function name: `storeDeposit(address)`
- PC address: 2710
- Estimated Gas Usage: 3921 - 73282

### Description

This binary add operation can result in integer overflow.
In file: ApolloDepositStore.sol:31

### Code

```
nsfer(amountToTransfer);
        return amountToTr
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ApolloDepositStore
- Function name: `context()`
- PC address: 3109
- Estimated Gas Usage: 1455 - 2161

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ApolloDepositStore.sol:39

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ApolloDepositStore
- Function name: `context()`
- PC address: 3150
- Estimated Gas Usage: 2223 - 37022

### Description

This binary add operation can result in integer overflow.
In file: ApolloDepositStore.sol:39

# Analysis results for AtlasStakeStore.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: AtlasStakeStore
- Function name: `decrementStorageUsed(address)`
- PC address: 2084
- Estimated Gas Usage: 3120 - 38388

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: AtlasStakeStore.sol:38

### Code

```
 isStaking(address node) public view returns (bool
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `decrementStorageUsed(address)`
- PC address: 2125
- Estimated Gas Usage: 3888 - 73249

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:38

### Code

```
 isStaking(address node) public view returns (bool
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `getStorageUsed(address)`
- PC address: 2540
- Estimated Gas Usage: 307 - 592

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:51

### Code

```
stakes[node].storageUsed
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `isShelteringAny(address)`
- PC address: 2617
- Estimated Gas Usage: 332 - 617

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:63

### Code

```
stakes[node].storageUsed
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: AtlasStakeStore
- Function name: `depositStake(address,uint256)`
- PC address: 2791
- Estimated Gas Usage: 3180 - 38448

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: AtlasStakeStore.sol:38

### Code

```
 isStaking(address node) public view returns (bool
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `depositStake(address,uint256)`
- PC address: 2832
- Estimated Gas Usage: 3948 - 73309

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:38

### Code

```
 isStaking(address node) public view returns (bool
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `depositStake(address,uint256)`
- PC address: 3160
- Estimated Gas Usage: 9788 - 99812

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:74

### Code

```
stakes[_who].amount
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `depositStake(address,uint256)`
- PC address: 3231
- Estimated Gas Usage: 14898 - 125112

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:75

### Code

```
stakes[_who].storageLimit
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `depositStake(address,uint256)`
- PC address: 3303
- Estimated Gas Usage: 20008 - 150412

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:76

### Code

```
stakes[_who].storageUsed
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `canStore(address)`
- PC address: 3489
- Estimated Gas Usage: 395 - 680

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:47

### Code

```
stakes[node].storageLimit
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `canStore(address)`
- PC address: 3556
- Estimated Gas Usage: 894 - 1369

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:47

### Code

```
stakes[node].storageUsed
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `getStake(address)`
- PC address: 3711
- Estimated Gas Usage: 439 - 724

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:59

### Code

```
stakes[node].amount
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: AtlasStakeStore
- Function name: `updateLastChallengeResolvedSequenceNumber(address,uint256)`
- PC address: 3884
- Estimated Gas Usage: 3314 - 38582

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: AtlasStakeStore.sol:38

### Code

```
 isStaking(address node) public view returns (bool
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `updateLastChallengeResolvedSequenceNumber(address,uint256)`
- PC address: 3925
- Estimated Gas Usage: 4082 - 73443

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:38

### Code

```
 isStaking(address node) public view returns (bool
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `getLastChallengeResolvedSequenceNumber(address)`
- PC address: 4257
- Estimated Gas Usage: 483 - 768

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:131

### Code

```
stakes[node].lastChallengeResolvedSequenceNumber
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: AtlasStakeStore
- Function name: `releaseStake(address,address)`
- PC address: 4433
- Estimated Gas Usage: 3370 - 38638

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: AtlasStakeStore.sol:38

### Code

```
 isStaking(address node) public view returns (bool
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `getStorageLimit(address)`
- PC address: 5334
- Estimated Gas Usage: 527 - 812

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:55

### Code

```
stakes[node].storageLimit
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `getPenaltiesHistory(address)`
- PC address: 7187
- Estimated Gas Usage: 596 - 881

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:121

### Code

```
stakes[node].penaltiesCount
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `getPenaltiesHistory(address)`
- PC address: 7256
- Estimated Gas Usage: 1100 - 1575

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:122

### Code

```
stakes[node].lastPenaltyTime
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: AtlasStakeStore
- Function name: `context()`
- PC address: 7422
- Estimated Gas Usage: 1697 - 2403

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: AtlasStakeStore.sol:43

### Code

```
takers;
    }

```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStore
- Function name: `incrementStorageUsed(address)`
- PC address: 7463
- Estimated Gas Usage: 2498 - 37297

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStore.sol:43

### Code

```
takers;
    }

```

# Analysis results for AtlasStakeStoreMock.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: AtlasStakeStoreMock
- Function name: `decrementStorageUsed(address)`
- PC address: 2322
- Estimated Gas Usage: 3120 - 38388

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `decrementStorageUsed(address)`
- PC address: 2363
- Estimated Gas Usage: 3888 - 73249

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `getStorageUsed(address)`
- PC address: 2778
- Estimated Gas Usage: 307 - 592

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `isShelteringAny(address)`
- PC address: 2855
- Estimated Gas Usage: 332 - 617

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## External call
- SWC ID: 107
- Type: Informational
- Contract: AtlasStakeStoreMock
- Function name: `depositStake(address,uint256)`
- PC address: 3065
- Estimated Gas Usage: 3202 - 38470

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `depositStake(address,uint256)`
- PC address: 3106
- Estimated Gas Usage: 3970 - 73331

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `depositStake(address,uint256)`
- PC address: 3434
- Estimated Gas Usage: 9810 - 99834

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `depositStake(address,uint256)`
- PC address: 3505
- Estimated Gas Usage: 14920 - 125134

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `depositStake(address,uint256)`
- PC address: 3577
- Estimated Gas Usage: 20030 - 150434

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `setStakeAmount(address,uint256)`
- PC address: 3736
- Estimated Gas Usage: 422 - 707

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:29

### Code

```
stakes[node].amount
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `canStore(address)`
- PC address: 3838
- Estimated Gas Usage: 439 - 724

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `canStore(address)`
- PC address: 3905
- Estimated Gas Usage: 938 - 1413

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `getStake(address)`
- PC address: 4060
- Estimated Gas Usage: 483 - 768

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## External call
- SWC ID: 107
- Type: Informational
- Contract: AtlasStakeStoreMock
- Function name: `updateLastChallengeResolvedSequenceNumber(address,uint256)`
- PC address: 4233
- Estimated Gas Usage: 3358 - 38626

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `getLastChallengeResolvedSequenceNumber(address)`
- PC address: 4606
- Estimated Gas Usage: 527 - 812

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `getStorageLimit(address)`
- PC address: 5683
- Estimated Gas Usage: 571 - 856

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `getPenaltiesHistory(address)`
- PC address: 7536
- Estimated Gas Usage: 640 - 925

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `getPenaltiesHistory(address)`
- PC address: 7605
- Estimated Gas Usage: 1144 - 1619

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

## External call
- SWC ID: 107
- Type: Informational
- Contract: AtlasStakeStoreMock
- Function name: `incrementStorageUsed(address)`
- PC address: 7771
- Estimated Gas Usage: 1774 - 2480

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: AtlasStakeStoreMock.sol:32

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: AtlasStakeStoreMock
- Function name: `releaseStake(address,address)`
- PC address: 7812
- Estimated Gas Usage: 2515 - 37314

### Description

This binary add operation can result in integer overflow.
In file: AtlasStakeStoreMock.sol:32

# Analysis results for Head.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: Base
- Function name: `migrateFunds(address)`
- PC address: 400
- Estimated Gas Usage: 3120 - 38388

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Head.sol:43

### Code

```
context().isInternalToContext(address(msg.sender))
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Base
- Function name: `migrateFunds(address)`
- PC address: 441
- Estimated Gas Usage: 3888 - 73249

### Description

This binary add operation can result in integer overflow.
In file: Head.sol:43

### Code

```
context().isInternalToContext(address(msg.sender))
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Base
- Function name: `migrateFunds(address)`
- PC address: 775
- Estimated Gas Usage: 6875 - 111502

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Head.sol:52

### Code

```
context().isInternalToContext(address(this))
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Base
- Function name: `migrateFunds(address)`
- PC address: 816
- Estimated Gas Usage: 7643 - 146363

### Description

This binary add operation can result in integer overflow.
In file: Head.sol:52

### Code

```
context().isInternalToContext(address(this))
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Base
- Function name: `context()`
- PC address: 1596
- Estimated Gas Usage: 1389 - 2095

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Head.sol:48

### Code

```
head.context()
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Base
- Function name: `context()`
- PC address: 1637
- Estimated Gas Usage: 2157 - 36956

### Description

This binary add operation can result in integer overflow.
In file: Head.sol:48

### Code

```
head.context()
```

# Analysis results for BlockRewards.sol

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BlockRewards
- Function name: `reward(address[],uint16[])`
- PC address: 906
- Estimated Gas Usage: 376 - 471

### Description

This binary add operation can result in integer overflow.
In file: BlockRewards.sol:50

### Code

```
function reward(address[] beneficiaries, uint16[] kind) external returns (address[], uint256[]) {
        require(msg.sender == superUser, "Must be called by super user");
        require(beneficiaries.length == kind.length, "Input lists need to be of equal length");

        uint16 i = 0;
        uint16 j = 0;

        uint16 numValid = 0;
        for (i = 0; i < kind.length; i++) {
            if (!isSupportedKind(kind[i]) || !isBeneficiary(beneficiaries[i])) {
                continue;
            }
            numValid += 1;
        }

        address[] memory retAddresses = new address[](numValid);
        uint256[] memory retAmounts = new uint256[](numValid);
        
        for (i = 0; i < beneficiaries.length; i++) {
            if (!isSupportedKind(kind[i]) || !isBeneficiary(beneficiaries[i])) {
                continue;
            }
            retAddresses[j] = (beneficiaries[i]);
            retAmounts[j] = baseReward.mul(beneficiaryCount).mul(beneficiaryShare(beneficiaries[i])).div(totalShares);
            ++j;
        }

        return (retAddresses, retAmounts);
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BlockRewards
- Function name: `reward(address[],uint16[])`
- PC address: 912
- Estimated Gas Usage: 391 - 486

### Description

This binary add operation can result in integer overflow.
In file: BlockRewards.sol:50

### Code

```
function reward(address[] beneficiaries, uint16[] kind) external returns (address[], uint256[]) {
        require(msg.sender == superUser, "Must be called by super user");
        require(beneficiaries.length == kind.length, "Input lists need to be of equal length");

        uint16 i = 0;
        uint16 j = 0;

        uint16 numValid = 0;
        for (i = 0; i < kind.length; i++) {
            if (!isSupportedKind(kind[i]) || !isBeneficiary(beneficiaries[i])) {
                continue;
            }
            numValid += 1;
        }

        address[] memory retAddresses = new address[](numValid);
        uint256[] memory retAmounts = new uint256[](numValid);
        
        for (i = 0; i < beneficiaries.length; i++) {
            if (!isSupportedKind(kind[i]) || !isBeneficiary(beneficiaries[i])) {
                continue;
            }
            retAddresses[j] = (beneficiaries[i]);
            retAmounts[j] = baseReward.mul(beneficiaryCount).mul(beneficiaryShare(beneficiaries[i])).div(totalShares);
            ++j;
        }

        return (retAddresses, retAmounts);
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BlockRewards
- Function name: `reward(address[],uint16[])`
- PC address: 930
- Estimated Gas Usage: 442 - 537

### Description

This binary add operation can result in integer overflow.
In file: BlockRewards.sol:50

### Code

```
function reward(address[] beneficiaries, uint16[] kind) external returns (address[], uint256[]) {
        require(msg.sender == superUser, "Must be called by super user");
        require(beneficiaries.length == kind.length, "Input lists need to be of equal length");

        uint16 i = 0;
        uint16 j = 0;

        uint16 numValid = 0;
        for (i = 0; i < kind.length; i++) {
            if (!isSupportedKind(kind[i]) || !isBeneficiary(beneficiaries[i])) {
                continue;
            }
            numValid += 1;
        }

        address[] memory retAddresses = new address[](numValid);
        uint256[] memory retAmounts = new uint256[](numValid);
        
        for (i = 0; i < beneficiaries.length; i++) {
            if (!isSupportedKind(kind[i]) || !isBeneficiary(beneficiaries[i])) {
                continue;
            }
            retAddresses[j] = (beneficiaries[i]);
            retAmounts[j] = baseReward.mul(beneficiaryCount).mul(beneficiaryShare(beneficiaries[i])).div(totalShares);
            ++j;
        }

        return (retAddresses, retAmounts);
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BlockRewards
- Function name: `reward(address[],uint16[])`
- PC address: 936
- Estimated Gas Usage: 457 - 552

### Description

This binary add operation can result in integer overflow.
In file: BlockRewards.sol:50

### Code

```
function reward(address[] beneficiaries, uint16[] kind) external returns (address[], uint256[]) {
        require(msg.sender == superUser, "Must be called by super user");
        require(beneficiaries.length == kind.length, "Input lists need to be of equal length");

        uint16 i = 0;
        uint16 j = 0;

        uint16 numValid = 0;
        for (i = 0; i < kind.length; i++) {
            if (!isSupportedKind(kind[i]) || !isBeneficiary(beneficiaries[i])) {
                continue;
            }
            numValid += 1;
        }

        address[] memory retAddresses = new address[](numValid);
        uint256[] memory retAmounts = new uint256[](numValid);
        
        for (i = 0; i < beneficiaries.length; i++) {
            if (!isSupportedKind(kind[i]) || !isBeneficiary(beneficiaries[i])) {
                continue;
            }
            retAddresses[j] = (beneficiaries[i]);
            retAmounts[j] = baseReward.mul(beneficiaryCount).mul(beneficiaryShare(beneficiaries[i])).div(totalShares);
            ++j;
        }

        return (retAddresses, retAmounts);
    }
```

# Analysis results for BundleStore.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: BundleStore
- Function name: `removeShelterer(bytes32,address)`
- PC address: 1851
- Estimated Gas Usage: 3156 - 38424

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: BundleStore.sol:36

### Code

```
   uint64 uploadTimestamp;
        uint32 uploadBl
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BundleStore
- Function name: `removeShelterer(bytes32,address)`
- PC address: 1892
- Estimated Gas Usage: 3924 - 73285

### Description

This binary add operation can result in integer overflow.
In file: BundleStore.sol:36

### Code

```
   uint64 uploadTimestamp;
        uint32 uploadBl
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BundleStore
- Function name: `getUploadBlockNumber(bytes32)`
- PC address: 2563
- Estimated Gas Usage: 338 - 623

### Description

This binary add operation can result in integer overflow.
In file: BundleStore.sol:61

### Code

```
bundles[bundleId].uploadBlockNumber
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: BundleStore
- Function name: `addShelterer(bytes32,address,uint256,uint64,uint64)`
- PC address: 2758
- Estimated Gas Usage: 3306 - 38574

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: BundleStore.sol:36

### Code

```
   uint64 uploadTimestamp;
        uint32 uploadBl
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BundleStore
- Function name: `addShelterer(bytes32,address,uint256,uint64,uint64)`
- PC address: 2799
- Estimated Gas Usage: 4074 - 73435

### Description

This binary add operation can result in integer overflow.
In file: BundleStore.sol:36

### Code

```
   uint64 uploadTimestamp;
        uint32 uploadBl
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BundleStore
- Function name: `bundleExists(bytes32)`
- PC address: 3913
- Estimated Gas Usage: 538 - 823

### Description

This binary add operation can result in integer overflow.
In file: BundleStore.sol:65

### Code

```
bundles[bundleId].storagePeriods
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: BundleStore
- Function name: `store(bytes32,address,uint64,uint64)`
- PC address: 4106
- Estimated Gas Usage: 3345 - 38613

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: BundleStore.sol:36

### Code

```
   uint64 uploadTimestamp;
        uint32 uploadBl
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BundleStore
- Function name: `store(bytes32,address,uint64,uint64)`
- PC address: 4147
- Estimated Gas Usage: 4113 - 73474

### Description

This binary add operation can result in integer overflow.
In file: BundleStore.sol:36

### Code

```
   uint64 uploadTimestamp;
        uint32 uploadBl
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BundleStore
- Function name: `getTotalShelteringReward(bytes32,address)`
- PC address: 4922
- Estimated Gas Usage: 481 - 766

### Description

This binary add operation can result in integer overflow.
In file: BundleStore.sol:77

### Code

```
bundles[bundleId].shelterings
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BundleStore
- Function name: `getTotalShelteringReward(bytes32,address)`
- PC address: 4986
- Estimated Gas Usage: 577 - 1052

### Description

This binary add operation can result in integer overflow.
In file: BundleStore.sol:77

### Code

```
bundles[bundleId].shelterings[shelterer].totalShelteringReward
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BundleStore
- Function name: `getUploadTimestamp(bytes32)`
- PC address: 5027
- Estimated Gas Usage: 470 - 755

### Description

This binary add operation can result in integer overflow.
In file: BundleStore.sol:57

### Code

```
bundles[bundleId].uploadTimestamp
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BundleStore
- Function name: `getShelteringStartDate(bytes32,address)`
- PC address: 5087
- Estimated Gas Usage: 525 - 810

### Description

This binary add operation can result in integer overflow.
In file: BundleStore.sol:73

### Code

```
bundles[bundleId].shelterings
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BundleStore
- Function name: `getShelterers(bytes32)`
- PC address: 5242
- Estimated Gas Usage: 536 - 821

### Description

This binary add operation can result in integer overflow.
In file: BundleStore.sol:69

### Code

```
bundles[bundleId].shelterers
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: BundleStore
- Function name: `removeSheltererByIndex(bytes32,uint32)`
- PC address: 6743
- Estimated Gas Usage: 1788 - 2494

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: BundleStore.sol:42

### Code

```
ent SheltererR
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: BundleStore
- Function name: `context()`
- PC address: 6784
- Estimated Gas Usage: 2421 - 37220

### Description

This binary add operation can result in integer overflow.
In file: BundleStore.sol:42

### Code

```
ent SheltererR
```

# Analysis results for CalledContract.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: CalledContract
- Function name: `contextInternalMethod()`
- PC address: 431
- Estimated Gas Usage: 3058 - 38326

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: CalledContract.sol:22

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: CalledContract
- Function name: `contextInternalMethod()`
- PC address: 472
- Estimated Gas Usage: 3826 - 73187

### Description

This binary add operation can result in integer overflow.
In file: CalledContract.sol:22

## External call
- SWC ID: 107
- Type: Informational
- Contract: CalledContract
- Function name: `migrateFunds(address)`
- PC address: 808
- Estimated Gas Usage: 3133 - 38401

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: CalledContract.sol:22

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: CalledContract
- Function name: `migrateFunds(address)`
- PC address: 849
- Estimated Gas Usage: 3901 - 73262

### Description

This binary add operation can result in integer overflow.
In file: CalledContract.sol:22

## External call
- SWC ID: 107
- Type: Informational
- Contract: CalledContract
- Function name: `migrateFunds(address)`
- PC address: 1183
- Estimated Gas Usage: 6888 - 111515

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: CalledContract.sol:22

## External call
- SWC ID: 107
- Type: Informational
- Contract: CalledContract
- Function name: `context()`
- PC address: 2004
- Estimated Gas Usage: 1411 - 2117

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: CalledContract.sol:22

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: CalledContract
- Function name: `context()`
- PC address: 2045
- Estimated Gas Usage: 2179 - 36978

### Description

This binary add operation can result in integer overflow.
In file: CalledContract.sol:22

# Analysis results for CallerContract.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: CallerContract
- Function name: `migrateFunds(address)`
- PC address: 434
- Estimated Gas Usage: 3120 - 38388

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: CallerContract.sol:27

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: CallerContract
- Function name: `migrateFunds(address)`
- PC address: 475
- Estimated Gas Usage: 3888 - 73249

### Description

This binary add operation can result in integer overflow.
In file: CallerContract.sol:27

## External call
- SWC ID: 107
- Type: Informational
- Contract: CallerContract
- Function name: `migrateFunds(address)`
- PC address: 809
- Estimated Gas Usage: 6875 - 111502

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: CallerContract.sol:27

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: CallerContract
- Function name: `migrateFunds(address)`
- PC address: 850
- Estimated Gas Usage: 7643 - 146363

### Description

This binary add operation can result in integer overflow.
In file: CallerContract.sol:27

## External call
- SWC ID: 107
- Type: Informational
- Contract: CallerContract
- Function name: `callOtherContract()`
- PC address: 1629
- Estimated Gas Usage: 1386 - 2092

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: CallerContract.sol:24

### Code

```
otherContract.contextInternalMethod()
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: CallerContract
- Function name: `context()`
- PC address: 1790
- Estimated Gas Usage: 1411 - 2117

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: CallerContract.sol:27

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: CallerContract
- Function name: `context()`
- PC address: 1831
- Estimated Gas Usage: 2179 - 36978

### Description

This binary add operation can result in integer overflow.
In file: CallerContract.sol:27

# Analysis result for Catalogue

No issues found.
# Analysis results for Challenges.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `challengeIsTimedOut(bytes32)`
- PC address: 1901
- Estimated Gas Usage: 3796 - 39952

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:139

### Code

```
config.CHALLENGE_DURATION()
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `challengeIsTimedOut(bytes32)`
- PC address: 1942
- Estimated Gas Usage: 4564 - 74813

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:139

### Code

```
config.CHALLENGE_DURATION()
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `challengeIsTimedOut(bytes32)`
- PC address: 2119
- Estimated Gas Usage: 5963 - 76916

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:139

### Code

```
time.currentTimestamp()
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `challengeIsTimedOut(bytes32)`
- PC address: 2160
- Estimated Gas Usage: 6731 - 111777

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:139

### Code

```
time.currentTimestamp()
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `getCooldown()`
- PC address: 2337
- Estimated Gas Usage: 1398 - 2104

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:190

### Code

```
atlasStakeStore.getNumberOfStakers()
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `getCooldown()`
- PC address: 2378
- Estimated Gas Usage: 2166 - 36965

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:190

### Code

```
atlasStakeStore.getNumberOfStakers()
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `getCooldown()`
- PC address: 2532
- Estimated Gas Usage: 3453 - 38956

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:191

### Code

```
config.COOLDOWN_LOW_REDUCTION()
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `getCooldown()`
- PC address: 2573
- Estimated Gas Usage: 4221 - 73817

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:191

### Code

```
config.COOLDOWN_LOW_REDUCTION()
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `getCooldown()`
- PC address: 2756
- Estimated Gas Usage: 5546 - 75846

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:195

### Code

```
config.COOLDOWN_SWITCH_THRESHOLD()
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `getCooldown()`
- PC address: 2797
- Estimated Gas Usage: 6314 - 110707

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:195

### Code

```
config.COOLDOWN_SWITCH_THRESHOLD()
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `getCooldown()`
- PC address: 3039
- Estimated Gas Usage: 7657 - 112754

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:199

### Code

```
config.COOLDOWN_HIGH_PERCENTAGE()
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `getCooldown()`
- PC address: 3080
- Estimated Gas Usage: 8425 - 147615

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:199

### Code

```
config.COOLDOWN_HIGH_PERCENTAGE()
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `getChallengedShelterer(bytes32)`
- PC address: 3329
- Estimated Gas Usage: 1525 - 2326

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:143

### Code

```
challengesStore.getChallenge(challengeId)
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `getChallengedShelterer(bytes32)`
- PC address: 3370
- Estimated Gas Usage: 2293 - 37187

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:143

### Code

```
challengesStore.getChallenge(challengeId)
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `start(address,bytes32)`
- PC address: 3672
- Estimated Gas Usage: 1818 - 2714

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:186

### Code

```
challengesStore.getChallengeId(sheltererId, bundleId)
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `start(address,bytes32)`
- PC address: 3713
- Estimated Gas Usage: 2586 - 37575

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:186

### Code

```
challengesStore.getChallengeId(sheltererId, bundleId)
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `challengeIsInProgress(bytes32)`
- PC address: 5915
- Estimated Gas Usage: 1769 - 2570

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:168

### Code

```
challengesStore.getChallenge(challengeId)
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `challengeIsInProgress(bytes32)`
- PC address: 5956
- Estimated Gas Usage: 2537 - 37431

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:168

### Code

```
challengesStore.getChallenge(challengeId)
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `getChallengeSequenceNumber(bytes32)`
- PC address: 6207
- Estimated Gas Usage: 1635 - 2436

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:173

### Code

```
challengesStore.getChallenge(challengeId)
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `getChallengeSequenceNumber(bytes32)`
- PC address: 6248
- Estimated Gas Usage: 2403 - 37297

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:173

### Code

```
challengesStore.getChallenge(challengeId)
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `getChallengedBundle(bytes32)`
- PC address: 6499
- Estimated Gas Usage: 1657 - 2458

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:148

### Code

```
challengesStore.getChallenge(challengeId)
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `getChallengedBundle(bytes32)`
- PC address: 6540
- Estimated Gas Usage: 2425 - 37319

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:148

### Code

```
challengesStore.getChallenge(challengeId)
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `isSystemChallenge(bytes32)`
- PC address: 6791
- Estimated Gas Usage: 1725 - 2526

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:153

### Code

```
challengesStore.getChallenge(challengeId)
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `isSystemChallenge(bytes32)`
- PC address: 6832
- Estimated Gas Usage: 2493 - 37387

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:153

### Code

```
challengesStore.getChallenge(challengeId)
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `getChallengeFee(bytes32)`
- PC address: 9098
- Estimated Gas Usage: 1789 - 2590

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:158

### Code

```
challengesStore.getChallenge(challengeId)
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `getChallengeFee(bytes32)`
- PC address: 9139
- Estimated Gas Usage: 2557 - 37451

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:158

### Code

```
challengesStore.getChallenge(challengeId)
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `startForSystem(address,bytes32,uint8)`
- PC address: 9369
- Estimated Gas Usage: 1844 - 2550

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:33

### Code

```
;

    Time pr
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `migrateFunds(address)`
- PC address: 9410
- Estimated Gas Usage: 2498 - 37297

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:33

### Code

```
;

    Time pr
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Challenges
- Function name: `challengeIsTimedOut(bytes32)`
- PC address: 12335
- Estimated Gas Usage: 1514 - 2315

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Challenges.sol:163

### Code

```
challengesStore.getChallenge(challengeId)
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Challenges
- Function name: `challengeIsTimedOut(bytes32)`
- PC address: 12376
- Estimated Gas Usage: 2282 - 37176

### Description

This binary add operation can result in integer overflow.
In file: Challenges.sol:163

### Code

```
challengesStore.getChallenge(challengeId)
```

# Analysis results for ChallengesStore.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStore
- Function name: `getNextChallengeSequenceNumber()`
- PC address: 1299
- Estimated Gas Usage: 3061 - 38329

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `getNextChallengeSequenceNumber()`
- PC address: 1340
- Estimated Gas Usage: 3829 - 73190

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStore
- Function name: `getChallengeId(address,bytes32)`
- PC address: 1684
- Estimated Gas Usage: 3172 - 38440

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `getChallengeId(address,bytes32)`
- PC address: 1725
- Estimated Gas Usage: 3940 - 73301

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `getChallenge(bytes32)`
- PC address: 2189
- Estimated Gas Usage: 812 - 1427

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:73

### Code

```
challenge.bundleId
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `getChallenge(bytes32)`
- PC address: 2194
- Estimated Gas Usage: 1221 - 1836

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:74

### Code

```
challenge.challengerId
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `getChallenge(bytes32)`
- PC address: 2231
- Estimated Gas Usage: 1666 - 2611

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:75

### Code

```
challenge.feePerChallenge
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `getChallenge(bytes32)`
- PC address: 2236
- Estimated Gas Usage: 2075 - 3020

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:76

### Code

```
challenge.creationTime
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `getChallenge(bytes32)`
- PC address: 2261
- Estimated Gas Usage: 2520 - 3795

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:77

### Code

```
challenge.activeCount
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `getChallenge(bytes32)`
- PC address: 2279
- Estimated Gas Usage: 2965 - 4570

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:78

### Code

```
challenge.sequenceNumber
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStore
- Function name: `getActiveChallengesOnBundleCount(bytes32)`
- PC address: 2473
- Estimated Gas Usage: 3183 - 38451

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `getActiveChallengesOnBundleCount(bytes32)`
- PC address: 2514
- Estimated Gas Usage: 3951 - 73312

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStore
- Function name: `remove(bytes32)`
- PC address: 2899
- Estimated Gas Usage: 3202 - 38470

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `remove(bytes32)`
- PC address: 2940
- Estimated Gas Usage: 3970 - 73331

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `remove(bytes32)`
- PC address: 3145
- Estimated Gas Usage: 4140 - 73784

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:61

### Code

```
challenges[challengeId].activeCount
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `remove(bytes32)`
- PC address: 3196
- Estimated Gas Usage: 4693 - 74857

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:61

### Code

```
challenges[challengeId].bundleId
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStore
- Function name: `store(address,bytes32,address,uint256,uint64,uint8)`
- PC address: 3698
- Estimated Gas Usage: 3365 - 38633

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `store(address,bytes32,address,uint256,uint64,uint8)`
- PC address: 3739
- Estimated Gas Usage: 4133 - 73494

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStore
- Function name: `transferFee(address,uint256)`
- PC address: 4650
- Estimated Gas Usage: 3270 - 38538

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `transferFee(address,uint256)`
- PC address: 4691
- Estimated Gas Usage: 4038 - 73399

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## Ether thief
- SWC ID: 105
- Type: Warning
- Contract: ChallengesStore
- Function name: `transferFee(address,uint256)`
- PC address: 4908
- Estimated Gas Usage: 4168 - 73808

### Description

Arbitrary senders other than the contract creator can withdraw ETH from the contract account without previously having sent an equivalent amount of ETH to it. This is likely to be a vulnerability.
In file: ChallengesStore.sol:66

### Code

```
refundAddress.transfer(amountToReturn)
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStore
- Function name: `migrateFunds(address)`
- PC address: 5100
- Estimated Gas Usage: 3265 - 38533

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `migrateFunds(address)`
- PC address: 5141
- Estimated Gas Usage: 4033 - 73394

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStore
- Function name: `decreaseActiveCount(bytes32)`
- PC address: 6296
- Estimated Gas Usage: 1645 - 2351

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStore.sol:45

### Code

```
tes32 bundleId
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `decreaseActiveCount(bytes32)`
- PC address: 6337
- Estimated Gas Usage: 2413 - 37212

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:45

### Code

```
tes32 bundleId
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStore
- Function name: `decreaseActiveCount(bytes32)`
- PC address: 6522
- Estimated Gas Usage: 3312 - 38580

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStore
- Function name: `decreaseActiveCount(bytes32)`
- PC address: 6563
- Estimated Gas Usage: 4080 - 73441

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStore.sol:35

### Code

```
umber;

    constructor(Head _head) public Base(_h
```

# Analysis results for ChallengesStoreMock.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStoreMock
- Function name: `getNextChallengeSequenceNumber()`
- PC address: 1491
- Estimated Gas Usage: 3061 - 38329

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `getNextChallengeSequenceNumber()`
- PC address: 1532
- Estimated Gas Usage: 3829 - 73190

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStoreMock
- Function name: `getChallengeId(address,bytes32)`
- PC address: 1876
- Estimated Gas Usage: 3172 - 38440

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `getChallengeId(address,bytes32)`
- PC address: 1917
- Estimated Gas Usage: 3940 - 73301

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `getChallenge(bytes32)`
- PC address: 2381
- Estimated Gas Usage: 812 - 1427

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:36

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `getChallenge(bytes32)`
- PC address: 2386
- Estimated Gas Usage: 1221 - 1836

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:36

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `getChallenge(bytes32)`
- PC address: 2423
- Estimated Gas Usage: 1666 - 2611

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:36

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `getChallenge(bytes32)`
- PC address: 2428
- Estimated Gas Usage: 2075 - 3020

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:36

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `getChallenge(bytes32)`
- PC address: 2453
- Estimated Gas Usage: 2520 - 3795

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:36

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `getChallenge(bytes32)`
- PC address: 2471
- Estimated Gas Usage: 2965 - 4570

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:36

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStoreMock
- Function name: `getActiveChallengesOnBundleCount(bytes32)`
- PC address: 2665
- Estimated Gas Usage: 3183 - 38451

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `getActiveChallengesOnBundleCount(bytes32)`
- PC address: 2706
- Estimated Gas Usage: 3951 - 73312

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStoreMock
- Function name: `remove(bytes32)`
- PC address: 3091
- Estimated Gas Usage: 3202 - 38470

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `remove(bytes32)`
- PC address: 3132
- Estimated Gas Usage: 3970 - 73331

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `remove(bytes32)`
- PC address: 3337
- Estimated Gas Usage: 4140 - 73784

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:36

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `remove(bytes32)`
- PC address: 3388
- Estimated Gas Usage: 4693 - 74857

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:36

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStoreMock
- Function name: `store(address,bytes32,address,uint256,uint64,uint8)`
- PC address: 3890
- Estimated Gas Usage: 3365 - 38633

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `store(address,bytes32,address,uint256,uint64,uint8)`
- PC address: 3931
- Estimated Gas Usage: 4133 - 73494

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStoreMock
- Function name: `transferFee(address,uint256)`
- PC address: 4842
- Estimated Gas Usage: 3270 - 38538

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `transferFee(address,uint256)`
- PC address: 4883
- Estimated Gas Usage: 4038 - 73399

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## Ether thief
- SWC ID: 105
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `transferFee(address,uint256)`
- PC address: 5100
- Estimated Gas Usage: 4168 - 73808

### Description

Arbitrary senders other than the contract creator can withdraw ETH from the contract account without previously having sent an equivalent amount of ETH to it. This is likely to be a vulnerability.
In file: ChallengesStoreMock.sol:36

## Unchecked CALL return value
- SWC ID: 104
- Type: Informational
- Contract: ChallengesStoreMock
- Function name: `transferFee(address,uint256)`
- PC address: 5101
- Estimated Gas Usage: 4868 - 108508

### Description

The return value of an external call is not checked. Note that execution continue even if the called contract throws.
In file: ChallengesStoreMock.sol:36

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStoreMock
- Function name: `migrateFunds(address)`
- PC address: 5292
- Estimated Gas Usage: 3265 - 38533

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `migrateFunds(address)`
- PC address: 5333
- Estimated Gas Usage: 4033 - 73394

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStoreMock
- Function name: `transferFee(address,uint256)`
- PC address: 6488
- Estimated Gas Usage: 1603 - 2309

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStoreMock.sol:36

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: ChallengesStoreMock
- Function name: `transferFee(address,uint256)`
- PC address: 6529
- Estimated Gas Usage: 2371 - 37170

### Description

This binary add operation can result in integer overflow.
In file: ChallengesStoreMock.sol:36

## External call
- SWC ID: 107
- Type: Informational
- Contract: ChallengesStoreMock
- Function name: `decreaseActiveCount(bytes32)`
- PC address: 7281
- Estimated Gas Usage: 3334 - 38602

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: ChallengesStoreMock.sol:31

### Code

```
);
        activeChallengesOnBundleCount[bundleId]
```

# Analysis result for Config

No issues found.
# Analysis result for ConstructorOwnable

No issues found.
# Analysis result for Consts

No issues found.
# Analysis result for Context

No issues found.
# Analysis results for Fees.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: Fees
- Function name: `migrateFunds(address)`
- PC address: 1738
- Estimated Gas Usage: 3265 - 38533

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Fees.sol:31

### Code

```
  Time private time;


    constructor(Head _head,
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Fees
- Function name: `migrateFunds(address)`
- PC address: 1779
- Estimated Gas Usage: 4033 - 73394

### Description

This binary add operation can result in integer overflow.
In file: Fees.sol:31

### Code

```
  Time private time;


    constructor(Head _head,
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Fees
- Function name: `context()`
- PC address: 3009
- Estimated Gas Usage: 1565 - 2271

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Fees.sol:39

### Code

```
 public onlyOw
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Fees
- Function name: `context()`
- PC address: 3050
- Estimated Gas Usage: 2333 - 37132

### Description

This binary add operation can result in integer overflow.
In file: Fees.sol:39

### Code

```
 public onlyOw
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Fees
- Function name: `getPenalty(uint256,uint256,uint256)`
- PC address: 3254
- Estimated Gas Usage: 1722 - 2428

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Fees.sol:59

### Code

```
config.PENALTY_ESCALATION_TIMEOUT()
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Fees
- Function name: `getPenalty(uint256,uint256,uint256)`
- PC address: 3295
- Estimated Gas Usage: 2490 - 37289

### Description

This binary add operation can result in integer overflow.
In file: Fees.sol:59

### Code

```
config.PENALTY_ESCALATION_TIMEOUT()
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Fees
- Function name: `getPenalty(uint256,uint256,uint256)`
- PC address: 3448
- Estimated Gas Usage: 3775 - 39278

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Fees.sol:59

### Code

```
time.currentTimestamp()
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Fees
- Function name: `getPenalty(uint256,uint256,uint256)`
- PC address: 3489
- Estimated Gas Usage: 4543 - 74139

### Description

This binary add operation can result in integer overflow.
In file: Fees.sol:59

### Code

```
time.currentTimestamp()
```

## Integer Underflow
- SWC ID: 101
- Type: Warning
- Contract: Fees
- Function name: `getPenalty(uint256,uint256,uint256)`
- PC address: 3515
- Estimated Gas Usage: 4591 - 74280

### Description

The subtraction can result in an integer underflow.
In file: Fees.sol:59

### Code

```
time.currentTimestamp() - lastPenaltyTime
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Fees
- Function name: `calculateFeeSplit(uint256)`
- PC address: 4107
- Estimated Gas Usage: 376 - 471

### Description

This binary multiply operation can result in integer overflow.
In file: Fees.sol:14

### Code

```
impor
```

# Analysis result for Head

No issues found.
# Analysis results for KycWhitelist.sol

## Exception state
- SWC ID: 110
- Type: Informational
- Contract: KycWhitelist
- Function name: `getRoleAssigned(address)`
- PC address: 564
- Estimated Gas Usage: 2448 - 37528

### Description

A reachable exception (opcode 0xfe) has been detected. This can be caused by type errors, division by zero, out-of-bounds array access, or assert violations. Note that explicit `assert()` should only be used to check invariants. Use `require()` for regular input checking.
In file: KycWhitelist.sol:54

### Code

```
function getRoleAssigned(address candidate) public view returns(Consts.NodeType role) {
        return kycWhitelistStore.getRoleAssigned(candidate);
    }
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: KycWhitelist
- Function name: `isWhitelisted(address)`
- PC address: 1425
- Estimated Gas Usage: 1529 - 2330

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: KycWhitelist.sol:43

### Code

```
kycWhitelistStore.getRoleAssigned(candidate)
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: KycWhitelist
- Function name: `isWhitelisted(address)`
- PC address: 1466
- Estimated Gas Usage: 2297 - 37191

### Description

This binary add operation can result in integer overflow.
In file: KycWhitelist.sol:43

### Code

```
kycWhitelistStore.getRoleAssigned(candidate)
```

## Exception state
- SWC ID: 110
- Type: Informational
- Contract: KycWhitelist
- Function name: `isWhitelisted(address)`
- PC address: 1491
- Estimated Gas Usage: 2364 - 37351

### Description

A reachable exception (opcode 0xfe) has been detected. This can be caused by type errors, division by zero, out-of-bounds array access, or assert violations. Note that explicit `assert()` should only be used to check invariants. Use `require()` for regular input checking.
In file: KycWhitelist.sol:43

### Code

```
kycWhitelistStore.getRoleAssigned(candidate) != Consts.NodeType.NONE
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: KycWhitelist
- Function name: `getRoleAssigned(address)`
- PC address: 2033
- Estimated Gas Usage: 1579 - 2380

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: KycWhitelist.sol:55

### Code

```
kycWhitelistStore.getRoleAssigned(candidate)
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: KycWhitelist
- Function name: `getRoleAssigned(address)`
- PC address: 2074
- Estimated Gas Usage: 2347 - 37241

### Description

This binary add operation can result in integer overflow.
In file: KycWhitelist.sol:55

### Code

```
kycWhitelistStore.getRoleAssigned(candidate)
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: KycWhitelist
- Function name: `getRequiredDeposit(address)`
- PC address: 2290
- Estimated Gas Usage: 1601 - 2402

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: KycWhitelist.sol:51

### Code

```
kycWhitelistStore.getRequiredDeposit(candidate)
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: KycWhitelist
- Function name: `getRequiredDeposit(address)`
- PC address: 2331
- Estimated Gas Usage: 2369 - 37263

### Description

This binary add operation can result in integer overflow.
In file: KycWhitelist.sol:51

### Code

```
kycWhitelistStore.getRequiredDeposit(candidate)
```

## Exception state
- SWC ID: 110
- Type: Informational
- Contract: KycWhitelist
- Function name: `hasRoleAssigned(address,uint8)`
- PC address: 2366
- Estimated Gas Usage: 404 - 499

### Description

A reachable exception (opcode 0xfe) has been detected. This can be caused by type errors, division by zero, out-of-bounds array access, or assert violations. Note that explicit `assert()` should only be used to check invariants. Use `require()` for regular input checking.
In file: KycWhitelist.sol:47

### Code

```
kycWhitelistStore.getRoleAssigned(candidate) == role
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: KycWhitelist
- Function name: `hasRoleAssigned(address,uint8)`
- PC address: 2559
- Estimated Gas Usage: 1685 - 2486

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: KycWhitelist.sol:47

### Code

```
kycWhitelistStore.getRoleAssigned(candidate)
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: KycWhitelist
- Function name: `hasRoleAssigned(address,uint8)`
- PC address: 2600
- Estimated Gas Usage: 2453 - 37347

### Description

This binary add operation can result in integer overflow.
In file: KycWhitelist.sol:47

### Code

```
kycWhitelistStore.getRoleAssigned(candidate)
```

## Exception state
- SWC ID: 110
- Type: Informational
- Contract: KycWhitelist
- Function name: `hasRoleAssigned(address,uint8)`
- PC address: 2625
- Estimated Gas Usage: 2520 - 37507

### Description

A reachable exception (opcode 0xfe) has been detected. This can be caused by type errors, division by zero, out-of-bounds array access, or assert violations. Note that explicit `assert()` should only be used to check invariants. Use `require()` for regular input checking.
In file: KycWhitelist.sol:47

### Code

```
kycWhitelistStore.getRoleAssigned(candidate) == role
```

# Analysis results for KycWhitelistStore.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: KycWhitelistStore
- Function name: `set(address,uint8,uint256)`
- PC address: 711
- Estimated Gas Usage: 3180 - 38448

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: KycWhitelistStore.sol:33

### Code

```
quiredDeposit;
    }

    function getRoleAssigned
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: KycWhitelistStore
- Function name: `set(address,uint8,uint256)`
- PC address: 752
- Estimated Gas Usage: 3948 - 73309

### Description

This binary add operation can result in integer overflow.
In file: KycWhitelistStore.sol:33

### Code

```
quiredDeposit;
    }

    function getRoleAssigned
```

## Exception state
- SWC ID: 110
- Type: Informational
- Contract: KycWhitelistStore
- Function name: `set(address,uint8,uint256)`
- PC address: 1014
- Estimated Gas Usage: 4579 - 74553

### Description

A reachable exception (opcode 0xfe) has been detected. This can be caused by type errors, division by zero, out-of-bounds array access, or assert violations. Note that explicit `assert()` should only be used to check invariants. Use `require()` for regular input checking.
In file: KycWhitelistStore.sol:28

### Code

```
whitelist[candidate].allowedRole = role
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: KycWhitelistStore
- Function name: `set(address,uint8,uint256)`
- PC address: 1087
- Estimated Gas Usage: 9692 - 99856

### Description

This binary add operation can result in integer overflow.
In file: KycWhitelistStore.sol:29

### Code

```
whitelist[candidate].requiredDeposit
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: KycWhitelistStore
- Function name: `migrateFunds(address)`
- PC address: 1350
- Estimated Gas Usage: 3155 - 38423

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: KycWhitelistStore.sol:33

### Code

```
quiredDeposit;
    }

    function getRoleAssigned
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: KycWhitelistStore
- Function name: `migrateFunds(address)`
- PC address: 1391
- Estimated Gas Usage: 3923 - 73284

### Description

This binary add operation can result in integer overflow.
In file: KycWhitelistStore.sol:33

### Code

```
quiredDeposit;
    }

    function getRoleAssigned
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: KycWhitelistStore
- Function name: `migrateFunds(address)`
- PC address: 1725
- Estimated Gas Usage: 6910 - 111537

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: KycWhitelistStore.sol:40

## External call
- SWC ID: 107
- Type: Informational
- Contract: KycWhitelistStore
- Function name: `context()`
- PC address: 2546
- Estimated Gas Usage: 1433 - 2139

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: KycWhitelistStore.sol:40

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: KycWhitelistStore
- Function name: `context()`
- PC address: 2587
- Estimated Gas Usage: 2201 - 37000

### Description

This binary add operation can result in integer overflow.
In file: KycWhitelistStore.sol:40

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: KycWhitelistStore
- Function name: `getRequiredDeposit(address)`
- PC address: 2675
- Estimated Gas Usage: 373 - 658

### Description

This binary add operation can result in integer overflow.
In file: KycWhitelistStore.sol:33

### Code

```
whitelist[candidate].requiredDeposit
```

# Analysis result for Math

No issues found.
# Analysis results for MockContext.sol

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `removeFromWhitelist(address[])`
- PC address: 337
- Estimated Gas Usage: 200 - 295

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:27

### Code

```
function removeFromWhitelist(address[] unWhitelisted) public {
        for (uint i = 0; i < unWhitelisted.length; i++) {
            whitelist[unWhitelisted[i]] = false;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `removeFromWhitelist(address[])`
- PC address: 343
- Estimated Gas Usage: 215 - 310

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:27

### Code

```
function removeFromWhitelist(address[] unWhitelisted) public {
        for (uint i = 0; i < unWhitelisted.length; i++) {
            whitelist[unWhitelisted[i]] = false;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `removeFromWhitelist(address[])`
- PC address: 349
- Estimated Gas Usage: 230 - 325

### Description

This binary multiply operation can result in integer overflow.
In file: MockContext.sol:27

### Code

```
function removeFromWhitelist(address[] unWhitelisted) public {
        for (uint i = 0; i < unWhitelisted.length; i++) {
            whitelist[unWhitelisted[i]] = false;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `removeFromWhitelist(address[])`
- PC address: 352
- Estimated Gas Usage: 238 - 333

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:27

### Code

```
function removeFromWhitelist(address[] unWhitelisted) public {
        for (uint i = 0; i < unWhitelisted.length; i++) {
            whitelist[unWhitelisted[i]] = false;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `removeFromWhitelist(address[])`
- PC address: 358
- Estimated Gas Usage: 253 - 441

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:27

### Code

```
function removeFromWhitelist(address[] unWhitelisted) public {
        for (uint i = 0; i < unWhitelisted.length; i++) {
            whitelist[unWhitelisted[i]] = false;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `removeFromWhitelist(address[])`
- PC address: 377
- Estimated Gas Usage: 301 - 679

### Description

This binary multiply operation can result in integer overflow.
In file: MockContext.sol:27

### Code

```
function removeFromWhitelist(address[] unWhitelisted) public {
        for (uint i = 0; i < unWhitelisted.length; i++) {
            whitelist[unWhitelisted[i]] = false;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `removeFromWhitelist(address[])`
- PC address: 383
- Estimated Gas Usage: 323 - 3005

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:27

### Code

```
function removeFromWhitelist(address[] unWhitelisted) public {
        for (uint i = 0; i < unWhitelisted.length; i++) {
            whitelist[unWhitelisted[i]] = false;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `trustedAddresses(address)`
- PC address: 484
- Estimated Gas Usage: 801 - 1604

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:15

### Code

```
ontext {
    mapping(address => bool) whitelist;

```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `addToWhitelist(address[])`
- PC address: 530
- Estimated Gas Usage: 244 - 339

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:21

### Code

```
function addToWhitelist(address[] whitelisted) public {
        for (uint i = 0; i < whitelisted.length; i++) {
            whitelist[whitelisted[i]] = true;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `addToWhitelist(address[])`
- PC address: 536
- Estimated Gas Usage: 259 - 354

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:21

### Code

```
function addToWhitelist(address[] whitelisted) public {
        for (uint i = 0; i < whitelisted.length; i++) {
            whitelist[whitelisted[i]] = true;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `addToWhitelist(address[])`
- PC address: 542
- Estimated Gas Usage: 274 - 369

### Description

This binary multiply operation can result in integer overflow.
In file: MockContext.sol:21

### Code

```
function addToWhitelist(address[] whitelisted) public {
        for (uint i = 0; i < whitelisted.length; i++) {
            whitelist[whitelisted[i]] = true;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `addToWhitelist(address[])`
- PC address: 545
- Estimated Gas Usage: 282 - 377

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:21

### Code

```
function addToWhitelist(address[] whitelisted) public {
        for (uint i = 0; i < whitelisted.length; i++) {
            whitelist[whitelisted[i]] = true;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `addToWhitelist(address[])`
- PC address: 551
- Estimated Gas Usage: 297 - 485

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:21

### Code

```
function addToWhitelist(address[] whitelisted) public {
        for (uint i = 0; i < whitelisted.length; i++) {
            whitelist[whitelisted[i]] = true;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `addToWhitelist(address[])`
- PC address: 565
- Estimated Gas Usage: 333 - 711

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:21

### Code

```
function addToWhitelist(address[] whitelisted) public {
        for (uint i = 0; i < whitelisted.length; i++) {
            whitelist[whitelisted[i]] = true;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `addToWhitelist(address[])`
- PC address: 570
- Estimated Gas Usage: 345 - 723

### Description

This binary multiply operation can result in integer overflow.
In file: MockContext.sol:21

### Code

```
function addToWhitelist(address[] whitelisted) public {
        for (uint i = 0; i < whitelisted.length; i++) {
            whitelist[whitelisted[i]] = true;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `addToWhitelist(address[])`
- PC address: 576
- Estimated Gas Usage: 364 - 3046

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:21

### Code

```
function addToWhitelist(address[] whitelisted) public {
        for (uint i = 0; i < whitelisted.length; i++) {
            whitelist[whitelisted[i]] = true;
        }
    }
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `addToWhitelist(address[])`
- PC address: 1039
- Estimated Gas Usage: 11862 - 56328

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:23

### Code

```
whitelisted[i]
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: MockContext
- Function name: `addToWhitelist(address[])`
- PC address: 1044
- Estimated Gas Usage: 11876 - 56342

### Description

This binary add operation can result in integer overflow.
In file: MockContext.sol:23

### Code

```
whitelisted[i]
```

# Analysis results for Payouts.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: Payouts
- Function name: `withdraw(address)`
- PC address: 872
- Estimated Gas Usage: 1894 - 2930

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Payouts.sol:36

### Code

```
time.currentPayoutPeriod()
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Payouts
- Function name: `withdraw(address)`
- PC address: 913
- Estimated Gas Usage: 2662 - 37791

### Description

This binary add operation can result in integer overflow.
In file: Payouts.sol:36

### Code

```
time.currentPayoutPeriod()
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Payouts
- Function name: `available(uint64)`
- PC address: 1410
- Estimated Gas Usage: 1531 - 2427

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Payouts.sol:40

### Code

```
payoutsStore.available(msg.sender, payoutPeriod)
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Payouts
- Function name: `available(uint64)`
- PC address: 1451
- Estimated Gas Usage: 2299 - 37288

### Description

This binary add operation can result in integer overflow.
In file: Payouts.sol:40

### Code

```
payoutsStore.available(msg.sender, payoutPeriod)
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Payouts
- Function name: `grantShelteringReward(address,uint64)`
- PC address: 1646
- Estimated Gas Usage: 3179 - 38447

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Payouts.sol:32

### Code

```
ig = _config;
    }

    function withdraw(address
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Payouts
- Function name: `grantShelteringReward(address,uint64)`
- PC address: 1687
- Estimated Gas Usage: 3947 - 73308

### Description

This binary add operation can result in integer overflow.
In file: Payouts.sol:32

### Code

```
ig = _config;
    }

    function withdraw(address
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Payouts
- Function name: `revokeShelteringReward(address,uint64,uint64,uint256,address)`
- PC address: 3145
- Estimated Gas Usage: 3318 - 38586

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Payouts.sol:32

### Code

```
ig = _config;
    }

    function withdraw(address
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Payouts
- Function name: `revokeShelteringReward(address,uint64,uint64,uint256,address)`
- PC address: 3186
- Estimated Gas Usage: 4086 - 73447

### Description

This binary add operation can result in integer overflow.
In file: Payouts.sol:32

### Code

```
ig = _config;
    }

    function withdraw(address
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Payouts
- Function name: `migrateFunds(address)`
- PC address: 4658
- Estimated Gas Usage: 3199 - 38467

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Payouts.sol:32

### Code

```
ig = _config;
    }

    function withdraw(address
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Payouts
- Function name: `migrateFunds(address)`
- PC address: 4699
- Estimated Gas Usage: 3967 - 73328

### Description

This binary add operation can result in integer overflow.
In file: Payouts.sol:32

### Code

```
ig = _config;
    }

    function withdraw(address
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Payouts
- Function name: `context()`
- PC address: 5854
- Estimated Gas Usage: 1477 - 2183

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Payouts.sol:39

### Code

```
able(uint64 pa
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Payouts
- Function name: `context()`
- PC address: 5895
- Estimated Gas Usage: 2245 - 37044

### Description

This binary add operation can result in integer overflow.
In file: Payouts.sol:39

### Code

```
able(uint64 pa
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: Payouts
- Function name: `revokeShelteringReward(address,uint64,uint64,uint256,address)`
- PC address: 6132
- Estimated Gas Usage: 5427 - 75492

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: Payouts.sol:93

### Code

```
config.FINISH_SHELTERING_REWARD_SPLIT()
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Payouts
- Function name: `revokeShelteringReward(address,uint64,uint64,uint256,address)`
- PC address: 6173
- Estimated Gas Usage: 6195 - 110353

### Description

This binary add operation can result in integer overflow.
In file: Payouts.sol:93

### Code

```
config.FINISH_SHELTERING_REWARD_SPLIT()
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: Payouts
- Function name: `grantShelteringReward(address,uint64)`
- PC address: 6421
- Estimated Gas Usage: 6165 - 110416

### Description

This binary multiply operation can result in integer overflow.
In file: Payouts.sol:15

### Code

```
figur
```

# Analysis results for PayoutsStore.sol

## External call
- SWC ID: 107
- Type: Informational
- Contract: PayoutsStore
- Function name: `revokeForPeriods(address,uint64,uint64,uint256,address)`
- PC address: 941
- Estimated Gas Usage: 3261 - 38529

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: PayoutsStore.sol:33

### Code

```
ad _head) public Base(_head) { }

    function wit
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: PayoutsStore
- Function name: `revokeForPeriods(address,uint64,uint64,uint256,address)`
- PC address: 982
- Estimated Gas Usage: 4029 - 73390

### Description

This binary add operation can result in integer overflow.
In file: PayoutsStore.sol:33

### Code

```
ad _head) public Base(_head) { }

    function wit
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: PayoutsStore
- Function name: `available(address,uint64)`
- PC address: 2128
- Estimated Gas Usage: 3178 - 38446

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: PayoutsStore.sol:33

### Code

```
ad _head) public Base(_head) { }

    function wit
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: PayoutsStore
- Function name: `available(address,uint64)`
- PC address: 2169
- Estimated Gas Usage: 3946 - 73307

### Description

This binary add operation can result in integer overflow.
In file: PayoutsStore.sol:33

### Code

```
ad _head) public Base(_head) { }

    function wit
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: PayoutsStore
- Function name: `available(address,uint64)`
- PC address: 2626
- Estimated Gas Usage: 5368 - 75722

### Description

This binary add operation can result in integer overflow.
In file: PayoutsStore.sol:63

### Code

```
grant.decrease
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: PayoutsStore
- Function name: `grantForPeriods(address,uint64,uint64)`
- PC address: 2836
- Estimated Gas Usage: 3209 - 38477

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: PayoutsStore.sol:33

### Code

```
ad _head) public Base(_head) { }

    function wit
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: PayoutsStore
- Function name: `grantForPeriods(address,uint64,uint64)`
- PC address: 2877
- Estimated Gas Usage: 3977 - 73338

### Description

This binary add operation can result in integer overflow.
In file: PayoutsStore.sol:33

### Code

```
ad _head) public Base(_head) { }

    function wit
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: PayoutsStore
- Function name: `migrateFunds(address)`
- PC address: 3725
- Estimated Gas Usage: 3177 - 38445

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: PayoutsStore.sol:33

### Code

```
ad _head) public Base(_head) { }

    function wit
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: PayoutsStore
- Function name: `migrateFunds(address)`
- PC address: 3766
- Estimated Gas Usage: 3945 - 73306

### Description

This binary add operation can result in integer overflow.
In file: PayoutsStore.sol:33

### Code

```
ad _head) public Base(_head) { }

    function wit
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: PayoutsStore
- Function name: `withdraw(address,address,uint64)`
- PC address: 4921
- Estimated Gas Usage: 1632 - 2338

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: PayoutsStore.sol:37

### Code

```
tor = 0;
     
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: PayoutsStore
- Function name: `withdraw(address,address,uint64)`
- PC address: 4962
- Estimated Gas Usage: 2400 - 37199

### Description

This binary add operation can result in integer overflow.
In file: PayoutsStore.sol:37

### Code

```
tor = 0;
     
```

## External call
- SWC ID: 107
- Type: Informational
- Contract: PayoutsStore
- Function name: `withdraw(address,address,uint64)`
- PC address: 5153
- Estimated Gas Usage: 3299 - 38567

### Description

The contract executes a function call to an external address. Verify that the code at this address is trusted and immutable.
In file: PayoutsStore.sol:33

### Code

```
ad _head) public Base(_head) { }

    function wit
```

## Integer Overflow
- SWC ID: 101
- Type: Warning
- Contract: PayoutsStore
- Function name: `withdraw(address,address,uint64)`
- PC address: 5194
- Estimated Gas Usage: 4067 - 73428

### Description

This binary add operation can result in integer overflow.
In file: PayoutsStore.sol:33

### Code

```
ad _head) public Base(_head) { }

    function wit
```


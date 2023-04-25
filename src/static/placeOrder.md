```js
  function placeOrder(string memory cid, uint64 size) public payable {
    require(sizeLimit >= size, "Size exceeds the limit");

    uint price = getPrice(size);
    require(msg.value >= price, "No enough SDN to place order");

    uint256 parachainId = 2012;
    // Transfer the SDN through XCMP
    address[] memory assetId = new address[](1);
    assetId[0] = SDN_ADDRESS;
    uint256[] memory assetAmount = new uint256[](1);
    assetAmount[0] = preSendAmount;
    uint256 feeIndex = 0;
    xcmtransactor.assets_reserve_transfer(assetId, assetAmount, corrAddress, false, parachainId, feeIndex);

    // Place cross chain storage order
    uint256 feeAmount = preSendAmount / 10;
    uint64 overallWeight = 8000000000;
    // cid: HiMoonbaseSC, size: 1024
    bytes memory callData = buildCallBytes(cid, size);
    xcmtransactor.remote_transact(
        parachainId,
        false,
        SDN_ADDRESS,
        feeAmount,
        callData,
        overallWeight
    );
  }
```

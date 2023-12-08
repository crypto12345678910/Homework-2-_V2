// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract TestChainlink {
  AggregatorV3Interface internal priceFeed;



  constructor() {
    dataFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);
    }

  constructor() {
    // ETH / USD
    priceFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);
  }

  function getLatestPrice() public view returns (int) {
        // prettier-ignore
        (
            /* uint80 round ID */,
            int answer,
            /*uint startedAt */,
            /*uint timeStamp */,
            /*uint80 answeredInRound */
        ) = ethUsdOracle.latestRoundData();
        return answer;
    }
}

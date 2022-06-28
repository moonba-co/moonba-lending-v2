// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import {Ownable} from '../dependencies/openzeppelin/contracts/Ownable.sol';
import {IERC20Detailed} from '../dependencies/openzeppelin/contracts/IERC20Detailed.sol';
import {SafeMath} from '../dependencies/openzeppelin/contracts/SafeMath.sol';

import {FixedPoint} from './libraries/FixedPoint.sol';
import {MoonbaOracleLibrary} from './libraries/MoonbaOracleLibrary.sol';

import {IChainlinkAggregator} from '../interfaces/IChainlinkAggregator.sol';
import {IMoonbaFactory} from '../interfaces/IMoonbaFactory.sol';
import {IMoonbaRouter} from '../interfaces/IMoonbaRouter.sol';

contract MoonbaAggregator is IChainlinkAggregator, Ownable {
  using FixedPoint for *;
  using SafeMath for uint256;

  IMoonbaFactory public factory;
  address public WOLT;
  address public asset;
  address public pair;

  // TODO: Change on dynamic, 15 sec is experimental!
  uint256 public constant PERIOD = 15 seconds;

  uint256 public price0CumulativeLast;
  uint256 public price1CumulativeLast;
  uint32 public blockTimestampLast;
  FixedPoint.uq112x112 public price0Average;
  FixedPoint.uq112x112 public price1Average;

  constructor(IMoonbaRouter _router, address _asset) public {
    factory = IMoonbaFactory(_router.factory());
    WOLT = _router.WETH();
    asset = _asset;
    if (_asset != WOLT) {
      pair = factory.getPair(asset, WOLT);
      require(pair != address(0), 'MA: Pair does not exist');
      require(IERC20Detailed(asset).decimals() <= 18, 'MA: Decimals higher than 18');
      update(); // first update
    } else {
      // skip for wrapped
      pair = address(0);
    }
  }

  function update() public onlyOwner {
    (uint256 price0Cumulative, uint256 price1Cumulative, uint32 blockTimestamp) =
      MoonbaOracleLibrary.currentCumulativePrices(pair);

    if (blockTimestampLast == 0) {
      blockTimestampLast = blockTimestamp;
      price0CumulativeLast = price0Cumulative;
      price1CumulativeLast = price1Cumulative;
      emit AnswerUpdated(0, 0, blockTimestampLast);
      return;
    }

    uint32 timeElapsed = blockTimestamp - blockTimestampLast; // overflow is desired
    if (timeElapsed < PERIOD) {
      emit AnswerUpdated(0, 0, blockTimestampLast);
      return;
    }

    blockTimestampLast = blockTimestamp;
    price0Average = FixedPoint.uq112x112(
      uint224((price0Cumulative - price0CumulativeLast) / timeElapsed)
    );
    price1Average = FixedPoint.uq112x112(
      uint224((price1Cumulative - price1CumulativeLast) / timeElapsed)
    );
    price0CumulativeLast = price0Cumulative;
    price1CumulativeLast = price1Cumulative;

    emit AnswerUpdated(0, 0, blockTimestampLast);
    emit NewRound(0, msg.sender);
  }

  function decimals() external view override returns (uint8) {
    return IERC20Detailed(asset).decimals();
  }

  function latestAnswer() external view override returns (int256) {
    if (asset == WOLT) {
      return 1 ether;
    }

    uint256 pricePerToken;
    uint256 decimals = IERC20Detailed(asset).decimals();
    if (asset < WOLT) {
      pricePerToken = price1Average.mul(10**18).decode144();
    } else {
      pricePerToken = price0Average.mul(10**18).decode144();
    }
    uint256 numenator = 10**uint256(18).sub(decimals);
    int256 price = int256(numenator.div(pricePerToken));
    require(price > 0, 'PRICE_NOT_FOUND');
    return price;
  }

  function latestTimestamp() external view override returns (uint256) {
    if (asset == WOLT) {
      return 0;
    }
    return blockTimestampLast;
  }

  // TODO: Implement round system
  function latestRound() external view override returns (uint256) {
    return 0;
  }

  function getAnswer(uint256 roundId) external view override returns (int256) {
    return 0;
  }

  function getTimestamp(uint256 roundId) external view override returns (uint256) {
    return 0;
  }
}

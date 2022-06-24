import BigNumber from 'bignumber.js';
import {
  oneEther,
  oneRay,
  RAY,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
  oneUsd,
} from '../../helpers/constants';
import { ICommonConfiguration, eMoonbaNetwork } from '../../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'Commons',
  ATokenNamePrefix: 'Moonba OneLedger Market',
  StableDebtTokenNamePrefix: 'Moonba OneLedger Market stable debt',
  VariableDebtTokenNamePrefix: 'Moonba OneLedger Market variable debt',
  SymbolPrefix: 'm',
  ProviderId: 0, // Overriden in index.ts
  OracleQuoteCurrency: 'USD',
  OracleQuoteUnit: oneUsd.toString(),
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96', // TODO: what is this?
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    AaveReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
    },
  },
  // TODO: reorg alphabetically, checking the reason of tests failing
  LendingRateOracleRatesCommon: {
    USDT: {
      borrowRate: oneRay.multipliedBy(0.035).toFixed(),
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eMoonbaNetwork.oneledger]: undefined,
    [eMoonbaNetwork.frankenstein]: undefined,
  },
  PoolAdminIndex: 0,
  EmergencyAdminIndex: 0,
  EmergencyAdmin: {
    [eMoonbaNetwork.oneledger]: undefined,
    [eMoonbaNetwork.frankenstein]: undefined,
  },
  ProviderRegistry: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
  ProviderRegistryOwner: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
  LendingRateOracle: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
  LendingPoolCollateralManager: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
  LendingPoolConfigurator: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
  LendingPool: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
  WethGateway: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
  TokenDistributor: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
  AaveOracle: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
  FallbackOracle: {
    [eMoonbaNetwork.oneledger]: ZERO_ADDRESS,
    [eMoonbaNetwork.frankenstein]: ZERO_ADDRESS,
  },
  ChainlinkAggregator: {
    [eMoonbaNetwork.oneledger]: {
      OLT: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
    },
    [eMoonbaNetwork.frankenstein]: {
      OLT: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
    },
  },
  ReserveAssets: {
    [eMoonbaNetwork.oneledger]: {},
    [eMoonbaNetwork.frankenstein]: {},
  },
  ReservesConfig: {},
  ATokenDomainSeparator: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
  WETH: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
  WrappedNativeToken: {
    [eMoonbaNetwork.oneledger]: '0x01586239B56ca158f1e31e4c6A07B3Ae59D623B5',
    [eMoonbaNetwork.frankenstein]: '0x48e821241B953F110e295fD660Bd9bF988212B4e',
  },
  ReserveFactorTreasuryAddress: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '0x633689E0850a78CBaE515cce2B387F3Bd9983779', // Self-controlled EOA for testing
  },
  IncentivesController: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
};

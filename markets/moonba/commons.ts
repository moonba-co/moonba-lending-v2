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
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0x61269588Be7c8e11900f2FfdDF371376D9a36880',
  },
  ProviderRegistryOwner: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0x573f672bbe93f1b03d383A0cb502682467e7B71f',
  },
  LendingRateOracle: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0x7Aa217D75480867370ADf96aa7593cc7aBf33bb4',
  },
  LendingPoolCollateralManager: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0x0AB4F9BFD24aF56Be228267a36c9D831bc969268',
  },
  LendingPoolConfigurator: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0x8dc420AF083798222C6c11536fD2d8B2c9Ca140E',
  },
  LendingPool: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0xc5AeA22bC079b7115973c6FdF046318b6F84FB73',
  },
  WethGateway: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0x6f4E0e5F355066fB537E5378Caa9987A469939A4',
  },
  AaveOracle: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0x87578919f8a49ec1beEF6CA66ea5Fdff9831a8dB',
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
  WETH: {
    [eMoonbaNetwork.oneledger]: '0x01586239B56ca158f1e31e4c6A07B3Ae59D623B5',
    [eMoonbaNetwork.frankenstein]: '0x48e821241B953F110e295fD660Bd9bF988212B4e',
  },
  // same as WETH as on Moonba WOLT = WETH, taking as native for calculations later
  WrappedNativeToken: {
    [eMoonbaNetwork.oneledger]: '0x01586239B56ca158f1e31e4c6A07B3Ae59D623B5',
    [eMoonbaNetwork.frankenstein]: '0x48e821241B953F110e295fD660Bd9bF988212B4e',
  },
  ReserveFactorTreasuryAddress: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0x633689E0850a78CBaE515cce2B387F3Bd9983779', // Self-controlled EOA for testing
  },
  IncentivesController: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: ZERO_ADDRESS, // NOTE: Do we need it?
  },

  // deprecated
  TokenDistributor: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
  ATokenDomainSeparator: {
    [eMoonbaNetwork.oneledger]: '',
    [eMoonbaNetwork.frankenstein]: '',
  },
};

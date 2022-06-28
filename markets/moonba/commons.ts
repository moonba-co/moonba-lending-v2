import BigNumber from 'bignumber.js';
import {
  oneEther,
  oneRay,
  RAY,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
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
  OracleQuoteCurrency: 'OLT',
  OracleQuoteUnit: oneEther.toString(),
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
  ProviderRegistryOwner: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0x573f672bbe93f1b03d383A0cb502682467e7B71f',
  },
  ProviderRegistry: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0x568cd900e81da264b878FF0e6C83998715045e91',
  },
  LendingPool: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0xad3E70C1FE1c95412bCde0e9EcC4D478730E14f8',
  },
  LendingPoolConfigurator: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0xb9d2A3Ec48898007E8099724C028a04Da823552f',
  },
  AaveOracle: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0x3294415771c6A6955174C3b520d75d7A4A314609',
  },
  LendingRateOracle: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0x1d506c9AF173c9410584E13310b58bd9f668e3b3',
  },
  FallbackOracle: {
    [eMoonbaNetwork.oneledger]: ZERO_ADDRESS,
    [eMoonbaNetwork.frankenstein]: ZERO_ADDRESS,
  },
  ChainlinkAggregator: {
    [eMoonbaNetwork.oneledger]: {
      USD: ZERO_ADDRESS,
      USDT: 'TODO',
    },
    [eMoonbaNetwork.frankenstein]: {
      USD: ZERO_ADDRESS,
      USDT: '0x9139d272A25586Ebca1d7B0b8160500E9d065648',
    },
  },
  WethGateway: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0x3320435Ccd4e25DCD0F7EEbd4aea3C04B32fF890',
  },
  LendingPoolCollateralManager: {
    [eMoonbaNetwork.oneledger]: 'TODO',
    [eMoonbaNetwork.frankenstein]: '0xDF35Cd8f597A756551c420256BA0e873a12dA08b',
  },
  // same as WETH as on Moonba WOLT = WETH, taking as native for calculations later
  WETH: {
    [eMoonbaNetwork.oneledger]: '0x01586239B56ca158f1e31e4c6A07B3Ae59D623B5',
    [eMoonbaNetwork.frankenstein]: '0x48e821241B953F110e295fD660Bd9bF988212B4e',
  },
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

  // override
  ReservesConfig: {},
  ReserveAssets: {
    [eMoonbaNetwork.oneledger]: {},
    [eMoonbaNetwork.frankenstein]: {},
  },
};

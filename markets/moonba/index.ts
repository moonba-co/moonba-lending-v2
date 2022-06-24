import { oneRay, ZERO_ADDRESS } from '../../helpers/constants';
import { IMoonbaConfiguration, eMoonbaNetwork } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyUSDT,
  strategyOLT,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const MoonbaConfig: IMoonbaConfiguration = {
  ...CommonsConfig,
  MarketId: 'Moonba OneLedger genesis market',
  ProviderId: 666,
  ReservesConfig: {
    USDT: strategyUSDT,
  },
  ReserveAssets: {
    [eMoonbaNetwork.oneledger]: {
      USDT: '0xED344b7C2deD6143e32B03ea905e59dC2010Ce74',
    },
    [eMoonbaNetwork.frankenstein]: {
      USDT: '0x5141e37bee838DdE7BCad93F8209E0b65b36b46C',
    },
  },
};

export default MoonbaConfig;
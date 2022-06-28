import { task } from 'hardhat/config';
import { eContractid, eEthereumNetwork, eNetwork, eMoonbaNetwork } from '../../helpers/types';
import { deployMoonbaAggregator } from '../../helpers/contracts-deployments';
import { exit } from 'process';

task(`deploy-${eContractid.MoonbaAggregator}`, `Deploys the MoonbaAggregator contract`)
  .addParam('router', 'Moonba swap router address')
  .addParam('asset', 'Address of asset for price feed')
  .addFlag('verify', 'Verify MoonbaAggregator contract via Etherscan API.')
  .setAction(async ({ router, asset, verify }, localBRE) => {
    await localBRE.run('set-DRE');
    if (!localBRE.network.config.chainId) {
      throw new Error('INVALID_CHAIN_ID');
    }

    console.log(`\n- MoonbaAggregator deployment`);

    const MoonbaAggregator = await deployMoonbaAggregator([router, asset], verify);

    console.log('MoonbaAggregator deployed at:', MoonbaAggregator.address);
    console.log(`\tFinished MoonbaAggregator deployment`);
  });

import JSBI from 'jsbi'
import STAKING_REWARDS_FACTORY_ABI from './abis/staking-rewards-distribution-factory.json'
import STAKING_REWARDS_DISTRIBUTION_ABI from './abis/staking-rewards-distribution.json'
import SWPR_CLAIMER_ABI from './abis/swpr-claimer.json'
import MULTICALL_ABI from './abis/multicall.json'
import {
  rinkeby as coreRinkeby,
  mainnet as coreMainnet,
  arbitrumOne as coreArbitrumOne,
  arbitrumRinkebyTestnet as coreArbitrumRinkebyTestnet,
  xdai as coreXDai
} from 'dxswap-core/.contracts.json'
import {
  rinkeby as peripheryRinkeby,
  mainnet as peripheryMainnet,
  arbitrumOne as peripheryArbitrumOne,
  arbitrumRinkebyTestnet as peripheryArbitrumRinkebyTestnet,
  xdai as peripheryXDai
} from 'dxswap-periphery/.contracts.json'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  RINKEBY = 4,
  XDAI = 100,
  ARBITRUM_ONE = 42161,
  ARBITRUM_RINKEBY = 421611
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: coreMainnet.factory,
  [ChainId.RINKEBY]: coreRinkeby.factory,
  [ChainId.ARBITRUM_ONE]: coreArbitrumOne.factory,
  [ChainId.ARBITRUM_RINKEBY]: coreArbitrumRinkebyTestnet.factory,
  [ChainId.XDAI]: coreXDai.factory
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: peripheryRinkeby.router,
  [ChainId.MAINNET]: peripheryMainnet.router,
  [ChainId.XDAI]: peripheryXDai.router,
  [ChainId.ARBITRUM_ONE]: peripheryArbitrumOne.router,
  [ChainId.ARBITRUM_RINKEBY]: peripheryArbitrumRinkebyTestnet.router
}

export const STAKING_REWARDS_FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x156F0568a6cE827e5d39F6768A5D24B694e1EA7b',
  [ChainId.RINKEBY]: '0x163a3640Ce993A0b4c11885a6D4dAc16DFC188e1',
  [ChainId.XDAI]: '0xa039793Af0bb060c597362E8155a0327d9b8BEE8',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000001234',
  [ChainId.ARBITRUM_RINKEBY]: '0x55Bfae77D9980702e5b60D984983AE3B776Ab91C'
}

export const SWPR_CLAIMER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000001234',
  [ChainId.RINKEBY]: '0x0000000000000000000000000000000000001234',
  [ChainId.ARBITRUM_RINKEBY]: '0x46bC737df7f1B3a7436F942813498CBE041a6ea4',
  [ChainId.ARBITRUM_ONE]: '0x0000000000000000000000000000000000001234',
  [ChainId.XDAI]: '0x0000000000000000000000000000000000001234'
}

export const INIT_CODE_HASH = '0xd306a548755b9295ee49cc729e13ca4a45e00199bbd890fa146da43a50571776'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _25 = JSBI.BigInt(25)
export const SECONDS_IN_YEAR = JSBI.BigInt(31536000)
export const _30 = JSBI.BigInt(30)
export const _100 = JSBI.BigInt(100)
export const _1000 = JSBI.BigInt(1000)
export const _10000 = JSBI.BigInt(10000)

export const defaultSwapFee = _25
export const defaultProtocolFeeDenominator = FIVE

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

const MULTICALL_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
  [ChainId.RINKEBY]: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
  [ChainId.ARBITRUM_ONE]: '0xF718F2bd590E5621e53f7b89398e52f7Acced8ca',
  [ChainId.XDAI]: '0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a',
  [ChainId.ARBITRUM_RINKEBY]: '0xf1f8AAc64036cdd399886b1C157B7e3b361093F3'
}

export {
  MULTICALL_ABI,
  MULTICALL_ADDRESS,
  STAKING_REWARDS_FACTORY_ABI,
  STAKING_REWARDS_DISTRIBUTION_ABI,
  SWPR_CLAIMER_ABI
}

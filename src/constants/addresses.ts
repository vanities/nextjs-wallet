import { constructSameAddressMap } from "../utils/constructSameAddressMap";
import { SupportedChainId } from "./chains";

type AddressMap = { [chainId: number]: string };

// celo v3 addresses
const CELO_MULTICALL_ADDRESS = "0x633987602DE5C4F337e3DbF265303A1080324204";

/* V3 Contract Addresses */

export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap("0x1F98415757620B543A52E61c46B32eB19261F984", [
    SupportedChainId.OPTIMISM_GOERLI,
    SupportedChainId.OPTIMISM,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.ARBITRUM_ONE]: "0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB",
  [SupportedChainId.ARBITRUM_RINKEBY]:
    "0xa501c031958F579dB7676fF1CE78AD305794d579",
  [SupportedChainId.CELO]: CELO_MULTICALL_ADDRESS,
  [SupportedChainId.CELO_ALFAJORES]: CELO_MULTICALL_ADDRESS,
};

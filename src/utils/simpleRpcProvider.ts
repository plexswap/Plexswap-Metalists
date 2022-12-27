import { ethers } from "ethers";

const RPC_URL = "https://bsc-mainnet.nodereal.io/v1/e44eb77ea3f94d11b77ef27be519e58d";

const simpleRpcProvider = new ethers.providers.StaticJsonRpcProvider(RPC_URL, 56);

export default simpleRpcProvider;

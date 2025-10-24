// utils/getWeb3.js
import Web3 from "web3";

const SEP_CHAIN_ID_DEC = 11155111;   // Sepolia
const SEP_CHAIN_ID_HEX = "0xaa36a7"; // Sepolia in hex

export default async function loadWeb3() {
  if (!window.ethereum) {
    throw new Error("MetaMask not found. Please install MetaMask.");
  }

  // Request accounts (prompts user if not connected)
  await window.ethereum.request({ method: "eth_requestAccounts" });

  // Make sure we're on Sepolia (or change to your chain)
  const currentChainId = await window.ethereum.request({ method: "eth_chainId" });
  if (currentChainId.toLowerCase() !== SEP_CHAIN_ID_HEX) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: SEP_CHAIN_ID_HEX }],
      });
    } catch (switchErr) {
      // If chain not added in MetaMask, add it then switch
      if (switchErr.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: SEP_CHAIN_ID_HEX,
            chainName: "Sepolia",
            nativeCurrency: { name: "Sepolia ETH", symbol: "SEP", decimals: 18 },
            // You can leave rpcUrls empty to use MetaMask defaults,
            // or provide your own RPC if you want:
            // rpcUrls: ["https://sepolia.infura.io/v3/<YOUR_PROJECT_ID>"],
            blockExplorerUrls: ["https://sepolia.etherscan.io/"],
          }],
        });
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: SEP_CHAIN_ID_HEX }],
        });
      } else {
        throw switchErr;
      }
    }
  }

  const web3 = new Web3(window.ethereum);

  // Extra sanity checks & helpful logs
  const [account] = await web3.eth.getAccounts();
  const chainId = await web3.eth.getChainId();
  console.log("Web3 ready:", { account, chainId });

  if (chainId !== SEP_CHAIN_ID_DEC) {
    throw new Error(`Wrong network. Expected Sepolia (${SEP_CHAIN_ID_DEC}), got ${chainId}.`);
  }

  return web3;
}

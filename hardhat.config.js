require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  networks: {
    hardhat: {
      chainId: 31337
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/R87vDxIJgt4XEP8eBRj91PeFSUuc3_WZ',
      accounts: ['ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'],
    },
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/UyXSEH7r3D85TTS9jS6d_uobYd2BEVUw',
      accounts: ['ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'],
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  }
};

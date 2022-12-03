require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/_GvgUOnshGfo86xYME-UQgDiMQZlJOl-",
      accounts: [
        "bfda15ce3b8a6405882e7571d9953e9435d45d713eff2fee080b9a4873094d05",
      ],
    },
  },
};

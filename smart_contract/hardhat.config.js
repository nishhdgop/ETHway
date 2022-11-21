require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/_GvgUOnshGfo86xYME-UQgDiMQZlJOl-",
      accounts: [
        "36aa66298cc0dfffe856b4f4aee138b68ca7a767293b85b6dd5803c2ded2bc37",
      ],
    },
  },
};

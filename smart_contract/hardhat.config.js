require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/vU43PBkG0gabIwNZv26Q1E0BCVI92Fj_',
      accounts: ['b0c82f1e227bc7ff4d647c719f52c59cbf90032d2e500c78cf3c4d466f0ddad3']
    }
  }
}
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/QGS_Ea24xkCHosTd8O_fyp3xbFUyq_H0',
      accounts: ['4c00ad8c299ba7139898ef7a7db2ec12ce4972942dcf668bf42d6a6b8384e8ee'],
    },
  },
};
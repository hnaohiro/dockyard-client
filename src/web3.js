import Web3 from 'web3'

// const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/c68e51f96f6242a9814e63ff752344d8');
const provider = new Web3(web3.currentProvider);
export default web3 = new Web3(provider);

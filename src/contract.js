import web3 from './web3'
import { drinkTokenABI, EntranceTokenABI } from './abi'

const drinkTokenAddress = '0x6a9f822a5bcbd5a28ce55847365d58afdba515f8'
const entranceTokenAddress = '0xed9b30178f0eb74456947e835e2796f03e241b3c'

export const drinkContract = new web3.eth.Contract(drinkTokenABI, drinkTokenAddress)
export const entranceContract = new web3.eth.Contract(EntranceTokenABI, entranceTokenAddress)

import { Connect } from 'uport-connect'

// const uport = new Connect('night pass', {
//   clientId: '2onXsyJx8GnJPjTeAbqFSAUBniQArNsMZia',
//   network: 'rinkeby',
//   signer: SimpleSigner('387342a6a3e3389aad47faf70a14f9680fb24aa38fc9565b26c3af746007b42f')
// })

// const contractInstance = uport.contract(EntranceTokenABI)
// const contract = contractInstance.at(entranceTokenAddress)

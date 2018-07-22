import web3 from './web3'
import { drinkTokenABI, EntranceTokenABI } from './abi'

const drinkTokenAddress = '0x6a9f822a5bcbd5a28ce55847365d58afdba515f8'
const entranceTokenAddress = '0xed9b30178f0eb74456947e835e2796f03e241b3c'

export const drinkContract = new web3.eth.Contract(drinkTokenABI, drinkTokenAddress)
export const entranceContract = new web3.eth.Contract(EntranceTokenABI, entranceTokenAddress)

import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xe7ff852A4bBeC32272f59F1CaeD4752707A45dc5'
);

export default instance;
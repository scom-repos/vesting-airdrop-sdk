"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCampaignInfoList = exports.getCampaignInfo = exports.VestingTreeABI = void 0;
const contracts_1 = require("./contracts");
exports.VestingTreeABI = [
    {
        type: 'uint256',
        name: 'campaignId'
    },
    {
        type: 'uint256',
        name: 'amount'
    },
    {
        type: 'uint256',
        name: 'startDate'
    },
    {
        type: 'uint256',
        name: 'endDate'
    }
];
async function getCampaignInfo(wallet, contractAddress, campaignId) {
    let vesting = new contracts_1.ScomAirdropVault(wallet, contractAddress);
    let info = await vesting.campaignInfo(campaignId);
    let campaignInfo = Object.assign(Object.assign({}, info), { id: campaignId });
    return campaignInfo;
}
exports.getCampaignInfo = getCampaignInfo;
async function getCampaignInfoList(wallet, contractAddress) {
    let vesting = new contracts_1.ScomAirdropVault(wallet, contractAddress);
    let campaignInfoList = [];
    let campaignIdCount = await vesting.campaignIdCount();
    for (let i = 1; i <= campaignIdCount.toNumber(); i++) {
        let info = await vesting.campaignInfo(i);
        let campaignInfo = Object.assign(Object.assign({}, info), { id: i });
        campaignInfoList.push(campaignInfo);
    }
    return campaignInfoList;
}
exports.getCampaignInfoList = getCampaignInfoList;

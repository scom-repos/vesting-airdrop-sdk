"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScomVestingFactory = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const ScomVestingFactory_json_1 = __importDefault(require("./ScomVestingFactory.json"));
class ScomVestingFactory extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, ScomVestingFactory_json_1.default.abi, ScomVestingFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this.__deploy();
    }
    parseNewProfileEvent(receipt) {
        return this.parseEvents(receipt, "NewProfile").map(e => this.decodeNewProfileEvent(e));
    }
    decodeNewProfileEvent(event) {
        let result = event.data;
        return {
            profileId: new eth_wallet_1.BigNumber(result.profileId),
            admins: result.admins,
            _event: event
        };
    }
    assign() {
        let profileIdCount_call = async () => {
            let result = await this.call('profileIdCount');
            return new eth_wallet_1.BigNumber(result);
        };
        this.profileIdCount = profileIdCount_call;
        let profileVault_call = async (param1) => {
            let result = await this.call('profileVault', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.profileVault = profileVault_call;
        let newVestingProfile_send = async (admins) => {
            let result = await this.send('newVestingProfile', [admins]);
            return result;
        };
        let newVestingProfile_call = async (admins) => {
            let result = await this.call('newVestingProfile', [admins]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.newVestingProfile = Object.assign(newVestingProfile_send, {
            call: newVestingProfile_call
        });
    }
}
exports.ScomVestingFactory = ScomVestingFactory;

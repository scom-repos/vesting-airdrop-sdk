import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./ScomVestingFactory.json";

export class ScomVestingFactory extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseNewProfileEvent(receipt: TransactionReceipt): ScomVestingFactory.NewProfileEvent[]{
        return this.parseEvents(receipt, "NewProfile").map(e=>this.decodeNewProfileEvent(e));
    }
    decodeNewProfileEvent(event: Event): ScomVestingFactory.NewProfileEvent{
        let result = event.data;
        return {
            profileId: new BigNumber(result.profileId),
            admins: result.admins,
            _event: event
        };
    }
    newVestingProfile: {
        (admins:string[]): Promise<TransactionReceipt>;
        call: (admins:string[]) => Promise<BigNumber>;
    }
    profileIdCount: {
        (): Promise<BigNumber>;
    }
    profileVault: {
        (param1:number|BigNumber): Promise<string>;
    }
    private assign(){
        let profileIdCount_call = async (): Promise<BigNumber> => {
            let result = await this.call('profileIdCount');
            return new BigNumber(result);
        }
        this.profileIdCount = profileIdCount_call
        let profileVault_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('profileVault',[Utils.toString(param1)]);
            return result;
        }
        this.profileVault = profileVault_call
        let newVestingProfile_send = async (admins:string[]): Promise<TransactionReceipt> => {
            let result = await this.send('newVestingProfile',[admins]);
            return result;
        }
        let newVestingProfile_call = async (admins:string[]): Promise<BigNumber> => {
            let result = await this.call('newVestingProfile',[admins]);
            return new BigNumber(result);
        }
        this.newVestingProfile = Object.assign(newVestingProfile_send, {
            call:newVestingProfile_call
        });
    }
}
export module ScomVestingFactory{
    export interface NewProfileEvent {profileId:BigNumber,admins:string[],_event:Event}
}
import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class ScomAirdropFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseNewProfileEvent(receipt: TransactionReceipt): ScomAirdropFactory.NewProfileEvent[];
    decodeNewProfileEvent(event: Event): ScomAirdropFactory.NewProfileEvent;
    newProfile: {
        (admins: string[]): Promise<TransactionReceipt>;
        call: (admins: string[]) => Promise<BigNumber>;
    };
    profileIdCount: {
        (): Promise<BigNumber>;
    };
    profileVault: {
        (param1: number | BigNumber): Promise<string>;
    };
    private assign;
}
export declare module ScomAirdropFactory {
    interface NewProfileEvent {
        profileId: BigNumber;
        admins: string[];
        _event: Event;
    }
}

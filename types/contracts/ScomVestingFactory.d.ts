import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class ScomVestingFactory extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseNewProfileEvent(receipt: TransactionReceipt): ScomVestingFactory.NewProfileEvent[];
    decodeNewProfileEvent(event: Event): ScomVestingFactory.NewProfileEvent;
    newVestingProfile: {
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
export declare module ScomVestingFactory {
    interface NewProfileEvent {
        profileId: BigNumber;
        admins: string[];
        _event: Event;
    }
}

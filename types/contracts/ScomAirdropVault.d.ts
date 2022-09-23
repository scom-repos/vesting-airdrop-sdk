import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    name: string;
    symbol: string;
}
export interface IApproveParams {
    to: string;
    tokenId: number | BigNumber;
}
export interface ICampaignLocksParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IIsApprovedForAllParams {
    owner: string;
    operator: string;
}
export interface IIsLockIdVerifiedParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IMerkleLockParams {
    campaignId: number | BigNumber;
    amount: number | BigNumber;
    merkleRoot: string;
    dataUri: string;
}
export interface INewCampaignParams {
    token: string;
    ownerFrozen: boolean;
    dataUri: string;
}
export interface ISafeTransferFromParams {
    from: string;
    to: string;
    tokenId: number | BigNumber;
}
export interface ISafeTransferFrom_1Params {
    from: string;
    to: string;
    tokenId: number | BigNumber;
    data: string;
}
export interface ISetApprovalForAllParams {
    operator: string;
    approved: boolean;
}
export interface ITokenOfOwnerByIndexParams {
    owner: string;
    index: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    tokenId: number | BigNumber;
}
export interface IUpdateCampaignParams {
    campaignId: number | BigNumber;
    dataUri: string;
}
export interface IVerifyMerkleLockParams {
    lockId: number | BigNumber;
    campaignId: number | BigNumber;
    amount: number | BigNumber;
    startDate: number | BigNumber;
    endDate: number | BigNumber;
    proof: string[];
}
export interface IWithdrawFundParams {
    token: string;
    amount: number | BigNumber;
}
export declare class ScomAirdropVault extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): ScomAirdropVault.ApprovalEvent[];
    decodeApprovalEvent(event: Event): ScomAirdropVault.ApprovalEvent;
    parseApprovalForAllEvent(receipt: TransactionReceipt): ScomAirdropVault.ApprovalForAllEvent[];
    decodeApprovalForAllEvent(event: Event): ScomAirdropVault.ApprovalForAllEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): ScomAirdropVault.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): ScomAirdropVault.AuthorizeEvent;
    parseClaimEvent(receipt: TransactionReceipt): ScomAirdropVault.ClaimEvent[];
    decodeClaimEvent(event: Event): ScomAirdropVault.ClaimEvent;
    parseCreateVestingEvent(receipt: TransactionReceipt): ScomAirdropVault.CreateVestingEvent[];
    decodeCreateVestingEvent(event: Event): ScomAirdropVault.CreateVestingEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): ScomAirdropVault.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): ScomAirdropVault.DeauthorizeEvent;
    parseLockEvent(receipt: TransactionReceipt): ScomAirdropVault.LockEvent[];
    decodeLockEvent(event: Event): ScomAirdropVault.LockEvent;
    parseMintEvent(receipt: TransactionReceipt): ScomAirdropVault.MintEvent[];
    decodeMintEvent(event: Event): ScomAirdropVault.MintEvent;
    parseNewCampaignEvent(receipt: TransactionReceipt): ScomAirdropVault.NewCampaignEvent[];
    decodeNewCampaignEvent(event: Event): ScomAirdropVault.NewCampaignEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): ScomAirdropVault.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): ScomAirdropVault.StartOwnershipTransferEvent;
    parseTransferEvent(receipt: TransactionReceipt): ScomAirdropVault.TransferEvent[];
    decodeTransferEvent(event: Event): ScomAirdropVault.TransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): ScomAirdropVault.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): ScomAirdropVault.TransferOwnershipEvent;
    parseUpdateCampaignEvent(receipt: TransactionReceipt): ScomAirdropVault.UpdateCampaignEvent[];
    decodeUpdateCampaignEvent(event: Event): ScomAirdropVault.UpdateCampaignEvent;
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<void>;
    };
    balanceOf: {
        (owner: string): Promise<BigNumber>;
    };
    campaignClaimed: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    campaignIdCount: {
        (): Promise<BigNumber>;
    };
    campaignInfo: {
        (param1: number | BigNumber): Promise<{
            dataUri: string;
            token: string;
            ownerFrozen: boolean;
        }>;
    };
    campaignLocked: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    campaignLocks: {
        (params: ICampaignLocksParams): Promise<BigNumber>;
    };
    campaignLocksLength: {
        (campaignId: number | BigNumber): Promise<BigNumber>;
    };
    claim: {
        (id: number | BigNumber): Promise<TransactionReceipt>;
        call: (id: number | BigNumber) => Promise<void>;
    };
    claimMultiple: {
        (ids: (number | BigNumber)[]): Promise<TransactionReceipt>;
        call: (ids: (number | BigNumber)[]) => Promise<void>;
    };
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    factory: {
        (): Promise<string>;
    };
    getApproved: {
        (tokenId: number | BigNumber): Promise<string>;
    };
    getInfo: {
        (nftId: number | BigNumber): Promise<{
            campaignId: BigNumber;
            vestingId: BigNumber;
            recipient: string;
            token: string;
            unclaimedFunds: BigNumber;
            claimedAmount: BigNumber;
            totalAmount: BigNumber;
            startDate: BigNumber;
            endDate: BigNumber;
        }>;
    };
    isApprovedForAll: {
        (params: IIsApprovedForAllParams): Promise<boolean>;
    };
    isLockIdVerified: {
        (params: IIsLockIdVerifiedParams): Promise<boolean>;
    };
    isPermitted: {
        (param1: string): Promise<BigNumber>;
    };
    locks: {
        (param1: number | BigNumber): Promise<{
            vestingId: BigNumber;
            dataUri: string;
            root: string;
            dateCreated: BigNumber;
        }>;
    };
    locksLength: {
        (): Promise<BigNumber>;
    };
    maximumAllowedClaimedFunds: {
        (vestingId: number | BigNumber): Promise<BigNumber>;
    };
    merkleLock: {
        (params: IMerkleLockParams): Promise<TransactionReceipt>;
        call: (params: IMerkleLockParams) => Promise<BigNumber>;
    };
    name: {
        (): Promise<string>;
    };
    newCampaign: {
        (params: INewCampaignParams): Promise<TransactionReceipt>;
        call: (params: INewCampaignParams) => Promise<BigNumber>;
    };
    newOwner: {
        (): Promise<string>;
    };
    nftIdCount: {
        (): Promise<BigNumber>;
    };
    nftVestingId: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    owner: {
        (): Promise<string>;
    };
    ownerOf: {
        (tokenId: number | BigNumber): Promise<string>;
    };
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    safeTransferFrom: {
        (params: ISafeTransferFromParams): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFromParams) => Promise<void>;
    };
    safeTransferFrom_1: {
        (params: ISafeTransferFrom_1Params): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFrom_1Params) => Promise<void>;
    };
    setApprovalForAll: {
        (params: ISetApprovalForAllParams): Promise<TransactionReceipt>;
        call: (params: ISetApprovalForAllParams) => Promise<void>;
    };
    setOwner: {
        (owner: string): Promise<TransactionReceipt>;
        call: (owner: string) => Promise<void>;
    };
    supportsInterface: {
        (interfaceId: string): Promise<boolean>;
    };
    symbol: {
        (): Promise<string>;
    };
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    tokenByIndex: {
        (index: number | BigNumber): Promise<BigNumber>;
    };
    tokenOfOwnerByIndex: {
        (params: ITokenOfOwnerByIndexParams): Promise<BigNumber>;
    };
    tokenURI: {
        (tokenId: number | BigNumber): Promise<string>;
    };
    totalSupply: {
        (): Promise<BigNumber>;
    };
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    updateCampaign: {
        (params: IUpdateCampaignParams): Promise<TransactionReceipt>;
        call: (params: IUpdateCampaignParams) => Promise<void>;
    };
    verifyMerkleLock: {
        (params: IVerifyMerkleLockParams): Promise<TransactionReceipt>;
        call: (params: IVerifyMerkleLockParams) => Promise<BigNumber>;
    };
    vestingClaimedAmount: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    vestingIdCount: {
        (): Promise<BigNumber>;
    };
    vestingInfo: {
        (param1: number | BigNumber): Promise<{
            campaignId: BigNumber;
            recipient: string;
            amount: BigNumber;
            startDate: BigNumber;
            endDate: BigNumber;
            status: BigNumber;
        }>;
    };
    withdrawFund: {
        (params: IWithdrawFundParams): Promise<TransactionReceipt>;
        call: (params: IWithdrawFundParams) => Promise<void>;
    };
    private assign;
}
export declare module ScomAirdropVault {
    interface ApprovalEvent {
        owner: string;
        approved: string;
        tokenId: BigNumber;
        _event: Event;
    }
    interface ApprovalForAllEvent {
        owner: string;
        operator: string;
        approved: boolean;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface ClaimEvent {
        nftId: BigNumber;
        amount: BigNumber;
        totalClaimed: BigNumber;
        totalAmount: BigNumber;
        _event: Event;
    }
    interface CreateVestingEvent {
        campaignId: BigNumber;
        vestingId: BigNumber;
        recipient: string;
        amount: BigNumber;
        startDate: BigNumber;
        endDate: BigNumber;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface LockEvent {
        lockId: BigNumber;
        campaignId: BigNumber;
        amount: BigNumber;
        sender: string;
        _event: Event;
    }
    interface MintEvent {
        campaignId: BigNumber;
        nftId: BigNumber;
        recipient: string;
        _event: Event;
    }
    interface NewCampaignEvent {
        campaignId: BigNumber;
        sender: string;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        tokenId: BigNumber;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
    interface UpdateCampaignEvent {
        campaignId: BigNumber;
        dataUri: string;
        sender: string;
        _event: Event;
    }
}

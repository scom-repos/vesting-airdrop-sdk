define('@scom/vesting-airdrop-sdk', (require, exports)=>{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/index.ts
__export(exports, {
  Airdrop: () => airdrop_exports,
  Contracts: () => contracts_exports
});

// src/contracts/index.ts
var contracts_exports = {};
__export(contracts_exports, {
  Authorization: () => Authorization,
  ERC721: () => ERC721,
  ScomAirdropFactory: () => ScomAirdropFactory,
  ScomAirdropVault: () => ScomAirdropVault,
  ScomVestingFactory: () => ScomVestingFactory,
  ScomVestingVault: () => ScomVestingVault
});

// src/contracts/@openzeppelin/contracts/token/ERC721/ERC721.ts
var import_eth_wallet = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/@openzeppelin/contracts/token/ERC721/ERC721.json.ts
var ERC721_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60806040523480156200001157600080fd5b5060405162001aa238038062001aa283398101604081905262000034916200011f565b600062000042838262000218565b50600162000051828262000218565b505050620002e4565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008257600080fd5b81516001600160401b03808211156200009f576200009f6200005a565b604051601f8301601f19908116603f01168101908282118183101715620000ca57620000ca6200005a565b81604052838152602092508683858801011115620000e757600080fd5b600091505b838210156200010b5785820183015181830184015290820190620000ec565b600093810190920192909252949350505050565b600080604083850312156200013357600080fd5b82516001600160401b03808211156200014b57600080fd5b620001598683870162000070565b935060208501519150808211156200017057600080fd5b506200017f8582860162000070565b9150509250929050565b600181811c908216806200019e57607f821691505b602082108103620001bf57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021357600081815260208120601f850160051c81016020861015620001ee5750805b601f850160051c820191505b818110156200020f57828155600101620001fa565b5050505b505050565b81516001600160401b038111156200023457620002346200005a565b6200024c8162000245845462000189565b84620001c5565b602080601f8311600181146200028457600084156200026b5750858301515b600019600386901b1c1916600185901b1785556200020f565b600085815260208120601f198616915b82811015620002b55788860151825594840194600190910190840162000294565b5085821015620002d45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6117ae80620002f46000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101d0578063b88d4fde146101e3578063c87b56dd146101f6578063e985e9c51461020957600080fd5b80636352211e1461019457806370a08231146101a757806395d89b41146101c857600080fd5b8063095ea7b3116100bd578063095ea7b31461015957806323b872dd1461016e57806342842e0e1461018157600080fd5b806301ffc9a7146100e457806306fdde031461010c578063081812fc14610121575b600080fd5b6100f76100f2366004611284565b610252565b60405190151581526020015b60405180910390f35b610114610337565b604051610103919061130f565b61013461012f366004611322565b6103c9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610103565b61016c610167366004611364565b6103fd565b005b61016c61017c36600461138e565b6105b9565b61016c61018f36600461138e565b61065a565b6101346101a2366004611322565b610675565b6101ba6101b53660046113ca565b610701565b604051908152602001610103565b6101146107cf565b61016c6101de3660046113e5565b6107de565b61016c6101f1366004611450565b6107ed565b610114610204366004611322565b610895565b6100f761021736600461154a565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806102e557507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061033157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600080546103469061157d565b80601f01602080910402602001604051908101604052809291908181526020018280546103729061157d565b80156103bf5780601f10610394576101008083540402835291602001916103bf565b820191906000526020600020905b8154815290600101906020018083116103a257829003601f168201915b5050505050905090565b60006103d482610909565b5060009081526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061040882610675565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036104ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216148061051e575073ffffffffffffffffffffffffffffffffffffffff8116600090815260056020908152604080832033845290915290205460ff165b6105aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016104c1565b6105b48383610997565b505050565b6105c33382610a37565b61064f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f76656400000000000000000000000000000000000060648201526084016104c1565b6105b4838383610af7565b6105b4838383604051806020016040528060008152506107ed565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610331576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016104c1565b600073ffffffffffffffffffffffffffffffffffffffff82166107a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e6572000000000000000000000000000000000000000000000060648201526084016104c1565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6060600180546103469061157d565b6107e9338383610d5e565b5050565b6107f73383610a37565b610883576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f76656400000000000000000000000000000000000060648201526084016104c1565b61088f84848484610e8b565b50505050565b60606108a082610909565b60006108b760408051602081019091526000815290565b905060008151116108d75760405180602001604052806000815250610902565b806108e184610f2e565b6040516020016108f29291906115d0565b6040516020818303038152906040525b9392505050565b60008181526002602052604090205473ffffffffffffffffffffffffffffffffffffffff16610994576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016104c1565b50565b600081815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915581906109f182610675565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610a4383610675565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610ab1575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209388168352929052205460ff165b80610aef57508373ffffffffffffffffffffffffffffffffffffffff16610ad7846103c9565b73ffffffffffffffffffffffffffffffffffffffff16145b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff16610b1782610675565b73ffffffffffffffffffffffffffffffffffffffff1614610bba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016104c1565b73ffffffffffffffffffffffffffffffffffffffff8216610c5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016104c1565b610c67600082610997565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360205260408120805460019290610c9d90849061162e565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152600360205260408120805460019290610cd8908490611641565b909155505060008181526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610df3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104c1565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610e96848484610af7565b610ea284848484611063565b61088f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016104c1565b606081600003610f7157505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610f9b5780610f8581611654565b9150610f949050600a836116bb565b9150610f75565b60008167ffffffffffffffff811115610fb657610fb6611421565b6040519080825280601f01601f191660200182016040528015610fe0576020820181803683370190505b5090505b8415610aef57610ff560018361162e565b9150611002600a866116cf565b61100d906030611641565b60f81b818381518110611022576110226116e3565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061105c600a866116bb565b9450610fe4565b600073ffffffffffffffffffffffffffffffffffffffff84163b1561124b576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a02906110da903390899088908890600401611712565b6020604051808303816000875af1925050508015611133575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526111309181019061175b565b60015b611200573d808015611161576040519150601f19603f3d011682016040523d82523d6000602084013e611166565b606091505b5080516000036111f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016104c1565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610aef565b506001949350505050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461099457600080fd5b60006020828403121561129657600080fd5b813561090281611256565b60005b838110156112bc5781810151838201526020016112a4565b50506000910152565b600081518084526112dd8160208601602086016112a1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061090260208301846112c5565b60006020828403121561133457600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461135f57600080fd5b919050565b6000806040838503121561137757600080fd5b6113808361133b565b946020939093013593505050565b6000806000606084860312156113a357600080fd5b6113ac8461133b565b92506113ba6020850161133b565b9150604084013590509250925092565b6000602082840312156113dc57600080fd5b6109028261133b565b600080604083850312156113f857600080fd5b6114018361133b565b91506020830135801515811461141657600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806000806080858703121561146657600080fd5b61146f8561133b565b935061147d6020860161133b565b925060408501359150606085013567ffffffffffffffff808211156114a157600080fd5b818701915087601f8301126114b557600080fd5b8135818111156114c7576114c7611421565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561150d5761150d611421565b816040528281528a602084870101111561152657600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561155d57600080fd5b6115668361133b565b91506115746020840161133b565b90509250929050565b600181811c9082168061159157607f821691505b6020821081036115ca577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600083516115e28184602088016112a1565b8351908301906115f68183602088016112a1565b01949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610331576103316115ff565b80820180821115610331576103316115ff565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611685576116856115ff565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826116ca576116ca61168c565b500490565b6000826116de576116de61168c565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015261175160808301846112c5565b9695505050505050565b60006020828403121561176d57600080fd5b81516109028161125656fea264697066735822122038b3afca07f3e5ae55b5195330e209ff2f51e4fa654c31442520412a4962cace64736f6c63430008110033"
};

// src/contracts/@openzeppelin/contracts/token/ERC721/ERC721.ts
var ERC721 = class extends import_eth_wallet.Contract {
  constructor(wallet, address) {
    super(wallet, address, ERC721_json_default.abi, ERC721_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.name, params.symbol]);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_wallet.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
  }
  decodeApprovalForAllEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      operator: result.operator,
      approved: result.approved,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      tokenId: new import_eth_wallet.BigNumber(result.tokenId),
      _event: event
    };
  }
  assign() {
    let balanceOf_call = async (owner) => {
      let result = await this.call("balanceOf", [owner]);
      return new import_eth_wallet.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let getApproved_call = async (tokenId) => {
      let result = await this.call("getApproved", [import_eth_wallet.Utils.toString(tokenId)]);
      return result;
    };
    this.getApproved = getApproved_call;
    let isApprovedForAllParams = (params) => [params.owner, params.operator];
    let isApprovedForAll_call = async (params) => {
      let result = await this.call("isApprovedForAll", isApprovedForAllParams(params));
      return result;
    };
    this.isApprovedForAll = isApprovedForAll_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let ownerOf_call = async (tokenId) => {
      let result = await this.call("ownerOf", [import_eth_wallet.Utils.toString(tokenId)]);
      return result;
    };
    this.ownerOf = ownerOf_call;
    let supportsInterface_call = async (interfaceId) => {
      let result = await this.call("supportsInterface", [interfaceId]);
      return result;
    };
    this.supportsInterface = supportsInterface_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let tokenURI_call = async (tokenId) => {
      let result = await this.call("tokenURI", [import_eth_wallet.Utils.toString(tokenId)]);
      return result;
    };
    this.tokenURI = tokenURI_call;
    let approveParams = (params) => [params.to, import_eth_wallet.Utils.toString(params.tokenId)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let safeTransferFromParams = (params) => [params.from, params.to, import_eth_wallet.Utils.toString(params.tokenId)];
    let safeTransferFrom_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
      call: safeTransferFrom_call
    });
    let safeTransferFrom_1Params = (params) => [params.from, params.to, import_eth_wallet.Utils.toString(params.tokenId), import_eth_wallet.Utils.stringToBytes(params.data)];
    let safeTransferFrom_1_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_1_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
      call: safeTransferFrom_1_call
    });
    let setApprovalForAllParams = (params) => [params.operator, params.approved];
    let setApprovalForAll_send = async (params) => {
      let result = await this.send("setApprovalForAll", setApprovalForAllParams(params));
      return result;
    };
    let setApprovalForAll_call = async (params) => {
      let result = await this.call("setApprovalForAll", setApprovalForAllParams(params));
      return;
    };
    this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
      call: setApprovalForAll_call
    });
    let transferFromParams = (params) => [params.from, params.to, import_eth_wallet.Utils.toString(params.tokenId)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
  }
};

// src/contracts/Authorization.ts
var import_eth_wallet2 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/Authorization.json.ts
var Authorization_json_default = {
  "abi": [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "608060405234801561001057600080fd5b50600080546001600160a01b031916331790556104e6806100326000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639c52a7f11161005b5780639c52a7f11461010b578063a2f55ae51461011e578063d4ee1d9014610131578063f2fde38b1461015157600080fd5b80633fd8cc4e1461008257806360536172146100bc5780638da5cb5b146100c6575b600080fd5b6100a5610090366004610473565b60026020526000908152604090205460ff1681565b60405160ff90911681526020015b60405180910390f35b6100c4610164565b005b6000546100e69073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b3565b6100c4610119366004610473565b610292565b6100c461012c366004610473565b610339565b6001546100e69073ffffffffffffffffffffffffffffffffffffffff1681565b6100c461015f366004610473565b6103dc565b60015473ffffffffffffffffffffffffffffffffffffffff16331461020f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840160405180910390fd5b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102b657600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461035d57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161032e565b60005473ffffffffffffffffffffffffffffffffffffffff16331461040057600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161032e565b60006020828403121561048557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146104a957600080fd5b939250505056fea26469706673582212205b22d6847511bcab2226d105c6cff79b748bb4a8c22f466caac05f938049167564736f6c63430008110033"
};

// src/contracts/Authorization.ts
var Authorization = class extends import_eth_wallet2.Contract {
  constructor(wallet, address) {
    super(wallet, address, Authorization_json_default.abi, Authorization_json_default.bytecode);
    this.assign();
  }
  deploy() {
    return this.__deploy();
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  assign() {
    let isPermitted_call = async (param1) => {
      let result = await this.call("isPermitted", [param1]);
      return new import_eth_wallet2.BigNumber(result);
    };
    this.isPermitted = isPermitted_call;
    let newOwner_call = async () => {
      let result = await this.call("newOwner");
      return result;
    };
    this.newOwner = newOwner_call;
    let owner_call = async () => {
      let result = await this.call("owner");
      return result;
    };
    this.owner = owner_call;
    let deny_send = async (user) => {
      let result = await this.send("deny", [user]);
      return result;
    };
    let deny_call = async (user) => {
      let result = await this.call("deny", [user]);
      return;
    };
    this.deny = Object.assign(deny_send, {
      call: deny_call
    });
    let permit_send = async (user) => {
      let result = await this.send("permit", [user]);
      return result;
    };
    let permit_call = async (user) => {
      let result = await this.call("permit", [user]);
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let takeOwnership_send = async () => {
      let result = await this.send("takeOwnership");
      return result;
    };
    let takeOwnership_call = async () => {
      let result = await this.call("takeOwnership");
      return;
    };
    this.takeOwnership = Object.assign(takeOwnership_send, {
      call: takeOwnership_call
    });
    let transferOwnership_send = async (newOwner) => {
      let result = await this.send("transferOwnership", [newOwner]);
      return result;
    };
    let transferOwnership_call = async (newOwner) => {
      let result = await this.call("transferOwnership", [newOwner]);
      return;
    };
    this.transferOwnership = Object.assign(transferOwnership_send, {
      call: transferOwnership_call
    });
  }
};

// src/contracts/ScomAirdropFactory.ts
var import_eth_wallet3 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/ScomAirdropFactory.json.ts
var ScomAirdropFactory_json_default = {
  "abi": [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "indexed": false, "internalType": "address[]", "name": "admins", "type": "address[]" }], "name": "NewProfile", "type": "event" },
    { "inputs": [{ "internalType": "address[]", "name": "admins", "type": "address[]" }], "name": "newProfile", "outputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "profileIdCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "profileVault", "outputs": [{ "internalType": "contract ScomAirdropVault", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
  ],
  "bytecode": "608060405234801561001057600080fd5b50615404806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063203c1a9814610046578063525ee3fa146100a6578063d21b127b146100bd575b600080fd5b61007c610054366004610373565b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100af60005481565b60405190815260200161009d565b6100af6100cb36600461038c565b600080600081546100db90610401565b919050819055905060006040516100f190610366565b604080825260129082018190527f53636f6d2041697264726f70205661756c74000000000000000000000000000060608301526080602083018190528201527f53636f6d2d41697264726f702d5661756c74000000000000000000000000000060a082015260c001604051809103906000f080158015610175573d6000803e3d6000fd5b50905060005b83811015610257578173ffffffffffffffffffffffffffffffffffffffff1663a2f55ae58686848181106101b1576101b1610460565b90506020020160208101906101c691906104b8565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401600060405180830381600087803b15801561022c57600080fd5b505af1158015610240573d6000803e3d6000fd5b50505050808061024f90610401565b91505061017b565b506040517f13af403500000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8216906313af403590602401600060405180830381600087803b1580156102bf57600080fd5b505af11580156102d3573d6000803e3d6000fd5b5050506000838152600160205260409081902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8516179055517f7ba1d39c20b2d92d216600ca5318570e4a6c147f058fdb8c2cb03851997159ea9150610357908490879087906104da565b60405180910390a15092915050565b614e918061053e83390190565b60006020828403121561038557600080fd5b5035919050565b6000806020838503121561039f57600080fd5b823567ffffffffffffffff808211156103b757600080fd5b818501915085601f8301126103cb57600080fd5b8135818111156103da57600080fd5b8660208260051b85010111156103ef57600080fd5b60209290920196919550909350505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610459577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146104b357600080fd5b919050565b6000602082840312156104ca57600080fd5b6104d38261048f565b9392505050565b83815260406020808301829052908201839052600090849060608401835b868110156105315773ffffffffffffffffffffffffffffffffffffffff61051e8561048f565b16825292820192908201906001016104f8565b5097965050505050505056fe60806040523480156200001157600080fd5b5060405162004e9138038062004e91833981016040819052620000349162000148565b600080546001600160a01b031916331790558181600362000056838262000241565b50600462000065828262000241565b5050601080546001600160a01b03191633179055506200030d915050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000ab57600080fd5b81516001600160401b0380821115620000c857620000c862000083565b604051601f8301601f19908116603f01168101908282118183101715620000f357620000f362000083565b816040528381526020925086838588010111156200011057600080fd5b600091505b8382101562000134578582018301518183018401529082019062000115565b600093810190920192909252949350505050565b600080604083850312156200015c57600080fd5b82516001600160401b03808211156200017457600080fd5b620001828683870162000099565b935060208501519150808211156200019957600080fd5b50620001a88582860162000099565b9150509250929050565b600181811c90821680620001c757607f821691505b602082108103620001e857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200023c57600081815260208120601f850160051c81016020861015620002175750805b601f850160051c820191505b81811015620002385782815560010162000223565b5050505b505050565b81516001600160401b038111156200025d576200025d62000083565b62000275816200026e8454620001b2565b84620001ee565b602080601f831160018114620002ad5760008415620002945750858301515b600019600386901b1c1916600185901b17855562000238565b600085815260208120601f198616915b82811015620002de57888601518255948401946001909101908401620002bd565b5085821015620002fd5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b614b74806200031d6000396000f3fe608060405234801561001057600080fd5b50600436106103205760003560e01c80636352211e116101a7578063ae205176116100ee578063e5bc504a11610097578063f2fde38b11610071578063f2fde38b14610821578063f4dadc6114610834578063f7c8d2211461085757600080fd5b8063e5bc504a146107b2578063e9217bd1146107c5578063e985e9c5146107d857600080fd5b8063c45a0155116100c8578063c45a01551461075f578063c87b56dd1461077f578063d4ee1d901461079257600080fd5b8063ae2051761461070a578063b88d4fde1461072a578063bb2238ec1461073d57600080fd5b80639051cce9116101505780639c52a7f11161012a5780639c52a7f1146106d1578063a22cb465146106e4578063a2f55ae5146106f757600080fd5b80639051cce9146106a3578063958ddc98146106b657806395d89b41146106c957600080fd5b80637c4556c1116101815780637c4556c11461065a5780638101f2bd146106635780638da5cb5b1461068357600080fd5b80636352211e146105c557806366ffcf5f146105d857806370a082311461064757600080fd5b806329014d2a1161026b5780634ca14703116102145780635757afc5116101ee5780635757afc5146105875780635bfc5a6e146105b557806360536172146105bd57600080fd5b80634ca14703146105585780634f6ccce71461056b578063511aed991461057e57600080fd5b80633fd8cc4e116102455780633fd8cc4e146104f057806342842e0e146105255780634a0e835b1461053857600080fd5b806329014d2a146104c15780632f745c59146104ca578063379607f5146104dd57600080fd5b806313af4035116102cd5780631a3cd59a116102a75780631a3cd59a1461042b5780631c86fa901461049b57806323b872dd146104ae57600080fd5b806313af4035146103f0578063141a93291461040357806318160ddd1461042357600080fd5b8063095ea7b3116102fe578063095ea7b31461039a5780630b651d2f146103af57806312f308fa146103dd57600080fd5b806301ffc9a71461032557806306fdde031461034d578063081812fc14610362575b600080fd5b610338610333366004613eb1565b61086a565b60405190151581526020015b60405180910390f35b6103556108c6565b6040516103449190613f3c565b610375610370366004613f4f565b610958565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610344565b6103ad6103a8366004613f8a565b61098c565b005b6103cf6103bd366004613f4f565b60196020526000908152604090205481565b604051908152602001610344565b6103cf6103eb366004613fb6565b610b1d565b6103ad6103fe36600461405c565b610d93565b6103cf610411366004613f4f565b60186020526000908152604090205481565b600b546103cf565b61043e610439366004613f4f565b610e5b565b60408051998a5260208a019890985273ffffffffffffffffffffffffffffffffffffffff96871697890197909752949093166060870152608086019190915260a085015260c084015260e083015261010082015261012001610344565b6103cf6104a93660046140c2565b610f8f565b6103ad6104bc366004614123565b61123a565b6103cf600d5481565b6103cf6104d8366004613f8a565b6112db565b6103ad6104eb366004613f4f565b6113aa565b6105136104fe36600461405c565b60026020526000908152604090205460ff1681565b60405160ff9091168152602001610344565b6103ad610533366004614123565b6113b6565b6103cf610546366004613f4f565b60126020526000908152604090205481565b6103ad610566366004614164565b6113d1565b6103cf610579366004613f4f565b61154a565b6103cf600e5481565b610338610595366004613f8a565b601360209081526000928352604080842090915290825290205460ff1681565b6011546103cf565b6103ad611608565b6103756105d3366004613f4f565b611732565b6106356105e6366004613f4f565b601660205260009081526040902080546001820154600283015460038401546004850154600590950154939473ffffffffffffffffffffffffffffffffffffffff909316939192909160ff1686565b604051610344969594939291906141df565b6103cf61065536600461405c565b6117be565b6103cf600f5481565b6103cf610671366004613f4f565b60176020526000908152604090205481565b6000546103759073ffffffffffffffffffffffffffffffffffffffff1681565b6103ad6106b13660046142de565b61188c565b6103cf6106c4366004613f4f565b6118cd565b6103556119f6565b6103ad6106df36600461405c565b611a05565b6103ad6106f2366004614392565b611aac565b6103ad61070536600461405c565b611abb565b6103cf610718366004613f4f565b60009081526014602052604090205490565b6103ad6107383660046143cb565b611b5e565b61075061074b366004613f4f565b611c06565b604051610344939291906144ad565b6010546103759073ffffffffffffffffffffffffffffffffffffffff1681565b61035561078d366004613f4f565b611cde565b6001546103759073ffffffffffffffffffffffffffffffffffffffff1681565b6103cf6107c03660046144ed565b611d52565b6103cf6107d336600461450f565b611d83565b6103386107e6366004614574565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260086020908152604080832093909416825291909152205460ff1690565b6103ad61082f36600461405c565b611fc4565b610847610842366004613f4f565b61205b565b60405161034494939291906145a2565b6103ad610865366004613f8a565b61212a565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d630000000000000000000000000000000000000000000000000000000014806108c057506108c08261216f565b92915050565b6060600380546108d5906145dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610901906145dc565b801561094e5780601f106109235761010080835404028352916020019161094e565b820191906000526020600020905b81548152906001019060200180831161093157829003601f168201915b5050505050905090565b600061096382612252565b5060009081526007602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061099782611732565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a59576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82161480610a825750610a8281336107e6565b610b0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610a50565b610b1883836122dd565b505050565b6000610beb83838080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050601180549092508c91508110610b6b57610b6b61462f565b6000918252602091829020600260049092020101546040517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b1692810192909252603482018b9052605482018a905260748201899052609482018890529060b401604051602081830303815290604052805190602001206123b8565b610c51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6d65726b6c652070726f6f66206661696c6564000000000000000000000000006044820152606401610a50565b3360009081526013602090815260408083208b845290915290205460ff1615610cd6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f6d65726b6c65496420616c7265616479207665726966696564000000000000006044820152606401610a50565b6000610ce588338989896123ce565b600f805493509091506001906000610cfd838661468d565b9091555050600082815260176020908152604080832084905533808452601383528184208d855290925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905551909184918b917f8334f87aeaf76e52b061d93ee968e51fdd3ad53ca04e80271249227997aab3a091a4610d873383612603565b50979650505050505050565b60105473ffffffffffffffffffffffffffffffffffffffff163314610e14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4e6f742066726f6d20666163746f7279000000000000000000000000000000006044820152606401610a50565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806000806000806000806000610e728a611732565b60008b81526017602090815260408083205480845260168352818420825160c0810184528154815260018083015473ffffffffffffffffffffffffffffffffffffffff169582019590955260028201549381019390935260038101546060840152600481015460808401526005810154919d50949b5092939092909160a084019160ff1690811115610f0657610f066141b0565b6001811115610f1757610f176141b0565b9052508051600081815260156020526040902060010154909b5073ffffffffffffffffffffffffffffffffffffffff1697509050610f548961261d565b9550601260008a8152602001908152602001600020549450806040015193508060600151925080608001519150509193959799909294969850565b3360009081526002602052604081205460ff16600114611031576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a50565b81611098576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f646174615572692063616e6e6f7420626520656d7074790000000000000000006044820152606401610a50565b5060118054600087815260146020908152604080832080546001810182559084528284200184905580516080810182529283528051601f87018390048302810183019091528581529293928282019187908790819084018382808284376000920182905250938552505050602080830189905267ffffffffffffffff421660409093019290925283546001818101865594825290829020835160049092020190815590820151919290919082019061115090826146ee565b506040828101516002830155606090920151600390910180547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001667ffffffffffffffff90921691909117905560008781526015602052206001015473ffffffffffffffffffffffffffffffffffffffff166111cd81338861263f565b9550856018600089815260200190815260200160002060008282546111f2919061468d565b90915550506040518681523390889084907f114cc376d25215fb3215218ecf58c7fd5434f680efa149f1ef0b5ce3e7ca06fc9060200160405180910390a45095945050505050565b6112443382612796565b6112d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f7665640000000000000000000000000000000000006064820152608401610a50565b610b18838383612855565b60006112e6836117be565b8210611374576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e64730000000000000000000000000000000000000000006064820152608401610a50565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600960209081526040808320938352929052205490565b6113b3816129c1565b50565b610b1883838360405180602001604052806000815250611b5e565b3360009081526002602052604090205460ff16600114611473576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a50565b806114da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f646174615572692063616e6e6f7420626520656d7074790000000000000000006044820152606401610a50565b60008381526015602052604090206114f3828483614808565b503373ffffffffffffffffffffffffffffffffffffffff16837f827c032fe6cd1eed9fd542005e6a56d0c5e80bc6e38171ab664069244da14819848460405161153d929190614922565b60405180910390a3505050565b6000611555600b5490565b82106115e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e647300000000000000000000000000000000000000006064820152608401610a50565b600b82815481106115f6576115f661462f565b90600052602060002001549050919050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146116af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a50565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526005602052604081205473ffffffffffffffffffffffffffffffffffffffff16806108c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610a50565b600073ffffffffffffffffffffffffffffffffffffffff8216611863576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e657200000000000000000000000000000000000000000000006064820152608401610a50565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526006602052604090205490565b805160005b81811015610b18576118bb8382815181106118ae576118ae61462f565b60200260200101516129c1565b806118c58161496f565b915050611891565b6000818152601660209081526040808320815160c0810183528154815260018083015473ffffffffffffffffffffffffffffffffffffffff169482019490945260028201549281019290925260038101546060830152600481015460808301526005810154849360a084019160ff169081111561194c5761194c6141b0565b600181111561195d5761195d6141b0565b81525050905080606001514210156119785750600092915050565b8060600151816080015103611991576040015192915050565b806080015142106119a6576040015192915050565b60008160600151426119b891906149a7565b90506000826060015183608001516119d091906149a7565b9050808284604001516119e391906149ba565b6119ed9190614a00565b95945050505050565b6060600480546108d5906145dc565b60005473ffffffffffffffffffffffffffffffffffffffff163314611a2957600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b611ab7338383612ca4565b5050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611adf57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101611aa1565b611b683383612796565b611bf4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f7665640000000000000000000000000000000000006064820152608401610a50565b611c0084848484612dc9565b50505050565b601560205260009081526040902080548190611c21906145dc565b80601f0160208091040260200160405190810160405280929190818152602001828054611c4d906145dc565b8015611c9a5780601f10611c6f57610100808354040283529160200191611c9a565b820191906000526020600020905b815481529060010190602001808311611c7d57829003601f168201915b5050506001909301549192505073ffffffffffffffffffffffffffffffffffffffff81169060ff740100000000000000000000000000000000000000009091041683565b6060611ce982612252565b6000611d0060408051602081019091526000815290565b90506000815111611d205760405180602001604052806000815250611d4b565b80611d2a84612e6c565b604051602001611d3b929190614a14565b6040516020818303038152906040525b9392505050565b60146020528160005260406000208181548110611d6e57600080fd5b90600052602060002001600091509150505481565b3360009081526002602052604081205460ff16600114611e25576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a50565b81611e8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f646174615572692063616e6e6f7420626520656d7074790000000000000000006044820152606401610a50565b600d60008154611e9b9061496f565b91829055506040805160806020601f87018190040282018101909252606081018581529293509182918690869081908501838280828437600092018290525093855250505073ffffffffffffffffffffffffffffffffffffffff8816602080840191909152871515604093840152848252601590522081518190611f1f90826146ee565b50602082015160019091018054604093840151151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00000000000000000000000000000000000000000090911673ffffffffffffffffffffffffffffffffffffffff9093169290921791909117905551339082907fec43c2ba7667c935356219eb87401926de2a65b331b1867aeb9b05626677f53b90600090a3949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611fe857600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001611aa1565b6011818154811061206b57600080fd5b60009182526020909120600490910201805460018201805491935090612090906145dc565b80601f01602080910402602001604051908101604052809291908181526020018280546120bc906145dc565b80156121095780601f106120de57610100808354040283529160200191612109565b820191906000526020600020905b8154815290600101906020018083116120ec57829003601f168201915b50505050600283015460039093015491929167ffffffffffffffff16905084565b60005473ffffffffffffffffffffffffffffffffffffffff16331461214e57600080fd5b611ab773ffffffffffffffffffffffffffffffffffffffff83163383612fa1565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061220257507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806108c057507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146108c0565b60008181526005602052604090205473ffffffffffffffffffffffffffffffffffffffff166113b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610a50565b60008181526017602090815260408083205480845260169092529091205473ffffffffffffffffffffffffffffffffffffffff84161580612348575060008181526015602052604090206001015474010000000000000000000000000000000000000000900460ff16155b6123ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f546f6b656e206f776e65722069732066726f7a656e21000000000000000000006044820152606401610a50565b611c008484613075565b6000826123c58584613115565b14949350505050565b600081831115612460576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f537461727420646174652063616e6e6f74206265206c61746572207468616e2060448201527f656e6420646174650000000000000000000000000000000000000000000000006064820152608401610a50565b600e6000815461246f9061496f565b91905081905590506040518060c001604052808781526020018673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001838152602001600060018111156124c9576124c96141b0565b90526000828152601660209081526040918290208351815590830151600180830180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90931692909217909155918301516002820155606083015160038201556080830151600482015560a08301516005820180549293919290917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909116908381811115612591576125916141b0565b02179055505060408051838152602081018790529081018590526060810184905273ffffffffffffffffffffffffffffffffffffffff8716915087907f82debb28bd576b13304dd9103c74c7b554c1de8e996c8576dc43dbfca4a1bd0f9060800160405180910390a395945050505050565b611ab7828260405180602001604052806000815250613162565b600081815260126020526040812054612635836118cd565b6108c091906149a7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156126ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126d09190614a43565b90506126f473ffffffffffffffffffffffffffffffffffffffff8516843085613205565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015612760573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127849190614a43565b61278e91906149a7565b949350505050565b6000806127a283611732565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612810575073ffffffffffffffffffffffffffffffffffffffff80821660009081526008602090815260408083209388168352929052205460ff165b8061278e57508373ffffffffffffffffffffffffffffffffffffffff1661283684610958565b73ffffffffffffffffffffffffffffffffffffffff1614949350505050565b60008181526017602090815260408083205480845260169092529091205473ffffffffffffffffffffffffffffffffffffffff8086169085160361291b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f43616e6e6f74207472616e7366657220746f207468652073616d65206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610a50565b60008181526015602052604090206001015474010000000000000000000000000000000000000000900460ff16156129af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f546f6b656e206f776e65722069732066726f7a656e21000000000000000000006044820152606401610a50565b6129ba858585613263565b5050505050565b600081815260176020526040902054336129da83611732565b73ffffffffffffffffffffffffffffffffffffffff1614612a7d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f43616e6e6f7420636c61696d2829206f6e206120746f6b656e2062656c6f6e6760448201527f696e6720746f20616e6f746865722061646472657373210000000000000000006064820152608401610a50565b6000612a88826118cd565b6000838152601260205260409020549091508103612aa557505050565b600082815260126020526040812054612abe90836149a7565b600084815260126020908152604080832086905560168252808320815160c0810183528154815260018083015473ffffffffffffffffffffffffffffffffffffffff169482019490945260028201549281019290925260038101546060830152600481015460808301526005810154949550929390929160a084019160ff1690811115612b4d57612b4d6141b0565b6001811115612b5e57612b5e6141b0565b905250905060008160a001516001811115612b7b57612b7b6141b0565b14612be2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e6163746976652076657374696e67000000000000000000000000000000006044820152606401610a50565b600084815260126020526040908190205482820151915187927fa21b52191f39061227a0dd21f4fc770a4a74c59b7c026fb7e3c5ba8e303d21eb92612c3a928792909283526020830191909152604082015260600190565b60405180910390a2805160009081526015602052604090206001015473ffffffffffffffffffffffffffffffffffffffff16612c77813385612fa1565b815160009081526019602052604081208054859290612c9790849061468d565b9091555050505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612d39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610a50565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526008602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910161153d565b612dd4848484612855565b612de0848484846134d5565b611c00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610a50565b606081600003612eaf57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115612ed95780612ec38161496f565b9150612ed29050600a83614a00565b9150612eb3565b60008167ffffffffffffffff811115612ef457612ef4614260565b6040519080825280601f01601f191660200182016040528015612f1e576020820181803683370190505b5090505b841561278e57612f336001836149a7565b9150612f40600a86614a5c565b612f4b90603061468d565b60f81b818381518110612f6057612f6061462f565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350612f9a600a86614a00565b9450612f22565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b189084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526136c8565b600081815260076020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915581906130cf82611732565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081815b845181101561315a57613146828683815181106131395761313961462f565b60200260200101516137d4565b9150806131528161496f565b91505061311a565b509392505050565b61316c8383613800565b61317960008484846134d5565b610b18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610a50565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611c009085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401612ff3565b8273ffffffffffffffffffffffffffffffffffffffff1661328382611732565b73ffffffffffffffffffffffffffffffffffffffff1614613326576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610a50565b73ffffffffffffffffffffffffffffffffffffffff82166133c8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610a50565b6133d38383836139ce565b6133de6000826122dd565b73ffffffffffffffffffffffffffffffffffffffff831660009081526006602052604081208054600192906134149084906149a7565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600090815260066020526040812080546001929061344f90849061468d565b909155505060008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600073ffffffffffffffffffffffffffffffffffffffff84163b156136bd576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a029061354c903390899088908890600401614a70565b6020604051808303816000875af19250505080156135a5575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526135a291810190614ab9565b60015b613672573d8080156135d3576040519150601f19603f3d011682016040523d82523d6000602084013e6135d8565b606091505b50805160000361366a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610a50565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a020000000000000000000000000000000000000000000000000000000014905061278e565b506001949350505050565b600061372a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16613ad49092919063ffffffff16565b805190915015610b1857808060200190518101906137489190614ad6565b610b18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a50565b60008183106137f0576000828152602084905260409020611d4b565b5060009182526020526040902090565b73ffffffffffffffffffffffffffffffffffffffff821661387d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610a50565b60008181526005602052604090205473ffffffffffffffffffffffffffffffffffffffff1615613909576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610a50565b613915600083836139ce565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260066020526040812080546001929061394b90849061468d565b909155505060008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b73ffffffffffffffffffffffffffffffffffffffff8316613a3657613a3181600b80546000838152600c60205260408120829055600182018355919091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90155565b613a73565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614613a7357613a738382613ae3565b73ffffffffffffffffffffffffffffffffffffffff8216613a9757610b1881613b9a565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610b1857610b188282613c49565b606061278e8484600085613c9a565b60006001613af0846117be565b613afa91906149a7565b6000838152600a6020526040902054909150808214613b5a5773ffffffffffffffffffffffffffffffffffffffff841660009081526009602090815260408083208584528252808320548484528184208190558352600a90915290208190555b506000918252600a6020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600981528383209183525290812055565b600b54600090613bac906001906149a7565b6000838152600c6020526040812054600b8054939450909284908110613bd457613bd461462f565b9060005260206000200154905080600b8381548110613bf557613bf561462f565b6000918252602080832090910192909255828152600c9091526040808220849055858252812055600b805480613c2d57613c2d614af3565b6001900381819060005260206000200160009055905550505050565b6000613c54836117be565b73ffffffffffffffffffffffffffffffffffffffff90931660009081526009602090815260408083208684528252808320859055938252600a9052919091209190915550565b606082471015613d2c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a50565b73ffffffffffffffffffffffffffffffffffffffff85163b613daa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a50565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051613dd39190614b22565b60006040518083038185875af1925050503d8060008114613e10576040519150601f19603f3d011682016040523d82523d6000602084013e613e15565b606091505b5091509150613e25828286613e30565b979650505050505050565b60608315613e3f575081611d4b565b825115613e4f5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a509190613f3c565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146113b357600080fd5b600060208284031215613ec357600080fd5b8135611d4b81613e83565b60005b83811015613ee9578181015183820152602001613ed1565b50506000910152565b60008151808452613f0a816020860160208601613ece565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611d4b6020830184613ef2565b600060208284031215613f6157600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff811681146113b357600080fd5b60008060408385031215613f9d57600080fd5b8235613fa881613f68565b946020939093013593505050565b600080600080600080600060c0888a031215613fd157600080fd5b873596506020880135955060408801359450606088013593506080880135925060a088013567ffffffffffffffff8082111561400c57600080fd5b818a0191508a601f83011261402057600080fd5b81358181111561402f57600080fd5b8b60208260051b850101111561404457600080fd5b60208301945080935050505092959891949750929550565b60006020828403121561406e57600080fd5b8135611d4b81613f68565b60008083601f84011261408b57600080fd5b50813567ffffffffffffffff8111156140a357600080fd5b6020830191508360208285010111156140bb57600080fd5b9250929050565b6000806000806000608086880312156140da57600080fd5b853594506020860135935060408601359250606086013567ffffffffffffffff81111561410657600080fd5b61411288828901614079565b969995985093965092949392505050565b60008060006060848603121561413857600080fd5b833561414381613f68565b9250602084013561415381613f68565b929592945050506040919091013590565b60008060006040848603121561417957600080fd5b83359250602084013567ffffffffffffffff81111561419757600080fd5b6141a386828701614079565b9497909650939450505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060c08201905087825273ffffffffffffffffffffffffffffffffffffffff871660208301528560408301528460608301528360808301526002831061424f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8260a0830152979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156142d6576142d6614260565b604052919050565b600060208083850312156142f157600080fd5b823567ffffffffffffffff8082111561430957600080fd5b818501915085601f83011261431d57600080fd5b81358181111561432f5761432f614260565b8060051b915061434084830161428f565b818152918301840191848101908884111561435a57600080fd5b938501935b838510156143785784358252938501939085019061435f565b98975050505050505050565b80151581146113b357600080fd5b600080604083850312156143a557600080fd5b82356143b081613f68565b915060208301356143c081614384565b809150509250929050565b600080600080608085870312156143e157600080fd5b84356143ec81613f68565b93506020858101356143fd81613f68565b935060408601359250606086013567ffffffffffffffff8082111561442157600080fd5b818801915088601f83011261443557600080fd5b81358181111561444757614447614260565b614477847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161428f565b9150808252898482850101111561448d57600080fd5b808484018584013760008482840101525080935050505092959194509250565b6060815260006144c06060830186613ef2565b73ffffffffffffffffffffffffffffffffffffffff94909416602083015250901515604090910152919050565b6000806040838503121561450057600080fd5b50508035926020909101359150565b6000806000806060858703121561452557600080fd5b843561453081613f68565b9350602085013561454081614384565b9250604085013567ffffffffffffffff81111561455c57600080fd5b61456887828801614079565b95989497509550505050565b6000806040838503121561458757600080fd5b823561459281613f68565b915060208301356143c081613f68565b8481526080602082015260006145bb6080830186613ef2565b905083604083015267ffffffffffffffff8316606083015295945050505050565b600181811c908216806145f057607f821691505b602082108103614629577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156108c0576108c061465e565b601f821115610b1857600081815260208120601f850160051c810160208610156146c75750805b601f850160051c820191505b818110156146e6578281556001016146d3565b505050505050565b815167ffffffffffffffff81111561470857614708614260565b61471c8161471684546145dc565b846146a0565b602080601f83116001811461476f57600084156147395750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556146e6565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156147bc5788860151825594840194600190910190840161479d565b50858210156147f857878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b67ffffffffffffffff83111561482057614820614260565b6148348361482e83546145dc565b836146a0565b6000601f84116001811461488657600085156148505750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b1783556129ba565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156148d557868501358255602094850194600190920191016148b5565b5086821015614910577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036149a0576149a061465e565b5060010190565b818103818111156108c0576108c061465e565b80820281158282048414176108c0576108c061465e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082614a0f57614a0f6149d1565b500490565b60008351614a26818460208801613ece565b835190830190614a3a818360208801613ece565b01949350505050565b600060208284031215614a5557600080fd5b5051919050565b600082614a6b57614a6b6149d1565b500690565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152614aaf6080830184613ef2565b9695505050505050565b600060208284031215614acb57600080fd5b8151611d4b81613e83565b600060208284031215614ae857600080fd5b8151611d4b81614384565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60008251614b34818460208701613ece565b919091019291505056fea2646970667358221220eb9ee4a8a821c5714d2638018376252695b43606710b4c051fa93c056f643b1c64736f6c63430008110033a26469706673582212205ca91f8655bc7fafc0d286698477004926275933e7042fb661d29d4d00ff5d7764736f6c63430008110033"
};

// src/contracts/ScomAirdropFactory.ts
var ScomAirdropFactory = class extends import_eth_wallet3.Contract {
  constructor(wallet, address) {
    super(wallet, address, ScomAirdropFactory_json_default.abi, ScomAirdropFactory_json_default.bytecode);
    this.assign();
  }
  deploy() {
    return this.__deploy();
  }
  parseNewProfileEvent(receipt) {
    return this.parseEvents(receipt, "NewProfile").map((e) => this.decodeNewProfileEvent(e));
  }
  decodeNewProfileEvent(event) {
    let result = event.data;
    return {
      profileId: new import_eth_wallet3.BigNumber(result.profileId),
      admins: result.admins,
      _event: event
    };
  }
  assign() {
    let profileIdCount_call = async () => {
      let result = await this.call("profileIdCount");
      return new import_eth_wallet3.BigNumber(result);
    };
    this.profileIdCount = profileIdCount_call;
    let profileVault_call = async (param1) => {
      let result = await this.call("profileVault", [import_eth_wallet3.Utils.toString(param1)]);
      return result;
    };
    this.profileVault = profileVault_call;
    let newProfile_send = async (admins) => {
      let result = await this.send("newProfile", [admins]);
      return result;
    };
    let newProfile_call = async (admins) => {
      let result = await this.call("newProfile", [admins]);
      return new import_eth_wallet3.BigNumber(result);
    };
    this.newProfile = Object.assign(newProfile_send, {
      call: newProfile_call
    });
  }
};

// src/contracts/ScomAirdropVault.ts
var import_eth_wallet4 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/ScomAirdropVault.json.ts
var ScomAirdropVault_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "nftId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalClaimed", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalAmount", "type": "uint256" }], "name": "Claim", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "vestingId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "recipient", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "startDate", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "endDate", "type": "uint256" }], "name": "CreateVesting", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "lockId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "Lock", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "nftId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "recipient", "type": "address" }], "name": "Mint", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "NewCampaign", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "dataUri", "type": "string" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "UpdateCampaign", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "campaignClaimed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "campaignIdCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "campaignInfo", "outputs": [{ "internalType": "string", "name": "dataUri", "type": "string" }, { "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "bool", "name": "ownerFrozen", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "campaignLocked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "campaignLocks", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "campaignId", "type": "uint256" }], "name": "campaignLocksLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }], "name": "claimMultiple", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "getInfo", "outputs": [{ "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "internalType": "uint256", "name": "vestingId", "type": "uint256" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "unclaimedFunds", "type": "uint256" }, { "internalType": "uint256", "name": "claimedAmount", "type": "uint256" }, { "internalType": "uint256", "name": "totalAmount", "type": "uint256" }, { "internalType": "uint256", "name": "startDate", "type": "uint256" }, { "internalType": "uint256", "name": "endDate", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "isLockIdVerified", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "locks", "outputs": [{ "internalType": "uint256", "name": "vestingId", "type": "uint256" }, { "internalType": "string", "name": "dataUri", "type": "string" }, { "internalType": "bytes32", "name": "root", "type": "bytes32" }, { "internalType": "uint64", "name": "dateCreated", "type": "uint64" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "locksLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "vestingId", "type": "uint256" }], "name": "maximumAllowedClaimedFunds", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bytes32", "name": "merkleRoot", "type": "bytes32" }, { "internalType": "string", "name": "dataUri", "type": "string" }], "name": "merkleLock", "outputs": [{ "internalType": "uint256", "name": "lockId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "bool", "name": "ownerFrozen", "type": "bool" }, { "internalType": "string", "name": "dataUri", "type": "string" }], "name": "newCampaign", "outputs": [{ "internalType": "uint256", "name": "campaignId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "nftIdCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftVestingId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner_", "type": "address" }], "name": "setOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "internalType": "string", "name": "dataUri", "type": "string" }], "name": "updateCampaign", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "lockId", "type": "uint256" }, { "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "startDate", "type": "uint256" }, { "internalType": "uint256", "name": "endDate", "type": "uint256" }, { "internalType": "bytes32[]", "name": "proof", "type": "bytes32[]" }], "name": "verifyMerkleLock", "outputs": [{ "internalType": "uint256", "name": "nftId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "vestingClaimedAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "vestingIdCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "vestingInfo", "outputs": [{ "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "startDate", "type": "uint256" }, { "internalType": "uint256", "name": "endDate", "type": "uint256" }, { "internalType": "enum ScomAirdropVault.VestingStatus", "name": "status", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawFund", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60806040523480156200001157600080fd5b5060405162004e9138038062004e91833981016040819052620000349162000148565b600080546001600160a01b031916331790558181600362000056838262000241565b50600462000065828262000241565b5050601080546001600160a01b03191633179055506200030d915050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000ab57600080fd5b81516001600160401b0380821115620000c857620000c862000083565b604051601f8301601f19908116603f01168101908282118183101715620000f357620000f362000083565b816040528381526020925086838588010111156200011057600080fd5b600091505b8382101562000134578582018301518183018401529082019062000115565b600093810190920192909252949350505050565b600080604083850312156200015c57600080fd5b82516001600160401b03808211156200017457600080fd5b620001828683870162000099565b935060208501519150808211156200019957600080fd5b50620001a88582860162000099565b9150509250929050565b600181811c90821680620001c757607f821691505b602082108103620001e857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200023c57600081815260208120601f850160051c81016020861015620002175750805b601f850160051c820191505b81811015620002385782815560010162000223565b5050505b505050565b81516001600160401b038111156200025d576200025d62000083565b62000275816200026e8454620001b2565b84620001ee565b602080601f831160018114620002ad5760008415620002945750858301515b600019600386901b1c1916600185901b17855562000238565b600085815260208120601f198616915b82811015620002de57888601518255948401946001909101908401620002bd565b5085821015620002fd5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b614b74806200031d6000396000f3fe608060405234801561001057600080fd5b50600436106103205760003560e01c80636352211e116101a7578063ae205176116100ee578063e5bc504a11610097578063f2fde38b11610071578063f2fde38b14610821578063f4dadc6114610834578063f7c8d2211461085757600080fd5b8063e5bc504a146107b2578063e9217bd1146107c5578063e985e9c5146107d857600080fd5b8063c45a0155116100c8578063c45a01551461075f578063c87b56dd1461077f578063d4ee1d901461079257600080fd5b8063ae2051761461070a578063b88d4fde1461072a578063bb2238ec1461073d57600080fd5b80639051cce9116101505780639c52a7f11161012a5780639c52a7f1146106d1578063a22cb465146106e4578063a2f55ae5146106f757600080fd5b80639051cce9146106a3578063958ddc98146106b657806395d89b41146106c957600080fd5b80637c4556c1116101815780637c4556c11461065a5780638101f2bd146106635780638da5cb5b1461068357600080fd5b80636352211e146105c557806366ffcf5f146105d857806370a082311461064757600080fd5b806329014d2a1161026b5780634ca14703116102145780635757afc5116101ee5780635757afc5146105875780635bfc5a6e146105b557806360536172146105bd57600080fd5b80634ca14703146105585780634f6ccce71461056b578063511aed991461057e57600080fd5b80633fd8cc4e116102455780633fd8cc4e146104f057806342842e0e146105255780634a0e835b1461053857600080fd5b806329014d2a146104c15780632f745c59146104ca578063379607f5146104dd57600080fd5b806313af4035116102cd5780631a3cd59a116102a75780631a3cd59a1461042b5780631c86fa901461049b57806323b872dd146104ae57600080fd5b806313af4035146103f0578063141a93291461040357806318160ddd1461042357600080fd5b8063095ea7b3116102fe578063095ea7b31461039a5780630b651d2f146103af57806312f308fa146103dd57600080fd5b806301ffc9a71461032557806306fdde031461034d578063081812fc14610362575b600080fd5b610338610333366004613eb1565b61086a565b60405190151581526020015b60405180910390f35b6103556108c6565b6040516103449190613f3c565b610375610370366004613f4f565b610958565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610344565b6103ad6103a8366004613f8a565b61098c565b005b6103cf6103bd366004613f4f565b60196020526000908152604090205481565b604051908152602001610344565b6103cf6103eb366004613fb6565b610b1d565b6103ad6103fe36600461405c565b610d93565b6103cf610411366004613f4f565b60186020526000908152604090205481565b600b546103cf565b61043e610439366004613f4f565b610e5b565b60408051998a5260208a019890985273ffffffffffffffffffffffffffffffffffffffff96871697890197909752949093166060870152608086019190915260a085015260c084015260e083015261010082015261012001610344565b6103cf6104a93660046140c2565b610f8f565b6103ad6104bc366004614123565b61123a565b6103cf600d5481565b6103cf6104d8366004613f8a565b6112db565b6103ad6104eb366004613f4f565b6113aa565b6105136104fe36600461405c565b60026020526000908152604090205460ff1681565b60405160ff9091168152602001610344565b6103ad610533366004614123565b6113b6565b6103cf610546366004613f4f565b60126020526000908152604090205481565b6103ad610566366004614164565b6113d1565b6103cf610579366004613f4f565b61154a565b6103cf600e5481565b610338610595366004613f8a565b601360209081526000928352604080842090915290825290205460ff1681565b6011546103cf565b6103ad611608565b6103756105d3366004613f4f565b611732565b6106356105e6366004613f4f565b601660205260009081526040902080546001820154600283015460038401546004850154600590950154939473ffffffffffffffffffffffffffffffffffffffff909316939192909160ff1686565b604051610344969594939291906141df565b6103cf61065536600461405c565b6117be565b6103cf600f5481565b6103cf610671366004613f4f565b60176020526000908152604090205481565b6000546103759073ffffffffffffffffffffffffffffffffffffffff1681565b6103ad6106b13660046142de565b61188c565b6103cf6106c4366004613f4f565b6118cd565b6103556119f6565b6103ad6106df36600461405c565b611a05565b6103ad6106f2366004614392565b611aac565b6103ad61070536600461405c565b611abb565b6103cf610718366004613f4f565b60009081526014602052604090205490565b6103ad6107383660046143cb565b611b5e565b61075061074b366004613f4f565b611c06565b604051610344939291906144ad565b6010546103759073ffffffffffffffffffffffffffffffffffffffff1681565b61035561078d366004613f4f565b611cde565b6001546103759073ffffffffffffffffffffffffffffffffffffffff1681565b6103cf6107c03660046144ed565b611d52565b6103cf6107d336600461450f565b611d83565b6103386107e6366004614574565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260086020908152604080832093909416825291909152205460ff1690565b6103ad61082f36600461405c565b611fc4565b610847610842366004613f4f565b61205b565b60405161034494939291906145a2565b6103ad610865366004613f8a565b61212a565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d630000000000000000000000000000000000000000000000000000000014806108c057506108c08261216f565b92915050565b6060600380546108d5906145dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610901906145dc565b801561094e5780601f106109235761010080835404028352916020019161094e565b820191906000526020600020905b81548152906001019060200180831161093157829003601f168201915b5050505050905090565b600061096382612252565b5060009081526007602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061099782611732565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a59576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82161480610a825750610a8281336107e6565b610b0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610a50565b610b1883836122dd565b505050565b6000610beb83838080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050601180549092508c91508110610b6b57610b6b61462f565b6000918252602091829020600260049092020101546040517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b1692810192909252603482018b9052605482018a905260748201899052609482018890529060b401604051602081830303815290604052805190602001206123b8565b610c51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6d65726b6c652070726f6f66206661696c6564000000000000000000000000006044820152606401610a50565b3360009081526013602090815260408083208b845290915290205460ff1615610cd6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f6d65726b6c65496420616c7265616479207665726966696564000000000000006044820152606401610a50565b6000610ce588338989896123ce565b600f805493509091506001906000610cfd838661468d565b9091555050600082815260176020908152604080832084905533808452601383528184208d855290925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905551909184918b917f8334f87aeaf76e52b061d93ee968e51fdd3ad53ca04e80271249227997aab3a091a4610d873383612603565b50979650505050505050565b60105473ffffffffffffffffffffffffffffffffffffffff163314610e14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4e6f742066726f6d20666163746f7279000000000000000000000000000000006044820152606401610a50565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806000806000806000806000610e728a611732565b60008b81526017602090815260408083205480845260168352818420825160c0810184528154815260018083015473ffffffffffffffffffffffffffffffffffffffff169582019590955260028201549381019390935260038101546060840152600481015460808401526005810154919d50949b5092939092909160a084019160ff1690811115610f0657610f066141b0565b6001811115610f1757610f176141b0565b9052508051600081815260156020526040902060010154909b5073ffffffffffffffffffffffffffffffffffffffff1697509050610f548961261d565b9550601260008a8152602001908152602001600020549450806040015193508060600151925080608001519150509193959799909294969850565b3360009081526002602052604081205460ff16600114611031576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a50565b81611098576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f646174615572692063616e6e6f7420626520656d7074790000000000000000006044820152606401610a50565b5060118054600087815260146020908152604080832080546001810182559084528284200184905580516080810182529283528051601f87018390048302810183019091528581529293928282019187908790819084018382808284376000920182905250938552505050602080830189905267ffffffffffffffff421660409093019290925283546001818101865594825290829020835160049092020190815590820151919290919082019061115090826146ee565b506040828101516002830155606090920151600390910180547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001667ffffffffffffffff90921691909117905560008781526015602052206001015473ffffffffffffffffffffffffffffffffffffffff166111cd81338861263f565b9550856018600089815260200190815260200160002060008282546111f2919061468d565b90915550506040518681523390889084907f114cc376d25215fb3215218ecf58c7fd5434f680efa149f1ef0b5ce3e7ca06fc9060200160405180910390a45095945050505050565b6112443382612796565b6112d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f7665640000000000000000000000000000000000006064820152608401610a50565b610b18838383612855565b60006112e6836117be565b8210611374576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e64730000000000000000000000000000000000000000006064820152608401610a50565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600960209081526040808320938352929052205490565b6113b3816129c1565b50565b610b1883838360405180602001604052806000815250611b5e565b3360009081526002602052604090205460ff16600114611473576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a50565b806114da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f646174615572692063616e6e6f7420626520656d7074790000000000000000006044820152606401610a50565b60008381526015602052604090206114f3828483614808565b503373ffffffffffffffffffffffffffffffffffffffff16837f827c032fe6cd1eed9fd542005e6a56d0c5e80bc6e38171ab664069244da14819848460405161153d929190614922565b60405180910390a3505050565b6000611555600b5490565b82106115e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e647300000000000000000000000000000000000000006064820152608401610a50565b600b82815481106115f6576115f661462f565b90600052602060002001549050919050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146116af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a50565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526005602052604081205473ffffffffffffffffffffffffffffffffffffffff16806108c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610a50565b600073ffffffffffffffffffffffffffffffffffffffff8216611863576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e657200000000000000000000000000000000000000000000006064820152608401610a50565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526006602052604090205490565b805160005b81811015610b18576118bb8382815181106118ae576118ae61462f565b60200260200101516129c1565b806118c58161496f565b915050611891565b6000818152601660209081526040808320815160c0810183528154815260018083015473ffffffffffffffffffffffffffffffffffffffff169482019490945260028201549281019290925260038101546060830152600481015460808301526005810154849360a084019160ff169081111561194c5761194c6141b0565b600181111561195d5761195d6141b0565b81525050905080606001514210156119785750600092915050565b8060600151816080015103611991576040015192915050565b806080015142106119a6576040015192915050565b60008160600151426119b891906149a7565b90506000826060015183608001516119d091906149a7565b9050808284604001516119e391906149ba565b6119ed9190614a00565b95945050505050565b6060600480546108d5906145dc565b60005473ffffffffffffffffffffffffffffffffffffffff163314611a2957600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b611ab7338383612ca4565b5050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611adf57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101611aa1565b611b683383612796565b611bf4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f7665640000000000000000000000000000000000006064820152608401610a50565b611c0084848484612dc9565b50505050565b601560205260009081526040902080548190611c21906145dc565b80601f0160208091040260200160405190810160405280929190818152602001828054611c4d906145dc565b8015611c9a5780601f10611c6f57610100808354040283529160200191611c9a565b820191906000526020600020905b815481529060010190602001808311611c7d57829003601f168201915b5050506001909301549192505073ffffffffffffffffffffffffffffffffffffffff81169060ff740100000000000000000000000000000000000000009091041683565b6060611ce982612252565b6000611d0060408051602081019091526000815290565b90506000815111611d205760405180602001604052806000815250611d4b565b80611d2a84612e6c565b604051602001611d3b929190614a14565b6040516020818303038152906040525b9392505050565b60146020528160005260406000208181548110611d6e57600080fd5b90600052602060002001600091509150505481565b3360009081526002602052604081205460ff16600114611e25576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a50565b81611e8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f646174615572692063616e6e6f7420626520656d7074790000000000000000006044820152606401610a50565b600d60008154611e9b9061496f565b91829055506040805160806020601f87018190040282018101909252606081018581529293509182918690869081908501838280828437600092018290525093855250505073ffffffffffffffffffffffffffffffffffffffff8816602080840191909152871515604093840152848252601590522081518190611f1f90826146ee565b50602082015160019091018054604093840151151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00000000000000000000000000000000000000000090911673ffffffffffffffffffffffffffffffffffffffff9093169290921791909117905551339082907fec43c2ba7667c935356219eb87401926de2a65b331b1867aeb9b05626677f53b90600090a3949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611fe857600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001611aa1565b6011818154811061206b57600080fd5b60009182526020909120600490910201805460018201805491935090612090906145dc565b80601f01602080910402602001604051908101604052809291908181526020018280546120bc906145dc565b80156121095780601f106120de57610100808354040283529160200191612109565b820191906000526020600020905b8154815290600101906020018083116120ec57829003601f168201915b50505050600283015460039093015491929167ffffffffffffffff16905084565b60005473ffffffffffffffffffffffffffffffffffffffff16331461214e57600080fd5b611ab773ffffffffffffffffffffffffffffffffffffffff83163383612fa1565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061220257507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806108c057507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146108c0565b60008181526005602052604090205473ffffffffffffffffffffffffffffffffffffffff166113b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610a50565b60008181526017602090815260408083205480845260169092529091205473ffffffffffffffffffffffffffffffffffffffff84161580612348575060008181526015602052604090206001015474010000000000000000000000000000000000000000900460ff16155b6123ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f546f6b656e206f776e65722069732066726f7a656e21000000000000000000006044820152606401610a50565b611c008484613075565b6000826123c58584613115565b14949350505050565b600081831115612460576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f537461727420646174652063616e6e6f74206265206c61746572207468616e2060448201527f656e6420646174650000000000000000000000000000000000000000000000006064820152608401610a50565b600e6000815461246f9061496f565b91905081905590506040518060c001604052808781526020018673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001838152602001600060018111156124c9576124c96141b0565b90526000828152601660209081526040918290208351815590830151600180830180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90931692909217909155918301516002820155606083015160038201556080830151600482015560a08301516005820180549293919290917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909116908381811115612591576125916141b0565b02179055505060408051838152602081018790529081018590526060810184905273ffffffffffffffffffffffffffffffffffffffff8716915087907f82debb28bd576b13304dd9103c74c7b554c1de8e996c8576dc43dbfca4a1bd0f9060800160405180910390a395945050505050565b611ab7828260405180602001604052806000815250613162565b600081815260126020526040812054612635836118cd565b6108c091906149a7565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156126ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126d09190614a43565b90506126f473ffffffffffffffffffffffffffffffffffffffff8516843085613205565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa158015612760573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127849190614a43565b61278e91906149a7565b949350505050565b6000806127a283611732565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612810575073ffffffffffffffffffffffffffffffffffffffff80821660009081526008602090815260408083209388168352929052205460ff165b8061278e57508373ffffffffffffffffffffffffffffffffffffffff1661283684610958565b73ffffffffffffffffffffffffffffffffffffffff1614949350505050565b60008181526017602090815260408083205480845260169092529091205473ffffffffffffffffffffffffffffffffffffffff8086169085160361291b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f43616e6e6f74207472616e7366657220746f207468652073616d65206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610a50565b60008181526015602052604090206001015474010000000000000000000000000000000000000000900460ff16156129af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f546f6b656e206f776e65722069732066726f7a656e21000000000000000000006044820152606401610a50565b6129ba858585613263565b5050505050565b600081815260176020526040902054336129da83611732565b73ffffffffffffffffffffffffffffffffffffffff1614612a7d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f43616e6e6f7420636c61696d2829206f6e206120746f6b656e2062656c6f6e6760448201527f696e6720746f20616e6f746865722061646472657373210000000000000000006064820152608401610a50565b6000612a88826118cd565b6000838152601260205260409020549091508103612aa557505050565b600082815260126020526040812054612abe90836149a7565b600084815260126020908152604080832086905560168252808320815160c0810183528154815260018083015473ffffffffffffffffffffffffffffffffffffffff169482019490945260028201549281019290925260038101546060830152600481015460808301526005810154949550929390929160a084019160ff1690811115612b4d57612b4d6141b0565b6001811115612b5e57612b5e6141b0565b905250905060008160a001516001811115612b7b57612b7b6141b0565b14612be2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e6163746976652076657374696e67000000000000000000000000000000006044820152606401610a50565b600084815260126020526040908190205482820151915187927fa21b52191f39061227a0dd21f4fc770a4a74c59b7c026fb7e3c5ba8e303d21eb92612c3a928792909283526020830191909152604082015260600190565b60405180910390a2805160009081526015602052604090206001015473ffffffffffffffffffffffffffffffffffffffff16612c77813385612fa1565b815160009081526019602052604081208054859290612c9790849061468d565b9091555050505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612d39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610a50565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526008602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910161153d565b612dd4848484612855565b612de0848484846134d5565b611c00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610a50565b606081600003612eaf57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115612ed95780612ec38161496f565b9150612ed29050600a83614a00565b9150612eb3565b60008167ffffffffffffffff811115612ef457612ef4614260565b6040519080825280601f01601f191660200182016040528015612f1e576020820181803683370190505b5090505b841561278e57612f336001836149a7565b9150612f40600a86614a5c565b612f4b90603061468d565b60f81b818381518110612f6057612f6061462f565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350612f9a600a86614a00565b9450612f22565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b189084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526136c8565b600081815260076020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915581906130cf82611732565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081815b845181101561315a57613146828683815181106131395761313961462f565b60200260200101516137d4565b9150806131528161496f565b91505061311a565b509392505050565b61316c8383613800565b61317960008484846134d5565b610b18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610a50565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611c009085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401612ff3565b8273ffffffffffffffffffffffffffffffffffffffff1661328382611732565b73ffffffffffffffffffffffffffffffffffffffff1614613326576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610a50565b73ffffffffffffffffffffffffffffffffffffffff82166133c8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610a50565b6133d38383836139ce565b6133de6000826122dd565b73ffffffffffffffffffffffffffffffffffffffff831660009081526006602052604081208054600192906134149084906149a7565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600090815260066020526040812080546001929061344f90849061468d565b909155505060008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600073ffffffffffffffffffffffffffffffffffffffff84163b156136bd576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a029061354c903390899088908890600401614a70565b6020604051808303816000875af19250505080156135a5575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526135a291810190614ab9565b60015b613672573d8080156135d3576040519150601f19603f3d011682016040523d82523d6000602084013e6135d8565b606091505b50805160000361366a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610a50565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a020000000000000000000000000000000000000000000000000000000014905061278e565b506001949350505050565b600061372a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16613ad49092919063ffffffff16565b805190915015610b1857808060200190518101906137489190614ad6565b610b18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a50565b60008183106137f0576000828152602084905260409020611d4b565b5060009182526020526040902090565b73ffffffffffffffffffffffffffffffffffffffff821661387d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610a50565b60008181526005602052604090205473ffffffffffffffffffffffffffffffffffffffff1615613909576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610a50565b613915600083836139ce565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260066020526040812080546001929061394b90849061468d565b909155505060008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b73ffffffffffffffffffffffffffffffffffffffff8316613a3657613a3181600b80546000838152600c60205260408120829055600182018355919091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90155565b613a73565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614613a7357613a738382613ae3565b73ffffffffffffffffffffffffffffffffffffffff8216613a9757610b1881613b9a565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610b1857610b188282613c49565b606061278e8484600085613c9a565b60006001613af0846117be565b613afa91906149a7565b6000838152600a6020526040902054909150808214613b5a5773ffffffffffffffffffffffffffffffffffffffff841660009081526009602090815260408083208584528252808320548484528184208190558352600a90915290208190555b506000918252600a6020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600981528383209183525290812055565b600b54600090613bac906001906149a7565b6000838152600c6020526040812054600b8054939450909284908110613bd457613bd461462f565b9060005260206000200154905080600b8381548110613bf557613bf561462f565b6000918252602080832090910192909255828152600c9091526040808220849055858252812055600b805480613c2d57613c2d614af3565b6001900381819060005260206000200160009055905550505050565b6000613c54836117be565b73ffffffffffffffffffffffffffffffffffffffff90931660009081526009602090815260408083208684528252808320859055938252600a9052919091209190915550565b606082471015613d2c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a50565b73ffffffffffffffffffffffffffffffffffffffff85163b613daa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a50565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051613dd39190614b22565b60006040518083038185875af1925050503d8060008114613e10576040519150601f19603f3d011682016040523d82523d6000602084013e613e15565b606091505b5091509150613e25828286613e30565b979650505050505050565b60608315613e3f575081611d4b565b825115613e4f5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a509190613f3c565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146113b357600080fd5b600060208284031215613ec357600080fd5b8135611d4b81613e83565b60005b83811015613ee9578181015183820152602001613ed1565b50506000910152565b60008151808452613f0a816020860160208601613ece565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611d4b6020830184613ef2565b600060208284031215613f6157600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff811681146113b357600080fd5b60008060408385031215613f9d57600080fd5b8235613fa881613f68565b946020939093013593505050565b600080600080600080600060c0888a031215613fd157600080fd5b873596506020880135955060408801359450606088013593506080880135925060a088013567ffffffffffffffff8082111561400c57600080fd5b818a0191508a601f83011261402057600080fd5b81358181111561402f57600080fd5b8b60208260051b850101111561404457600080fd5b60208301945080935050505092959891949750929550565b60006020828403121561406e57600080fd5b8135611d4b81613f68565b60008083601f84011261408b57600080fd5b50813567ffffffffffffffff8111156140a357600080fd5b6020830191508360208285010111156140bb57600080fd5b9250929050565b6000806000806000608086880312156140da57600080fd5b853594506020860135935060408601359250606086013567ffffffffffffffff81111561410657600080fd5b61411288828901614079565b969995985093965092949392505050565b60008060006060848603121561413857600080fd5b833561414381613f68565b9250602084013561415381613f68565b929592945050506040919091013590565b60008060006040848603121561417957600080fd5b83359250602084013567ffffffffffffffff81111561419757600080fd5b6141a386828701614079565b9497909650939450505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060c08201905087825273ffffffffffffffffffffffffffffffffffffffff871660208301528560408301528460608301528360808301526002831061424f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8260a0830152979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156142d6576142d6614260565b604052919050565b600060208083850312156142f157600080fd5b823567ffffffffffffffff8082111561430957600080fd5b818501915085601f83011261431d57600080fd5b81358181111561432f5761432f614260565b8060051b915061434084830161428f565b818152918301840191848101908884111561435a57600080fd5b938501935b838510156143785784358252938501939085019061435f565b98975050505050505050565b80151581146113b357600080fd5b600080604083850312156143a557600080fd5b82356143b081613f68565b915060208301356143c081614384565b809150509250929050565b600080600080608085870312156143e157600080fd5b84356143ec81613f68565b93506020858101356143fd81613f68565b935060408601359250606086013567ffffffffffffffff8082111561442157600080fd5b818801915088601f83011261443557600080fd5b81358181111561444757614447614260565b614477847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161428f565b9150808252898482850101111561448d57600080fd5b808484018584013760008482840101525080935050505092959194509250565b6060815260006144c06060830186613ef2565b73ffffffffffffffffffffffffffffffffffffffff94909416602083015250901515604090910152919050565b6000806040838503121561450057600080fd5b50508035926020909101359150565b6000806000806060858703121561452557600080fd5b843561453081613f68565b9350602085013561454081614384565b9250604085013567ffffffffffffffff81111561455c57600080fd5b61456887828801614079565b95989497509550505050565b6000806040838503121561458757600080fd5b823561459281613f68565b915060208301356143c081613f68565b8481526080602082015260006145bb6080830186613ef2565b905083604083015267ffffffffffffffff8316606083015295945050505050565b600181811c908216806145f057607f821691505b602082108103614629577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156108c0576108c061465e565b601f821115610b1857600081815260208120601f850160051c810160208610156146c75750805b601f850160051c820191505b818110156146e6578281556001016146d3565b505050505050565b815167ffffffffffffffff81111561470857614708614260565b61471c8161471684546145dc565b846146a0565b602080601f83116001811461476f57600084156147395750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556146e6565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156147bc5788860151825594840194600190910190840161479d565b50858210156147f857878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b67ffffffffffffffff83111561482057614820614260565b6148348361482e83546145dc565b836146a0565b6000601f84116001811461488657600085156148505750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b1783556129ba565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156148d557868501358255602094850194600190920191016148b5565b5086821015614910577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036149a0576149a061465e565b5060010190565b818103818111156108c0576108c061465e565b80820281158282048414176108c0576108c061465e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082614a0f57614a0f6149d1565b500490565b60008351614a26818460208801613ece565b835190830190614a3a818360208801613ece565b01949350505050565b600060208284031215614a5557600080fd5b5051919050565b600082614a6b57614a6b6149d1565b500690565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152614aaf6080830184613ef2565b9695505050505050565b600060208284031215614acb57600080fd5b8151611d4b81613e83565b600060208284031215614ae857600080fd5b8151611d4b81614384565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60008251614b34818460208701613ece565b919091019291505056fea2646970667358221220eb9ee4a8a821c5714d2638018376252695b43606710b4c051fa93c056f643b1c64736f6c63430008110033"
};

// src/contracts/ScomAirdropVault.ts
var ScomAirdropVault = class extends import_eth_wallet4.Contract {
  constructor(wallet, address) {
    super(wallet, address, ScomAirdropVault_json_default.abi, ScomAirdropVault_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.name, params.symbol]);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
  }
  decodeApprovalForAllEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      operator: result.operator,
      approved: result.approved,
      _event: event
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseClaimEvent(receipt) {
    return this.parseEvents(receipt, "Claim").map((e) => this.decodeClaimEvent(e));
  }
  decodeClaimEvent(event) {
    let result = event.data;
    return {
      nftId: new import_eth_wallet4.BigNumber(result.nftId),
      amount: new import_eth_wallet4.BigNumber(result.amount),
      totalClaimed: new import_eth_wallet4.BigNumber(result.totalClaimed),
      totalAmount: new import_eth_wallet4.BigNumber(result.totalAmount),
      _event: event
    };
  }
  parseCreateVestingEvent(receipt) {
    return this.parseEvents(receipt, "CreateVesting").map((e) => this.decodeCreateVestingEvent(e));
  }
  decodeCreateVestingEvent(event) {
    let result = event.data;
    return {
      campaignId: new import_eth_wallet4.BigNumber(result.campaignId),
      vestingId: new import_eth_wallet4.BigNumber(result.vestingId),
      recipient: result.recipient,
      amount: new import_eth_wallet4.BigNumber(result.amount),
      startDate: new import_eth_wallet4.BigNumber(result.startDate),
      endDate: new import_eth_wallet4.BigNumber(result.endDate),
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseLockEvent(receipt) {
    return this.parseEvents(receipt, "Lock").map((e) => this.decodeLockEvent(e));
  }
  decodeLockEvent(event) {
    let result = event.data;
    return {
      lockId: new import_eth_wallet4.BigNumber(result.lockId),
      campaignId: new import_eth_wallet4.BigNumber(result.campaignId),
      amount: new import_eth_wallet4.BigNumber(result.amount),
      sender: result.sender,
      _event: event
    };
  }
  parseMintEvent(receipt) {
    return this.parseEvents(receipt, "Mint").map((e) => this.decodeMintEvent(e));
  }
  decodeMintEvent(event) {
    let result = event.data;
    return {
      campaignId: new import_eth_wallet4.BigNumber(result.campaignId),
      nftId: new import_eth_wallet4.BigNumber(result.nftId),
      recipient: result.recipient,
      _event: event
    };
  }
  parseNewCampaignEvent(receipt) {
    return this.parseEvents(receipt, "NewCampaign").map((e) => this.decodeNewCampaignEvent(e));
  }
  decodeNewCampaignEvent(event) {
    let result = event.data;
    return {
      campaignId: new import_eth_wallet4.BigNumber(result.campaignId),
      sender: result.sender,
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseUpdateCampaignEvent(receipt) {
    return this.parseEvents(receipt, "UpdateCampaign").map((e) => this.decodeUpdateCampaignEvent(e));
  }
  decodeUpdateCampaignEvent(event) {
    let result = event.data;
    return {
      campaignId: new import_eth_wallet4.BigNumber(result.campaignId),
      dataUri: result.dataUri,
      sender: result.sender,
      _event: event
    };
  }
  assign() {
    let balanceOf_call = async (owner) => {
      let result = await this.call("balanceOf", [owner]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let campaignClaimed_call = async (param1) => {
      let result = await this.call("campaignClaimed", [import_eth_wallet4.Utils.toString(param1)]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.campaignClaimed = campaignClaimed_call;
    let campaignIdCount_call = async () => {
      let result = await this.call("campaignIdCount");
      return new import_eth_wallet4.BigNumber(result);
    };
    this.campaignIdCount = campaignIdCount_call;
    let campaignInfo_call = async (param1) => {
      let result = await this.call("campaignInfo", [import_eth_wallet4.Utils.toString(param1)]);
      return {
        dataUri: result.dataUri,
        token: result.token,
        ownerFrozen: result.ownerFrozen
      };
    };
    this.campaignInfo = campaignInfo_call;
    let campaignLocked_call = async (param1) => {
      let result = await this.call("campaignLocked", [import_eth_wallet4.Utils.toString(param1)]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.campaignLocked = campaignLocked_call;
    let campaignLocksParams = (params) => [import_eth_wallet4.Utils.toString(params.param1), import_eth_wallet4.Utils.toString(params.param2)];
    let campaignLocks_call = async (params) => {
      let result = await this.call("campaignLocks", campaignLocksParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.campaignLocks = campaignLocks_call;
    let campaignLocksLength_call = async (campaignId) => {
      let result = await this.call("campaignLocksLength", [import_eth_wallet4.Utils.toString(campaignId)]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.campaignLocksLength = campaignLocksLength_call;
    let factory_call = async () => {
      let result = await this.call("factory");
      return result;
    };
    this.factory = factory_call;
    let getApproved_call = async (tokenId) => {
      let result = await this.call("getApproved", [import_eth_wallet4.Utils.toString(tokenId)]);
      return result;
    };
    this.getApproved = getApproved_call;
    let getInfo_call = async (nftId) => {
      let result = await this.call("getInfo", [import_eth_wallet4.Utils.toString(nftId)]);
      return {
        campaignId: new import_eth_wallet4.BigNumber(result.campaignId),
        vestingId: new import_eth_wallet4.BigNumber(result.vestingId),
        recipient: result.recipient,
        token: result.token,
        unclaimedFunds: new import_eth_wallet4.BigNumber(result.unclaimedFunds),
        claimedAmount: new import_eth_wallet4.BigNumber(result.claimedAmount),
        totalAmount: new import_eth_wallet4.BigNumber(result.totalAmount),
        startDate: new import_eth_wallet4.BigNumber(result.startDate),
        endDate: new import_eth_wallet4.BigNumber(result.endDate)
      };
    };
    this.getInfo = getInfo_call;
    let isApprovedForAllParams = (params) => [params.owner, params.operator];
    let isApprovedForAll_call = async (params) => {
      let result = await this.call("isApprovedForAll", isApprovedForAllParams(params));
      return result;
    };
    this.isApprovedForAll = isApprovedForAll_call;
    let isLockIdVerifiedParams = (params) => [params.param1, import_eth_wallet4.Utils.toString(params.param2)];
    let isLockIdVerified_call = async (params) => {
      let result = await this.call("isLockIdVerified", isLockIdVerifiedParams(params));
      return result;
    };
    this.isLockIdVerified = isLockIdVerified_call;
    let isPermitted_call = async (param1) => {
      let result = await this.call("isPermitted", [param1]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.isPermitted = isPermitted_call;
    let locks_call = async (param1) => {
      let result = await this.call("locks", [import_eth_wallet4.Utils.toString(param1)]);
      return {
        vestingId: new import_eth_wallet4.BigNumber(result.vestingId),
        dataUri: result.dataUri,
        root: result.root,
        dateCreated: new import_eth_wallet4.BigNumber(result.dateCreated)
      };
    };
    this.locks = locks_call;
    let locksLength_call = async () => {
      let result = await this.call("locksLength");
      return new import_eth_wallet4.BigNumber(result);
    };
    this.locksLength = locksLength_call;
    let maximumAllowedClaimedFunds_call = async (vestingId) => {
      let result = await this.call("maximumAllowedClaimedFunds", [import_eth_wallet4.Utils.toString(vestingId)]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.maximumAllowedClaimedFunds = maximumAllowedClaimedFunds_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let newOwner_call = async () => {
      let result = await this.call("newOwner");
      return result;
    };
    this.newOwner = newOwner_call;
    let nftIdCount_call = async () => {
      let result = await this.call("nftIdCount");
      return new import_eth_wallet4.BigNumber(result);
    };
    this.nftIdCount = nftIdCount_call;
    let nftVestingId_call = async (param1) => {
      let result = await this.call("nftVestingId", [import_eth_wallet4.Utils.toString(param1)]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.nftVestingId = nftVestingId_call;
    let owner_call = async () => {
      let result = await this.call("owner");
      return result;
    };
    this.owner = owner_call;
    let ownerOf_call = async (tokenId) => {
      let result = await this.call("ownerOf", [import_eth_wallet4.Utils.toString(tokenId)]);
      return result;
    };
    this.ownerOf = ownerOf_call;
    let supportsInterface_call = async (interfaceId) => {
      let result = await this.call("supportsInterface", [interfaceId]);
      return result;
    };
    this.supportsInterface = supportsInterface_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let tokenByIndex_call = async (index) => {
      let result = await this.call("tokenByIndex", [import_eth_wallet4.Utils.toString(index)]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.tokenByIndex = tokenByIndex_call;
    let tokenOfOwnerByIndexParams = (params) => [params.owner, import_eth_wallet4.Utils.toString(params.index)];
    let tokenOfOwnerByIndex_call = async (params) => {
      let result = await this.call("tokenOfOwnerByIndex", tokenOfOwnerByIndexParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call;
    let tokenURI_call = async (tokenId) => {
      let result = await this.call("tokenURI", [import_eth_wallet4.Utils.toString(tokenId)]);
      return result;
    };
    this.tokenURI = tokenURI_call;
    let totalSupply_call = async () => {
      let result = await this.call("totalSupply");
      return new import_eth_wallet4.BigNumber(result);
    };
    this.totalSupply = totalSupply_call;
    let vestingClaimedAmount_call = async (param1) => {
      let result = await this.call("vestingClaimedAmount", [import_eth_wallet4.Utils.toString(param1)]);
      return new import_eth_wallet4.BigNumber(result);
    };
    this.vestingClaimedAmount = vestingClaimedAmount_call;
    let vestingIdCount_call = async () => {
      let result = await this.call("vestingIdCount");
      return new import_eth_wallet4.BigNumber(result);
    };
    this.vestingIdCount = vestingIdCount_call;
    let vestingInfo_call = async (param1) => {
      let result = await this.call("vestingInfo", [import_eth_wallet4.Utils.toString(param1)]);
      return {
        campaignId: new import_eth_wallet4.BigNumber(result.campaignId),
        recipient: result.recipient,
        amount: new import_eth_wallet4.BigNumber(result.amount),
        startDate: new import_eth_wallet4.BigNumber(result.startDate),
        endDate: new import_eth_wallet4.BigNumber(result.endDate),
        status: new import_eth_wallet4.BigNumber(result.status)
      };
    };
    this.vestingInfo = vestingInfo_call;
    let approveParams = (params) => [params.to, import_eth_wallet4.Utils.toString(params.tokenId)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let claim_send = async (id) => {
      let result = await this.send("claim", [import_eth_wallet4.Utils.toString(id)]);
      return result;
    };
    let claim_call = async (id) => {
      let result = await this.call("claim", [import_eth_wallet4.Utils.toString(id)]);
      return;
    };
    this.claim = Object.assign(claim_send, {
      call: claim_call
    });
    let claimMultiple_send = async (ids) => {
      let result = await this.send("claimMultiple", [import_eth_wallet4.Utils.toString(ids)]);
      return result;
    };
    let claimMultiple_call = async (ids) => {
      let result = await this.call("claimMultiple", [import_eth_wallet4.Utils.toString(ids)]);
      return;
    };
    this.claimMultiple = Object.assign(claimMultiple_send, {
      call: claimMultiple_call
    });
    let deny_send = async (user) => {
      let result = await this.send("deny", [user]);
      return result;
    };
    let deny_call = async (user) => {
      let result = await this.call("deny", [user]);
      return;
    };
    this.deny = Object.assign(deny_send, {
      call: deny_call
    });
    let merkleLockParams = (params) => [import_eth_wallet4.Utils.toString(params.campaignId), import_eth_wallet4.Utils.toString(params.amount), import_eth_wallet4.Utils.stringToBytes32(params.merkleRoot), params.dataUri];
    let merkleLock_send = async (params) => {
      let result = await this.send("merkleLock", merkleLockParams(params));
      return result;
    };
    let merkleLock_call = async (params) => {
      let result = await this.call("merkleLock", merkleLockParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.merkleLock = Object.assign(merkleLock_send, {
      call: merkleLock_call
    });
    let newCampaignParams = (params) => [params.token, params.ownerFrozen, params.dataUri];
    let newCampaign_send = async (params) => {
      let result = await this.send("newCampaign", newCampaignParams(params));
      return result;
    };
    let newCampaign_call = async (params) => {
      let result = await this.call("newCampaign", newCampaignParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.newCampaign = Object.assign(newCampaign_send, {
      call: newCampaign_call
    });
    let permit_send = async (user) => {
      let result = await this.send("permit", [user]);
      return result;
    };
    let permit_call = async (user) => {
      let result = await this.call("permit", [user]);
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let safeTransferFromParams = (params) => [params.from, params.to, import_eth_wallet4.Utils.toString(params.tokenId)];
    let safeTransferFrom_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
      call: safeTransferFrom_call
    });
    let safeTransferFrom_1Params = (params) => [params.from, params.to, import_eth_wallet4.Utils.toString(params.tokenId), import_eth_wallet4.Utils.stringToBytes(params.data)];
    let safeTransferFrom_1_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_1_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
      call: safeTransferFrom_1_call
    });
    let setApprovalForAllParams = (params) => [params.operator, params.approved];
    let setApprovalForAll_send = async (params) => {
      let result = await this.send("setApprovalForAll", setApprovalForAllParams(params));
      return result;
    };
    let setApprovalForAll_call = async (params) => {
      let result = await this.call("setApprovalForAll", setApprovalForAllParams(params));
      return;
    };
    this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
      call: setApprovalForAll_call
    });
    let setOwner_send = async (owner) => {
      let result = await this.send("setOwner", [owner]);
      return result;
    };
    let setOwner_call = async (owner) => {
      let result = await this.call("setOwner", [owner]);
      return;
    };
    this.setOwner = Object.assign(setOwner_send, {
      call: setOwner_call
    });
    let takeOwnership_send = async () => {
      let result = await this.send("takeOwnership");
      return result;
    };
    let takeOwnership_call = async () => {
      let result = await this.call("takeOwnership");
      return;
    };
    this.takeOwnership = Object.assign(takeOwnership_send, {
      call: takeOwnership_call
    });
    let transferFromParams = (params) => [params.from, params.to, import_eth_wallet4.Utils.toString(params.tokenId)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
    let transferOwnership_send = async (newOwner) => {
      let result = await this.send("transferOwnership", [newOwner]);
      return result;
    };
    let transferOwnership_call = async (newOwner) => {
      let result = await this.call("transferOwnership", [newOwner]);
      return;
    };
    this.transferOwnership = Object.assign(transferOwnership_send, {
      call: transferOwnership_call
    });
    let updateCampaignParams = (params) => [import_eth_wallet4.Utils.toString(params.campaignId), params.dataUri];
    let updateCampaign_send = async (params) => {
      let result = await this.send("updateCampaign", updateCampaignParams(params));
      return result;
    };
    let updateCampaign_call = async (params) => {
      let result = await this.call("updateCampaign", updateCampaignParams(params));
      return;
    };
    this.updateCampaign = Object.assign(updateCampaign_send, {
      call: updateCampaign_call
    });
    let verifyMerkleLockParams = (params) => [import_eth_wallet4.Utils.toString(params.lockId), import_eth_wallet4.Utils.toString(params.campaignId), import_eth_wallet4.Utils.toString(params.amount), import_eth_wallet4.Utils.toString(params.startDate), import_eth_wallet4.Utils.toString(params.endDate), import_eth_wallet4.Utils.stringToBytes32(params.proof)];
    let verifyMerkleLock_send = async (params) => {
      let result = await this.send("verifyMerkleLock", verifyMerkleLockParams(params));
      return result;
    };
    let verifyMerkleLock_call = async (params) => {
      let result = await this.call("verifyMerkleLock", verifyMerkleLockParams(params));
      return new import_eth_wallet4.BigNumber(result);
    };
    this.verifyMerkleLock = Object.assign(verifyMerkleLock_send, {
      call: verifyMerkleLock_call
    });
    let withdrawFundParams = (params) => [params.token, import_eth_wallet4.Utils.toString(params.amount)];
    let withdrawFund_send = async (params) => {
      let result = await this.send("withdrawFund", withdrawFundParams(params));
      return result;
    };
    let withdrawFund_call = async (params) => {
      let result = await this.call("withdrawFund", withdrawFundParams(params));
      return;
    };
    this.withdrawFund = Object.assign(withdrawFund_send, {
      call: withdrawFund_call
    });
  }
};

// src/contracts/ScomVestingFactory.ts
var import_eth_wallet5 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/ScomVestingFactory.json.ts
var ScomVestingFactory_json_default = {
  "abi": [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "profileId", "type": "uint256" }, { "indexed": false, "internalType": "address[]", "name": "admins", "type": "address[]" }], "name": "NewProfile", "type": "event" },
    { "inputs": [{ "internalType": "address[]", "name": "admins", "type": "address[]" }], "name": "newVestingProfile", "outputs": [{ "internalType": "uint256", "name": "profileId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "profileIdCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "profileVault", "outputs": [{ "internalType": "contract ScomVestingVault", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
  ],
  "bytecode": "608060405234801561001057600080fd5b50614ccc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063203c1a9814610046578063525ee3fa146100a6578063f798b770146100bd575b600080fd5b61007c610054366004610373565b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100af60005481565b60405190815260200161009d565b6100af6100cb36600461038c565b600080600081546100db90610401565b919050819055905060006040516100f190610366565b604080825260129082018190527f53636f6d2056657374696e67205661756c74000000000000000000000000000060608301526080602083018190528201527f53636f6d2d56657374696e672d5661756c74000000000000000000000000000060a082015260c001604051809103906000f080158015610175573d6000803e3d6000fd5b50905060005b83811015610257578173ffffffffffffffffffffffffffffffffffffffff1663a2f55ae58686848181106101b1576101b1610460565b90506020020160208101906101c691906104b8565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401600060405180830381600087803b15801561022c57600080fd5b505af1158015610240573d6000803e3d6000fd5b50505050808061024f90610401565b91505061017b565b506040517f13af403500000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff8216906313af403590602401600060405180830381600087803b1580156102bf57600080fd5b505af11580156102d3573d6000803e3d6000fd5b5050506000838152600160205260409081902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8516179055517f7ba1d39c20b2d92d216600ca5318570e4a6c147f058fdb8c2cb03851997159ea9150610357908490879087906104da565b60405180910390a15092915050565b6147598061053e83390190565b60006020828403121561038557600080fd5b5035919050565b6000806020838503121561039f57600080fd5b823567ffffffffffffffff808211156103b757600080fd5b818501915085601f8301126103cb57600080fd5b8135818111156103da57600080fd5b8660208260051b85010111156103ef57600080fd5b60209290920196919550909350505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610459577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146104b357600080fd5b919050565b6000602082840312156104ca57600080fd5b6104d38261048f565b9392505050565b83815260406020808301829052908201839052600090849060608401835b868110156105315773ffffffffffffffffffffffffffffffffffffffff61051e8561048f565b16825292820192908201906001016104f8565b5097965050505050505056fe60806040523480156200001157600080fd5b506040516200475938038062004759833981016040819052620000349162000148565b600080546001600160a01b031916331790558181600362000056838262000241565b50600462000065828262000241565b5050601080546001600160a01b03191633179055506200030d915050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000ab57600080fd5b81516001600160401b0380821115620000c857620000c862000083565b604051601f8301601f19908116603f01168101908282118183101715620000f357620000f362000083565b816040528381526020925086838588010111156200011057600080fd5b600091505b8382101562000134578582018301518183018401529082019062000115565b600093810190920192909252949350505050565b600080604083850312156200015c57600080fd5b82516001600160401b03808211156200017457600080fd5b620001828683870162000099565b935060208501519150808211156200019957600080fd5b50620001a88582860162000099565b9150509250929050565b600181811c90821680620001c757607f821691505b602082108103620001e857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200023c57600081815260208120601f850160051c81016020861015620002175750805b601f850160051c820191505b81811015620002385782815560010162000223565b5050505b505050565b81516001600160401b038111156200025d576200025d62000083565b62000275816200026e8454620001b2565b84620001ee565b602080601f831160018114620002ad5760008415620002945750858301515b600019600386901b1c1916600185901b17855562000238565b600085815260208120601f198616915b82811015620002de57888601518255948401946001909101908401620002bd565b5085821015620002fd5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61443c806200031d6000396000f3fe608060405234801561001057600080fd5b50600436106102de5760003560e01c806366ffcf5f11610186578063a2f55ae5116100e3578063c87b56dd11610097578063e985e9c511610071578063e985e9c51461071a578063f2fde38b14610763578063f7c8d2211461077657600080fd5b8063c87b56dd146106d4578063d4ee1d90146106e7578063e9217bd11461070757600080fd5b8063b88d4fde116100c8578063b88d4fde1461067f578063bb2238ec14610692578063c45a0155146106b457600080fd5b8063a2f55ae514610659578063b18b9c3b1461066c57600080fd5b80639051cce91161013a57806395d89b411161011f57806395d89b411461062b5780639c52a7f114610633578063a22cb4651461064657600080fd5b80639051cce914610605578063958ddc981461061857600080fd5b80637c4556c11161016b5780637c4556c1146105bc5780638101f2bd146105c55780638da5cb5b146105e557600080fd5b806366ffcf5f1461053a57806370a08231146105a957600080fd5b806329014d2a1161023f5780634a0e835b116101f3578063511aed99116101cd578063511aed9914610516578063605361721461051f5780636352211e1461052757600080fd5b80634a0e835b146104d05780634ca14703146104f05780634f6ccce71461050357600080fd5b8063379607f511610224578063379607f5146104755780633fd8cc4e1461048857806342842e0e146104bd57600080fd5b806329014d2a146104595780632f745c591461046257600080fd5b806313af40351161029657806318160ddd1161027b57806318160ddd146103ce5780631a3cd59a146103d657806323b872dd1461044657600080fd5b806313af40351461039b578063141a9329146103ae57600080fd5b8063081812fc116102c7578063081812fc14610320578063095ea7b3146103585780630b651d2f1461036d57600080fd5b806301ffc9a7146102e357806306fdde031461030b575b600080fd5b6102f66102f1366004613894565b610789565b60405190151581526020015b60405180910390f35b6103136107e5565b604051610302919061391f565b61033361032e366004613932565b610877565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610302565b61036b61036636600461396d565b6108ab565b005b61038d61037b366004613932565b60166020526000908152604090205481565b604051908152602001610302565b61036b6103a9366004613999565b610a3c565b61038d6103bc366004613932565b60156020526000908152604090205481565b600b5461038d565b6103e96103e4366004613932565b610b04565b60408051998a5260208a019890985273ffffffffffffffffffffffffffffffffffffffff96871697890197909752949093166060870152608086019190915260a085015260c084015260e083015261010082015261012001610302565b61036b6104543660046139b6565b610c38565b61038d600d5481565b61038d61047036600461396d565b610cd9565b61036b610483366004613932565b610da8565b6104ab610496366004613999565b60026020526000908152604090205460ff1681565b60405160ff9091168152602001610302565b61036b6104cb3660046139b6565b610db4565b61038d6104de366004613932565b60116020526000908152604090205481565b61036b6104fe366004613a40565b610dcf565b61038d610511366004613932565b610f48565b61038d600e5481565b61036b611006565b610333610535366004613932565b611130565b610597610548366004613932565b601360205260009081526040902080546001820154600283015460038401546004850154600590950154939473ffffffffffffffffffffffffffffffffffffffff909316939192909160ff1686565b60405161030296959493929190613abb565b61038d6105b7366004613999565b6111bc565b61038d600f5481565b61038d6105d3366004613932565b60146020526000908152604090205481565b6000546103339073ffffffffffffffffffffffffffffffffffffffff1681565b61036b610613366004613bba565b61128a565b61038d610626366004613932565b6112cb565b6103136113f4565b61036b610641366004613999565b611403565b61036b610654366004613c6e565b6114aa565b61036b610667366004613999565b6114b9565b61038d61067a366004613ca7565b61155c565b61036b61068d366004613cef565b6116d7565b6106a56106a0366004613932565b61177f565b60405161030293929190613dd1565b6010546103339073ffffffffffffffffffffffffffffffffffffffff1681565b6103136106e2366004613932565b611857565b6001546103339073ffffffffffffffffffffffffffffffffffffffff1681565b61038d610715366004613e11565b6118cb565b6102f6610728366004613e76565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260086020908152604080832093909416825291909152205460ff1690565b61036b610771366004613999565b611b0c565b61036b61078436600461396d565b611ba3565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d630000000000000000000000000000000000000000000000000000000014806107df57506107df82611be8565b92915050565b6060600380546107f490613ea4565b80601f016020809104026020016040519081016040528092919081815260200182805461082090613ea4565b801561086d5780601f106108425761010080835404028352916020019161086d565b820191906000526020600020905b81548152906001019060200180831161085057829003601f168201915b5050505050905090565b600061088282611ccb565b5060009081526007602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60006108b682611130565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610978576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821614806109a157506109a18133610728565b610a2d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161096f565b610a378383611d56565b505050565b60105473ffffffffffffffffffffffffffffffffffffffff163314610abd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4e6f742066726f6d20666163746f727900000000000000000000000000000000604482015260640161096f565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806000806000806000806000610b1b8a611130565b60008b81526014602090815260408083205480845260138352818420825160c0810184528154815260018083015473ffffffffffffffffffffffffffffffffffffffff169582019590955260028201549381019390935260038101546060840152600481015460808401526005810154919d50949b5092939092909160a084019160ff1690811115610baf57610baf613a8c565b6001811115610bc057610bc0613a8c565b9052508051600081815260126020526040902060010154909b5073ffffffffffffffffffffffffffffffffffffffff1697509050610bfd89611e31565b9550601160008a8152602001908152602001600020549450806040015193508060600151925080608001519150509193959799909294969850565b610c423382611e53565b610cce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f766564000000000000000000000000000000000000606482015260840161096f565b610a37838383611f13565b6000610ce4836111bc565b8210610d72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e6473000000000000000000000000000000000000000000606482015260840161096f565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600960209081526040808320938352929052205490565b610db18161207f565b50565b610a37838383604051806020016040528060008152506116d7565b3360009081526002602052604090205460ff16600114610e71576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161096f565b80610ed8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f646174615572692063616e6e6f7420626520656d707479000000000000000000604482015260640161096f565b6000838152601260205260409020610ef1828483613f45565b503373ffffffffffffffffffffffffffffffffffffffff16837f827c032fe6cd1eed9fd542005e6a56d0c5e80bc6e38171ab664069244da148198484604051610f3b92919061405f565b60405180910390a3505050565b6000610f53600b5490565b8210610fe1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e64730000000000000000000000000000000000000000606482015260840161096f565b600b8281548110610ff457610ff46140ac565b90600052602060002001549050919050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146110ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161096f565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526005602052604081205473ffffffffffffffffffffffffffffffffffffffff16806107df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161096f565b600073ffffffffffffffffffffffffffffffffffffffff8216611261576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e65720000000000000000000000000000000000000000000000606482015260840161096f565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526006602052604090205490565b805160005b81811015610a37576112b98382815181106112ac576112ac6140ac565b602002602001015161207f565b806112c38161410a565b91505061128f565b6000818152601360209081526040808320815160c0810183528154815260018083015473ffffffffffffffffffffffffffffffffffffffff169482019490945260028201549281019290925260038101546060830152600481015460808301526005810154849360a084019160ff169081111561134a5761134a613a8c565b600181111561135b5761135b613a8c565b81525050905080606001514210156113765750600092915050565b806060015181608001510361138f576040015192915050565b806080015142106113a4576040015192915050565b60008160600151426113b69190614142565b90506000826060015183608001516113ce9190614142565b9050808284604001516113e19190614155565b6113eb919061419b565b95945050505050565b6060600480546107f490613ea4565b60005473ffffffffffffffffffffffffffffffffffffffff16331461142757600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b6114b5338383612362565b5050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146114dd57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161149f565b3360009081526002602052604081205460ff166001146115fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161096f565b60008681526012602052604090206001015473ffffffffffffffffffffffffffffffffffffffff16611631813387612487565b9450600061164288888888886125d6565b905085601560008a8152602001908152602001600020600082825461166791906141af565b9091555050600f80549350600190600061168183876141af565b909155505060008381526014602052604080822083905551339185918b917f8334f87aeaf76e52b061d93ee968e51fdd3ad53ca04e80271249227997aab3a091a46116cc338461280b565b505095945050505050565b6116e13383611e53565b61176d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f766564000000000000000000000000000000000000606482015260840161096f565b61177984848484612825565b50505050565b60126020526000908152604090208054819061179a90613ea4565b80601f01602080910402602001604051908101604052809291908181526020018280546117c690613ea4565b80156118135780601f106117e857610100808354040283529160200191611813565b820191906000526020600020905b8154815290600101906020018083116117f657829003601f168201915b5050506001909301549192505073ffffffffffffffffffffffffffffffffffffffff81169060ff740100000000000000000000000000000000000000009091041683565b606061186282611ccb565b600061187960408051602081019091526000815290565b9050600081511161189957604051806020016040528060008152506118c4565b806118a3846128c8565b6040516020016118b49291906141c2565b6040516020818303038152906040525b9392505050565b3360009081526002602052604081205460ff1660011461196d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161096f565b816119d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f646174615572692063616e6e6f7420626520656d707479000000000000000000604482015260640161096f565b600d600081546119e39061410a565b91829055506040805160806020601f87018190040282018101909252606081018581529293509182918690869081908501838280828437600092018290525093855250505073ffffffffffffffffffffffffffffffffffffffff8816602080840191909152871515604093840152848252601290522081518190611a6790826141f1565b50602082015160019091018054604093840151151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00000000000000000000000000000000000000000090911673ffffffffffffffffffffffffffffffffffffffff9093169290921791909117905551339082907fec43c2ba7667c935356219eb87401926de2a65b331b1867aeb9b05626677f53b90600090a3949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611b3057600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161149f565b60005473ffffffffffffffffffffffffffffffffffffffff163314611bc757600080fd5b6114b573ffffffffffffffffffffffffffffffffffffffff831633836129fd565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480611c7b57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806107df57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146107df565b60008181526005602052604090205473ffffffffffffffffffffffffffffffffffffffff16610db1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161096f565b60008181526014602090815260408083205480845260139092529091205473ffffffffffffffffffffffffffffffffffffffff84161580611dc1575060008181526012602052604090206001015474010000000000000000000000000000000000000000900460ff16155b611e27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f546f6b656e206f776e65722069732066726f7a656e2100000000000000000000604482015260640161096f565b6117798484612ad1565b600081815260116020526040812054611e49836112cb565b6107df9190614142565b600080611e5f83611130565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611ecd575073ffffffffffffffffffffffffffffffffffffffff80821660009081526008602090815260408083209388168352929052205460ff165b80611f0b57508373ffffffffffffffffffffffffffffffffffffffff16611ef384610877565b73ffffffffffffffffffffffffffffffffffffffff16145b949350505050565b60008181526014602090815260408083205480845260139092529091205473ffffffffffffffffffffffffffffffffffffffff80861690851603611fd9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f43616e6e6f74207472616e7366657220746f207468652073616d65206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161096f565b60008181526012602052604090206001015474010000000000000000000000000000000000000000900460ff161561206d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f546f6b656e206f776e65722069732066726f7a656e2100000000000000000000604482015260640161096f565b612078858585612b71565b5050505050565b6000818152601460205260409020543361209883611130565b73ffffffffffffffffffffffffffffffffffffffff161461213b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f43616e6e6f7420636c61696d2829206f6e206120746f6b656e2062656c6f6e6760448201527f696e6720746f20616e6f74686572206164647265737321000000000000000000606482015260840161096f565b6000612146826112cb565b600083815260116020526040902054909150810361216357505050565b60008281526011602052604081205461217c9083614142565b600084815260116020908152604080832086905560138252808320815160c0810183528154815260018083015473ffffffffffffffffffffffffffffffffffffffff169482019490945260028201549281019290925260038101546060830152600481015460808301526005810154949550929390929160a084019160ff169081111561220b5761220b613a8c565b600181111561221c5761221c613a8c565b905250905060008160a00151600181111561223957612239613a8c565b146122a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e6163746976652076657374696e6700000000000000000000000000000000604482015260640161096f565b600084815260116020526040908190205482820151915187927fa21b52191f39061227a0dd21f4fc770a4a74c59b7c026fb7e3c5ba8e303d21eb926122f8928792909283526020830191909152604082015260600190565b60405180910390a2805160009081526012602052604090206001015473ffffffffffffffffffffffffffffffffffffffff166123358133856129fd565b8151600090815260166020526040812080548592906123559084906141af565b9091555050505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036123f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161096f565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526008602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319101610f3b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156124f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612518919061430b565b905061253c73ffffffffffffffffffffffffffffffffffffffff8516843085612de3565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa1580156125a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125cc919061430b565b611f0b9190614142565b600081831115612668576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f537461727420646174652063616e6e6f74206265206c61746572207468616e2060448201527f656e642064617465000000000000000000000000000000000000000000000000606482015260840161096f565b600e600081546126779061410a565b91905081905590506040518060c001604052808781526020018673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001838152602001600060018111156126d1576126d1613a8c565b90526000828152601360209081526040918290208351815590830151600180830180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90931692909217909155918301516002820155606083015160038201556080830151600482015560a08301516005820180549293919290917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911690838181111561279957612799613a8c565b02179055505060408051838152602081018790529081018590526060810184905273ffffffffffffffffffffffffffffffffffffffff8716915087907f82debb28bd576b13304dd9103c74c7b554c1de8e996c8576dc43dbfca4a1bd0f9060800160405180910390a395945050505050565b6114b5828260405180602001604052806000815250612e41565b612830848484611f13565b61283c84848484612ee4565b611779576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161096f565b60608160000361290b57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115612935578061291f8161410a565b915061292e9050600a8361419b565b915061290f565b60008167ffffffffffffffff81111561295057612950613b3c565b6040519080825280601f01601f19166020018201604052801561297a576020820181803683370190505b5090505b8415611f0b5761298f600183614142565b915061299c600a86614324565b6129a79060306141af565b60f81b8183815181106129bc576129bc6140ac565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506129f6600a8661419b565b945061297e565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a379084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526130d7565b600081815260076020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091558190612b2b82611130565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b8273ffffffffffffffffffffffffffffffffffffffff16612b9182611130565b73ffffffffffffffffffffffffffffffffffffffff1614612c34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e6572000000000000000000000000000000000000000000000000000000606482015260840161096f565b73ffffffffffffffffffffffffffffffffffffffff8216612cd6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161096f565b612ce18383836131e3565b612cec600082611d56565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600660205260408120805460019290612d22908490614142565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152600660205260408120805460019290612d5d9084906141af565b909155505060008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526117799085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401612a4f565b612e4b83836132e9565b612e586000848484612ee4565b610a37576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161096f565b600073ffffffffffffffffffffffffffffffffffffffff84163b156130cc576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290612f5b903390899088908890600401614338565b6020604051808303816000875af1925050508015612fb4575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252612fb191810190614381565b60015b613081573d808015612fe2576040519150601f19603f3d011682016040523d82523d6000602084013e612fe7565b606091505b508051600003613079576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161096f565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050611f0b565b506001949350505050565b6000613139826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166134b79092919063ffffffff16565b805190915015610a375780806020019051810190613157919061439e565b610a37576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161096f565b73ffffffffffffffffffffffffffffffffffffffff831661324b5761324681600b80546000838152600c60205260408120829055600182018355919091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90155565b613288565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146132885761328883826134c6565b73ffffffffffffffffffffffffffffffffffffffff82166132ac57610a378161357d565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610a3757610a37828261362c565b73ffffffffffffffffffffffffffffffffffffffff8216613366576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161096f565b60008181526005602052604090205473ffffffffffffffffffffffffffffffffffffffff16156133f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161096f565b6133fe600083836131e3565b73ffffffffffffffffffffffffffffffffffffffff821660009081526006602052604081208054600192906134349084906141af565b909155505060008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6060611f0b848460008561367d565b600060016134d3846111bc565b6134dd9190614142565b6000838152600a602052604090205490915080821461353d5773ffffffffffffffffffffffffffffffffffffffff841660009081526009602090815260408083208584528252808320548484528184208190558352600a90915290208190555b506000918252600a6020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600981528383209183525290812055565b600b5460009061358f90600190614142565b6000838152600c6020526040812054600b80549394509092849081106135b7576135b76140ac565b9060005260206000200154905080600b83815481106135d8576135d86140ac565b6000918252602080832090910192909255828152600c9091526040808220849055858252812055600b805480613610576136106143bb565b6001900381819060005260206000200160009055905550505050565b6000613637836111bc565b73ffffffffffffffffffffffffffffffffffffffff90931660009081526009602090815260408083208684528252808320859055938252600a9052919091209190915550565b60608247101561370f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161096f565b73ffffffffffffffffffffffffffffffffffffffff85163b61378d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161096f565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516137b691906143ea565b60006040518083038185875af1925050503d80600081146137f3576040519150601f19603f3d011682016040523d82523d6000602084013e6137f8565b606091505b5091509150613808828286613813565b979650505050505050565b606083156138225750816118c4565b8251156138325782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096f919061391f565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610db157600080fd5b6000602082840312156138a657600080fd5b81356118c481613866565b60005b838110156138cc5781810151838201526020016138b4565b50506000910152565b600081518084526138ed8160208601602086016138b1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006118c460208301846138d5565b60006020828403121561394457600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610db157600080fd5b6000806040838503121561398057600080fd5b823561398b8161394b565b946020939093013593505050565b6000602082840312156139ab57600080fd5b81356118c48161394b565b6000806000606084860312156139cb57600080fd5b83356139d68161394b565b925060208401356139e68161394b565b929592945050506040919091013590565b60008083601f840112613a0957600080fd5b50813567ffffffffffffffff811115613a2157600080fd5b602083019150836020828501011115613a3957600080fd5b9250929050565b600080600060408486031215613a5557600080fd5b83359250602084013567ffffffffffffffff811115613a7357600080fd5b613a7f868287016139f7565b9497909650939450505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060c08201905087825273ffffffffffffffffffffffffffffffffffffffff8716602083015285604083015284606083015283608083015260028310613b2b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8260a0830152979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715613bb257613bb2613b3c565b604052919050565b60006020808385031215613bcd57600080fd5b823567ffffffffffffffff80821115613be557600080fd5b818501915085601f830112613bf957600080fd5b813581811115613c0b57613c0b613b3c565b8060051b9150613c1c848301613b6b565b8181529183018401918481019088841115613c3657600080fd5b938501935b83851015613c5457843582529385019390850190613c3b565b98975050505050505050565b8015158114610db157600080fd5b60008060408385031215613c8157600080fd5b8235613c8c8161394b565b91506020830135613c9c81613c60565b809150509250929050565b600080600080600060a08688031215613cbf57600080fd5b853594506020860135613cd18161394b565b94979496505050506040830135926060810135926080909101359150565b60008060008060808587031215613d0557600080fd5b8435613d108161394b565b9350602085810135613d218161394b565b935060408601359250606086013567ffffffffffffffff80821115613d4557600080fd5b818801915088601f830112613d5957600080fd5b813581811115613d6b57613d6b613b3c565b613d9b847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601613b6b565b91508082528984828501011115613db157600080fd5b808484018584013760008482840101525080935050505092959194509250565b606081526000613de460608301866138d5565b73ffffffffffffffffffffffffffffffffffffffff94909416602083015250901515604090910152919050565b60008060008060608587031215613e2757600080fd5b8435613e328161394b565b93506020850135613e4281613c60565b9250604085013567ffffffffffffffff811115613e5e57600080fd5b613e6a878288016139f7565b95989497509550505050565b60008060408385031215613e8957600080fd5b8235613e948161394b565b91506020830135613c9c8161394b565b600181811c90821680613eb857607f821691505b602082108103613ef1577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f821115610a3757600081815260208120601f850160051c81016020861015613f1e5750805b601f850160051c820191505b81811015613f3d57828155600101613f2a565b505050505050565b67ffffffffffffffff831115613f5d57613f5d613b3c565b613f7183613f6b8354613ea4565b83613ef7565b6000601f841160018114613fc35760008515613f8d5750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355612078565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156140125786850135825560209485019460019092019101613ff2565b508682101561404d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361413b5761413b6140db565b5060010190565b818103818111156107df576107df6140db565b80820281158282048414176107df576107df6140db565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826141aa576141aa61416c565b500490565b808201808211156107df576107df6140db565b600083516141d48184602088016138b1565b8351908301906141e88183602088016138b1565b01949350505050565b815167ffffffffffffffff81111561420b5761420b613b3c565b61421f816142198454613ea4565b84613ef7565b602080601f831160018114614272576000841561423c5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555613f3d565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156142bf578886015182559484019460019091019084016142a0565b50858210156142fb57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561431d57600080fd5b5051919050565b6000826143335761433361416c565b500690565b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015261437760808301846138d5565b9695505050505050565b60006020828403121561439357600080fd5b81516118c481613866565b6000602082840312156143b057600080fd5b81516118c481613c60565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600082516143fc8184602087016138b1565b919091019291505056fea26469706673582212204eefe5115e0977fa7f34d3b026f5e89f0107274a18305118e1b30ca0ffd0e47364736f6c63430008110033a264697066735822122076bd9e9463448fa850d2f8156763c24fe7d18d95cf5e8bbc5cc705e3e1f264bd64736f6c63430008110033"
};

// src/contracts/ScomVestingFactory.ts
var ScomVestingFactory = class extends import_eth_wallet5.Contract {
  constructor(wallet, address) {
    super(wallet, address, ScomVestingFactory_json_default.abi, ScomVestingFactory_json_default.bytecode);
    this.assign();
  }
  deploy() {
    return this.__deploy();
  }
  parseNewProfileEvent(receipt) {
    return this.parseEvents(receipt, "NewProfile").map((e) => this.decodeNewProfileEvent(e));
  }
  decodeNewProfileEvent(event) {
    let result = event.data;
    return {
      profileId: new import_eth_wallet5.BigNumber(result.profileId),
      admins: result.admins,
      _event: event
    };
  }
  assign() {
    let profileIdCount_call = async () => {
      let result = await this.call("profileIdCount");
      return new import_eth_wallet5.BigNumber(result);
    };
    this.profileIdCount = profileIdCount_call;
    let profileVault_call = async (param1) => {
      let result = await this.call("profileVault", [import_eth_wallet5.Utils.toString(param1)]);
      return result;
    };
    this.profileVault = profileVault_call;
    let newVestingProfile_send = async (admins) => {
      let result = await this.send("newVestingProfile", [admins]);
      return result;
    };
    let newVestingProfile_call = async (admins) => {
      let result = await this.call("newVestingProfile", [admins]);
      return new import_eth_wallet5.BigNumber(result);
    };
    this.newVestingProfile = Object.assign(newVestingProfile_send, {
      call: newVestingProfile_call
    });
  }
};

// src/contracts/ScomVestingVault.ts
var import_eth_wallet6 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/ScomVestingVault.json.ts
var ScomVestingVault_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "nftId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalClaimed", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalAmount", "type": "uint256" }], "name": "Claim", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "vestingId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "recipient", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "startDate", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "endDate", "type": "uint256" }], "name": "CreateVesting", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "nftId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "recipient", "type": "address" }], "name": "Mint", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "NewCampaign", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "dataUri", "type": "string" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "UpdateCampaign", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "campaignClaimed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "campaignIdCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "campaignInfo", "outputs": [{ "internalType": "string", "name": "dataUri", "type": "string" }, { "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "bool", "name": "ownerFrozen", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "campaignLocked", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }], "name": "claimMultiple", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "getInfo", "outputs": [{ "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "internalType": "uint256", "name": "vestingId", "type": "uint256" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "unclaimedFunds", "type": "uint256" }, { "internalType": "uint256", "name": "claimedAmount", "type": "uint256" }, { "internalType": "uint256", "name": "totalAmount", "type": "uint256" }, { "internalType": "uint256", "name": "startDate", "type": "uint256" }, { "internalType": "uint256", "name": "endDate", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "vestingId", "type": "uint256" }], "name": "maximumAllowedClaimedFunds", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "bool", "name": "ownerFrozen", "type": "bool" }, { "internalType": "string", "name": "dataUri", "type": "string" }], "name": "newCampaign", "outputs": [{ "internalType": "uint256", "name": "campaignId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "startDate", "type": "uint256" }, { "internalType": "uint256", "name": "endDate", "type": "uint256" }], "name": "newLock", "outputs": [{ "internalType": "uint256", "name": "nftId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "nftIdCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftVestingId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner_", "type": "address" }], "name": "setOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "internalType": "string", "name": "dataUri", "type": "string" }], "name": "updateCampaign", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "vestingClaimedAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "vestingIdCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "vestingInfo", "outputs": [{ "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "startDate", "type": "uint256" }, { "internalType": "uint256", "name": "endDate", "type": "uint256" }, { "internalType": "enum ScomVestingVault.VestingStatus", "name": "status", "type": "uint8" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawFund", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60806040523480156200001157600080fd5b506040516200475938038062004759833981016040819052620000349162000148565b600080546001600160a01b031916331790558181600362000056838262000241565b50600462000065828262000241565b5050601080546001600160a01b03191633179055506200030d915050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000ab57600080fd5b81516001600160401b0380821115620000c857620000c862000083565b604051601f8301601f19908116603f01168101908282118183101715620000f357620000f362000083565b816040528381526020925086838588010111156200011057600080fd5b600091505b8382101562000134578582018301518183018401529082019062000115565b600093810190920192909252949350505050565b600080604083850312156200015c57600080fd5b82516001600160401b03808211156200017457600080fd5b620001828683870162000099565b935060208501519150808211156200019957600080fd5b50620001a88582860162000099565b9150509250929050565b600181811c90821680620001c757607f821691505b602082108103620001e857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200023c57600081815260208120601f850160051c81016020861015620002175750805b601f850160051c820191505b81811015620002385782815560010162000223565b5050505b505050565b81516001600160401b038111156200025d576200025d62000083565b62000275816200026e8454620001b2565b84620001ee565b602080601f831160018114620002ad5760008415620002945750858301515b600019600386901b1c1916600185901b17855562000238565b600085815260208120601f198616915b82811015620002de57888601518255948401946001909101908401620002bd565b5085821015620002fd5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61443c806200031d6000396000f3fe608060405234801561001057600080fd5b50600436106102de5760003560e01c806366ffcf5f11610186578063a2f55ae5116100e3578063c87b56dd11610097578063e985e9c511610071578063e985e9c51461071a578063f2fde38b14610763578063f7c8d2211461077657600080fd5b8063c87b56dd146106d4578063d4ee1d90146106e7578063e9217bd11461070757600080fd5b8063b88d4fde116100c8578063b88d4fde1461067f578063bb2238ec14610692578063c45a0155146106b457600080fd5b8063a2f55ae514610659578063b18b9c3b1461066c57600080fd5b80639051cce91161013a57806395d89b411161011f57806395d89b411461062b5780639c52a7f114610633578063a22cb4651461064657600080fd5b80639051cce914610605578063958ddc981461061857600080fd5b80637c4556c11161016b5780637c4556c1146105bc5780638101f2bd146105c55780638da5cb5b146105e557600080fd5b806366ffcf5f1461053a57806370a08231146105a957600080fd5b806329014d2a1161023f5780634a0e835b116101f3578063511aed99116101cd578063511aed9914610516578063605361721461051f5780636352211e1461052757600080fd5b80634a0e835b146104d05780634ca14703146104f05780634f6ccce71461050357600080fd5b8063379607f511610224578063379607f5146104755780633fd8cc4e1461048857806342842e0e146104bd57600080fd5b806329014d2a146104595780632f745c591461046257600080fd5b806313af40351161029657806318160ddd1161027b57806318160ddd146103ce5780631a3cd59a146103d657806323b872dd1461044657600080fd5b806313af40351461039b578063141a9329146103ae57600080fd5b8063081812fc116102c7578063081812fc14610320578063095ea7b3146103585780630b651d2f1461036d57600080fd5b806301ffc9a7146102e357806306fdde031461030b575b600080fd5b6102f66102f1366004613894565b610789565b60405190151581526020015b60405180910390f35b6103136107e5565b604051610302919061391f565b61033361032e366004613932565b610877565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610302565b61036b61036636600461396d565b6108ab565b005b61038d61037b366004613932565b60166020526000908152604090205481565b604051908152602001610302565b61036b6103a9366004613999565b610a3c565b61038d6103bc366004613932565b60156020526000908152604090205481565b600b5461038d565b6103e96103e4366004613932565b610b04565b60408051998a5260208a019890985273ffffffffffffffffffffffffffffffffffffffff96871697890197909752949093166060870152608086019190915260a085015260c084015260e083015261010082015261012001610302565b61036b6104543660046139b6565b610c38565b61038d600d5481565b61038d61047036600461396d565b610cd9565b61036b610483366004613932565b610da8565b6104ab610496366004613999565b60026020526000908152604090205460ff1681565b60405160ff9091168152602001610302565b61036b6104cb3660046139b6565b610db4565b61038d6104de366004613932565b60116020526000908152604090205481565b61036b6104fe366004613a40565b610dcf565b61038d610511366004613932565b610f48565b61038d600e5481565b61036b611006565b610333610535366004613932565b611130565b610597610548366004613932565b601360205260009081526040902080546001820154600283015460038401546004850154600590950154939473ffffffffffffffffffffffffffffffffffffffff909316939192909160ff1686565b60405161030296959493929190613abb565b61038d6105b7366004613999565b6111bc565b61038d600f5481565b61038d6105d3366004613932565b60146020526000908152604090205481565b6000546103339073ffffffffffffffffffffffffffffffffffffffff1681565b61036b610613366004613bba565b61128a565b61038d610626366004613932565b6112cb565b6103136113f4565b61036b610641366004613999565b611403565b61036b610654366004613c6e565b6114aa565b61036b610667366004613999565b6114b9565b61038d61067a366004613ca7565b61155c565b61036b61068d366004613cef565b6116d7565b6106a56106a0366004613932565b61177f565b60405161030293929190613dd1565b6010546103339073ffffffffffffffffffffffffffffffffffffffff1681565b6103136106e2366004613932565b611857565b6001546103339073ffffffffffffffffffffffffffffffffffffffff1681565b61038d610715366004613e11565b6118cb565b6102f6610728366004613e76565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260086020908152604080832093909416825291909152205460ff1690565b61036b610771366004613999565b611b0c565b61036b61078436600461396d565b611ba3565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d630000000000000000000000000000000000000000000000000000000014806107df57506107df82611be8565b92915050565b6060600380546107f490613ea4565b80601f016020809104026020016040519081016040528092919081815260200182805461082090613ea4565b801561086d5780601f106108425761010080835404028352916020019161086d565b820191906000526020600020905b81548152906001019060200180831161085057829003601f168201915b5050505050905090565b600061088282611ccb565b5060009081526007602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60006108b682611130565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610978576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821614806109a157506109a18133610728565b610a2d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161096f565b610a378383611d56565b505050565b60105473ffffffffffffffffffffffffffffffffffffffff163314610abd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4e6f742066726f6d20666163746f727900000000000000000000000000000000604482015260640161096f565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806000806000806000806000610b1b8a611130565b60008b81526014602090815260408083205480845260138352818420825160c0810184528154815260018083015473ffffffffffffffffffffffffffffffffffffffff169582019590955260028201549381019390935260038101546060840152600481015460808401526005810154919d50949b5092939092909160a084019160ff1690811115610baf57610baf613a8c565b6001811115610bc057610bc0613a8c565b9052508051600081815260126020526040902060010154909b5073ffffffffffffffffffffffffffffffffffffffff1697509050610bfd89611e31565b9550601160008a8152602001908152602001600020549450806040015193508060600151925080608001519150509193959799909294969850565b610c423382611e53565b610cce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f766564000000000000000000000000000000000000606482015260840161096f565b610a37838383611f13565b6000610ce4836111bc565b8210610d72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e6473000000000000000000000000000000000000000000606482015260840161096f565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600960209081526040808320938352929052205490565b610db18161207f565b50565b610a37838383604051806020016040528060008152506116d7565b3360009081526002602052604090205460ff16600114610e71576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161096f565b80610ed8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f646174615572692063616e6e6f7420626520656d707479000000000000000000604482015260640161096f565b6000838152601260205260409020610ef1828483613f45565b503373ffffffffffffffffffffffffffffffffffffffff16837f827c032fe6cd1eed9fd542005e6a56d0c5e80bc6e38171ab664069244da148198484604051610f3b92919061405f565b60405180910390a3505050565b6000610f53600b5490565b8210610fe1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e64730000000000000000000000000000000000000000606482015260840161096f565b600b8281548110610ff457610ff46140ac565b90600052602060002001549050919050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146110ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161096f565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526005602052604081205473ffffffffffffffffffffffffffffffffffffffff16806107df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161096f565b600073ffffffffffffffffffffffffffffffffffffffff8216611261576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e65720000000000000000000000000000000000000000000000606482015260840161096f565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526006602052604090205490565b805160005b81811015610a37576112b98382815181106112ac576112ac6140ac565b602002602001015161207f565b806112c38161410a565b91505061128f565b6000818152601360209081526040808320815160c0810183528154815260018083015473ffffffffffffffffffffffffffffffffffffffff169482019490945260028201549281019290925260038101546060830152600481015460808301526005810154849360a084019160ff169081111561134a5761134a613a8c565b600181111561135b5761135b613a8c565b81525050905080606001514210156113765750600092915050565b806060015181608001510361138f576040015192915050565b806080015142106113a4576040015192915050565b60008160600151426113b69190614142565b90506000826060015183608001516113ce9190614142565b9050808284604001516113e19190614155565b6113eb919061419b565b95945050505050565b6060600480546107f490613ea4565b60005473ffffffffffffffffffffffffffffffffffffffff16331461142757600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b6114b5338383612362565b5050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146114dd57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161149f565b3360009081526002602052604081205460ff166001146115fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161096f565b60008681526012602052604090206001015473ffffffffffffffffffffffffffffffffffffffff16611631813387612487565b9450600061164288888888886125d6565b905085601560008a8152602001908152602001600020600082825461166791906141af565b9091555050600f80549350600190600061168183876141af565b909155505060008381526014602052604080822083905551339185918b917f8334f87aeaf76e52b061d93ee968e51fdd3ad53ca04e80271249227997aab3a091a46116cc338461280b565b505095945050505050565b6116e13383611e53565b61176d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f766564000000000000000000000000000000000000606482015260840161096f565b61177984848484612825565b50505050565b60126020526000908152604090208054819061179a90613ea4565b80601f01602080910402602001604051908101604052809291908181526020018280546117c690613ea4565b80156118135780601f106117e857610100808354040283529160200191611813565b820191906000526020600020905b8154815290600101906020018083116117f657829003601f168201915b5050506001909301549192505073ffffffffffffffffffffffffffffffffffffffff81169060ff740100000000000000000000000000000000000000009091041683565b606061186282611ccb565b600061187960408051602081019091526000815290565b9050600081511161189957604051806020016040528060008152506118c4565b806118a3846128c8565b6040516020016118b49291906141c2565b6040516020818303038152906040525b9392505050565b3360009081526002602052604081205460ff1660011461196d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161096f565b816119d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f646174615572692063616e6e6f7420626520656d707479000000000000000000604482015260640161096f565b600d600081546119e39061410a565b91829055506040805160806020601f87018190040282018101909252606081018581529293509182918690869081908501838280828437600092018290525093855250505073ffffffffffffffffffffffffffffffffffffffff8816602080840191909152871515604093840152848252601290522081518190611a6790826141f1565b50602082015160019091018054604093840151151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00000000000000000000000000000000000000000090911673ffffffffffffffffffffffffffffffffffffffff9093169290921791909117905551339082907fec43c2ba7667c935356219eb87401926de2a65b331b1867aeb9b05626677f53b90600090a3949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611b3057600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161149f565b60005473ffffffffffffffffffffffffffffffffffffffff163314611bc757600080fd5b6114b573ffffffffffffffffffffffffffffffffffffffff831633836129fd565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480611c7b57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806107df57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146107df565b60008181526005602052604090205473ffffffffffffffffffffffffffffffffffffffff16610db1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161096f565b60008181526014602090815260408083205480845260139092529091205473ffffffffffffffffffffffffffffffffffffffff84161580611dc1575060008181526012602052604090206001015474010000000000000000000000000000000000000000900460ff16155b611e27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f546f6b656e206f776e65722069732066726f7a656e2100000000000000000000604482015260640161096f565b6117798484612ad1565b600081815260116020526040812054611e49836112cb565b6107df9190614142565b600080611e5f83611130565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611ecd575073ffffffffffffffffffffffffffffffffffffffff80821660009081526008602090815260408083209388168352929052205460ff165b80611f0b57508373ffffffffffffffffffffffffffffffffffffffff16611ef384610877565b73ffffffffffffffffffffffffffffffffffffffff16145b949350505050565b60008181526014602090815260408083205480845260139092529091205473ffffffffffffffffffffffffffffffffffffffff80861690851603611fd9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f43616e6e6f74207472616e7366657220746f207468652073616d65206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161096f565b60008181526012602052604090206001015474010000000000000000000000000000000000000000900460ff161561206d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f546f6b656e206f776e65722069732066726f7a656e2100000000000000000000604482015260640161096f565b612078858585612b71565b5050505050565b6000818152601460205260409020543361209883611130565b73ffffffffffffffffffffffffffffffffffffffff161461213b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f43616e6e6f7420636c61696d2829206f6e206120746f6b656e2062656c6f6e6760448201527f696e6720746f20616e6f74686572206164647265737321000000000000000000606482015260840161096f565b6000612146826112cb565b600083815260116020526040902054909150810361216357505050565b60008281526011602052604081205461217c9083614142565b600084815260116020908152604080832086905560138252808320815160c0810183528154815260018083015473ffffffffffffffffffffffffffffffffffffffff169482019490945260028201549281019290925260038101546060830152600481015460808301526005810154949550929390929160a084019160ff169081111561220b5761220b613a8c565b600181111561221c5761221c613a8c565b905250905060008160a00151600181111561223957612239613a8c565b146122a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e6163746976652076657374696e6700000000000000000000000000000000604482015260640161096f565b600084815260116020526040908190205482820151915187927fa21b52191f39061227a0dd21f4fc770a4a74c59b7c026fb7e3c5ba8e303d21eb926122f8928792909283526020830191909152604082015260600190565b60405180910390a2805160009081526012602052604090206001015473ffffffffffffffffffffffffffffffffffffffff166123358133856129fd565b8151600090815260166020526040812080548592906123559084906141af565b9091555050505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036123f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161096f565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526008602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319101610f3b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156124f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612518919061430b565b905061253c73ffffffffffffffffffffffffffffffffffffffff8516843085612de3565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa1580156125a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125cc919061430b565b611f0b9190614142565b600081831115612668576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f537461727420646174652063616e6e6f74206265206c61746572207468616e2060448201527f656e642064617465000000000000000000000000000000000000000000000000606482015260840161096f565b600e600081546126779061410a565b91905081905590506040518060c001604052808781526020018673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001838152602001600060018111156126d1576126d1613a8c565b90526000828152601360209081526040918290208351815590830151600180830180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff90931692909217909155918301516002820155606083015160038201556080830151600482015560a08301516005820180549293919290917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911690838181111561279957612799613a8c565b02179055505060408051838152602081018790529081018590526060810184905273ffffffffffffffffffffffffffffffffffffffff8716915087907f82debb28bd576b13304dd9103c74c7b554c1de8e996c8576dc43dbfca4a1bd0f9060800160405180910390a395945050505050565b6114b5828260405180602001604052806000815250612e41565b612830848484611f13565b61283c84848484612ee4565b611779576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161096f565b60608160000361290b57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115612935578061291f8161410a565b915061292e9050600a8361419b565b915061290f565b60008167ffffffffffffffff81111561295057612950613b3c565b6040519080825280601f01601f19166020018201604052801561297a576020820181803683370190505b5090505b8415611f0b5761298f600183614142565b915061299c600a86614324565b6129a79060306141af565b60f81b8183815181106129bc576129bc6140ac565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506129f6600a8661419b565b945061297e565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a379084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526130d7565b600081815260076020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091558190612b2b82611130565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b8273ffffffffffffffffffffffffffffffffffffffff16612b9182611130565b73ffffffffffffffffffffffffffffffffffffffff1614612c34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e6572000000000000000000000000000000000000000000000000000000606482015260840161096f565b73ffffffffffffffffffffffffffffffffffffffff8216612cd6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161096f565b612ce18383836131e3565b612cec600082611d56565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600660205260408120805460019290612d22908490614142565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152600660205260408120805460019290612d5d9084906141af565b909155505060008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526117799085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401612a4f565b612e4b83836132e9565b612e586000848484612ee4565b610a37576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161096f565b600073ffffffffffffffffffffffffffffffffffffffff84163b156130cc576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290612f5b903390899088908890600401614338565b6020604051808303816000875af1925050508015612fb4575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252612fb191810190614381565b60015b613081573d808015612fe2576040519150601f19603f3d011682016040523d82523d6000602084013e612fe7565b606091505b508051600003613079576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161096f565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050611f0b565b506001949350505050565b6000613139826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166134b79092919063ffffffff16565b805190915015610a375780806020019051810190613157919061439e565b610a37576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161096f565b73ffffffffffffffffffffffffffffffffffffffff831661324b5761324681600b80546000838152600c60205260408120829055600182018355919091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90155565b613288565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146132885761328883826134c6565b73ffffffffffffffffffffffffffffffffffffffff82166132ac57610a378161357d565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610a3757610a37828261362c565b73ffffffffffffffffffffffffffffffffffffffff8216613366576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161096f565b60008181526005602052604090205473ffffffffffffffffffffffffffffffffffffffff16156133f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161096f565b6133fe600083836131e3565b73ffffffffffffffffffffffffffffffffffffffff821660009081526006602052604081208054600192906134349084906141af565b909155505060008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6060611f0b848460008561367d565b600060016134d3846111bc565b6134dd9190614142565b6000838152600a602052604090205490915080821461353d5773ffffffffffffffffffffffffffffffffffffffff841660009081526009602090815260408083208584528252808320548484528184208190558352600a90915290208190555b506000918252600a6020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600981528383209183525290812055565b600b5460009061358f90600190614142565b6000838152600c6020526040812054600b80549394509092849081106135b7576135b76140ac565b9060005260206000200154905080600b83815481106135d8576135d86140ac565b6000918252602080832090910192909255828152600c9091526040808220849055858252812055600b805480613610576136106143bb565b6001900381819060005260206000200160009055905550505050565b6000613637836111bc565b73ffffffffffffffffffffffffffffffffffffffff90931660009081526009602090815260408083208684528252808320859055938252600a9052919091209190915550565b60608247101561370f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161096f565b73ffffffffffffffffffffffffffffffffffffffff85163b61378d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161096f565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516137b691906143ea565b60006040518083038185875af1925050503d80600081146137f3576040519150601f19603f3d011682016040523d82523d6000602084013e6137f8565b606091505b5091509150613808828286613813565b979650505050505050565b606083156138225750816118c4565b8251156138325782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096f919061391f565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610db157600080fd5b6000602082840312156138a657600080fd5b81356118c481613866565b60005b838110156138cc5781810151838201526020016138b4565b50506000910152565b600081518084526138ed8160208601602086016138b1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006118c460208301846138d5565b60006020828403121561394457600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610db157600080fd5b6000806040838503121561398057600080fd5b823561398b8161394b565b946020939093013593505050565b6000602082840312156139ab57600080fd5b81356118c48161394b565b6000806000606084860312156139cb57600080fd5b83356139d68161394b565b925060208401356139e68161394b565b929592945050506040919091013590565b60008083601f840112613a0957600080fd5b50813567ffffffffffffffff811115613a2157600080fd5b602083019150836020828501011115613a3957600080fd5b9250929050565b600080600060408486031215613a5557600080fd5b83359250602084013567ffffffffffffffff811115613a7357600080fd5b613a7f868287016139f7565b9497909650939450505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060c08201905087825273ffffffffffffffffffffffffffffffffffffffff8716602083015285604083015284606083015283608083015260028310613b2b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8260a0830152979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715613bb257613bb2613b3c565b604052919050565b60006020808385031215613bcd57600080fd5b823567ffffffffffffffff80821115613be557600080fd5b818501915085601f830112613bf957600080fd5b813581811115613c0b57613c0b613b3c565b8060051b9150613c1c848301613b6b565b8181529183018401918481019088841115613c3657600080fd5b938501935b83851015613c5457843582529385019390850190613c3b565b98975050505050505050565b8015158114610db157600080fd5b60008060408385031215613c8157600080fd5b8235613c8c8161394b565b91506020830135613c9c81613c60565b809150509250929050565b600080600080600060a08688031215613cbf57600080fd5b853594506020860135613cd18161394b565b94979496505050506040830135926060810135926080909101359150565b60008060008060808587031215613d0557600080fd5b8435613d108161394b565b9350602085810135613d218161394b565b935060408601359250606086013567ffffffffffffffff80821115613d4557600080fd5b818801915088601f830112613d5957600080fd5b813581811115613d6b57613d6b613b3c565b613d9b847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601613b6b565b91508082528984828501011115613db157600080fd5b808484018584013760008482840101525080935050505092959194509250565b606081526000613de460608301866138d5565b73ffffffffffffffffffffffffffffffffffffffff94909416602083015250901515604090910152919050565b60008060008060608587031215613e2757600080fd5b8435613e328161394b565b93506020850135613e4281613c60565b9250604085013567ffffffffffffffff811115613e5e57600080fd5b613e6a878288016139f7565b95989497509550505050565b60008060408385031215613e8957600080fd5b8235613e948161394b565b91506020830135613c9c8161394b565b600181811c90821680613eb857607f821691505b602082108103613ef1577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f821115610a3757600081815260208120601f850160051c81016020861015613f1e5750805b601f850160051c820191505b81811015613f3d57828155600101613f2a565b505050505050565b67ffffffffffffffff831115613f5d57613f5d613b3c565b613f7183613f6b8354613ea4565b83613ef7565b6000601f841160018114613fc35760008515613f8d5750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355612078565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156140125786850135825560209485019460019092019101613ff2565b508682101561404d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361413b5761413b6140db565b5060010190565b818103818111156107df576107df6140db565b80820281158282048414176107df576107df6140db565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826141aa576141aa61416c565b500490565b808201808211156107df576107df6140db565b600083516141d48184602088016138b1565b8351908301906141e88183602088016138b1565b01949350505050565b815167ffffffffffffffff81111561420b5761420b613b3c565b61421f816142198454613ea4565b84613ef7565b602080601f831160018114614272576000841561423c5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555613f3d565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156142bf578886015182559484019460019091019084016142a0565b50858210156142fb57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561431d57600080fd5b5051919050565b6000826143335761433361416c565b500690565b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015261437760808301846138d5565b9695505050505050565b60006020828403121561439357600080fd5b81516118c481613866565b6000602082840312156143b057600080fd5b81516118c481613c60565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600082516143fc8184602087016138b1565b919091019291505056fea26469706673582212204eefe5115e0977fa7f34d3b026f5e89f0107274a18305118e1b30ca0ffd0e47364736f6c63430008110033"
};

// src/contracts/ScomVestingVault.ts
var ScomVestingVault = class extends import_eth_wallet6.Contract {
  constructor(wallet, address) {
    super(wallet, address, ScomVestingVault_json_default.abi, ScomVestingVault_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this.__deploy([params.name, params.symbol]);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
  }
  decodeApprovalForAllEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      operator: result.operator,
      approved: result.approved,
      _event: event
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseClaimEvent(receipt) {
    return this.parseEvents(receipt, "Claim").map((e) => this.decodeClaimEvent(e));
  }
  decodeClaimEvent(event) {
    let result = event.data;
    return {
      nftId: new import_eth_wallet6.BigNumber(result.nftId),
      amount: new import_eth_wallet6.BigNumber(result.amount),
      totalClaimed: new import_eth_wallet6.BigNumber(result.totalClaimed),
      totalAmount: new import_eth_wallet6.BigNumber(result.totalAmount),
      _event: event
    };
  }
  parseCreateVestingEvent(receipt) {
    return this.parseEvents(receipt, "CreateVesting").map((e) => this.decodeCreateVestingEvent(e));
  }
  decodeCreateVestingEvent(event) {
    let result = event.data;
    return {
      campaignId: new import_eth_wallet6.BigNumber(result.campaignId),
      vestingId: new import_eth_wallet6.BigNumber(result.vestingId),
      recipient: result.recipient,
      amount: new import_eth_wallet6.BigNumber(result.amount),
      startDate: new import_eth_wallet6.BigNumber(result.startDate),
      endDate: new import_eth_wallet6.BigNumber(result.endDate),
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseMintEvent(receipt) {
    return this.parseEvents(receipt, "Mint").map((e) => this.decodeMintEvent(e));
  }
  decodeMintEvent(event) {
    let result = event.data;
    return {
      campaignId: new import_eth_wallet6.BigNumber(result.campaignId),
      nftId: new import_eth_wallet6.BigNumber(result.nftId),
      recipient: result.recipient,
      _event: event
    };
  }
  parseNewCampaignEvent(receipt) {
    return this.parseEvents(receipt, "NewCampaign").map((e) => this.decodeNewCampaignEvent(e));
  }
  decodeNewCampaignEvent(event) {
    let result = event.data;
    return {
      campaignId: new import_eth_wallet6.BigNumber(result.campaignId),
      sender: result.sender,
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseUpdateCampaignEvent(receipt) {
    return this.parseEvents(receipt, "UpdateCampaign").map((e) => this.decodeUpdateCampaignEvent(e));
  }
  decodeUpdateCampaignEvent(event) {
    let result = event.data;
    return {
      campaignId: new import_eth_wallet6.BigNumber(result.campaignId),
      dataUri: result.dataUri,
      sender: result.sender,
      _event: event
    };
  }
  assign() {
    let balanceOf_call = async (owner) => {
      let result = await this.call("balanceOf", [owner]);
      return new import_eth_wallet6.BigNumber(result);
    };
    this.balanceOf = balanceOf_call;
    let campaignClaimed_call = async (param1) => {
      let result = await this.call("campaignClaimed", [import_eth_wallet6.Utils.toString(param1)]);
      return new import_eth_wallet6.BigNumber(result);
    };
    this.campaignClaimed = campaignClaimed_call;
    let campaignIdCount_call = async () => {
      let result = await this.call("campaignIdCount");
      return new import_eth_wallet6.BigNumber(result);
    };
    this.campaignIdCount = campaignIdCount_call;
    let campaignInfo_call = async (param1) => {
      let result = await this.call("campaignInfo", [import_eth_wallet6.Utils.toString(param1)]);
      return {
        dataUri: result.dataUri,
        token: result.token,
        ownerFrozen: result.ownerFrozen
      };
    };
    this.campaignInfo = campaignInfo_call;
    let campaignLocked_call = async (param1) => {
      let result = await this.call("campaignLocked", [import_eth_wallet6.Utils.toString(param1)]);
      return new import_eth_wallet6.BigNumber(result);
    };
    this.campaignLocked = campaignLocked_call;
    let factory_call = async () => {
      let result = await this.call("factory");
      return result;
    };
    this.factory = factory_call;
    let getApproved_call = async (tokenId) => {
      let result = await this.call("getApproved", [import_eth_wallet6.Utils.toString(tokenId)]);
      return result;
    };
    this.getApproved = getApproved_call;
    let getInfo_call = async (nftId) => {
      let result = await this.call("getInfo", [import_eth_wallet6.Utils.toString(nftId)]);
      return {
        campaignId: new import_eth_wallet6.BigNumber(result.campaignId),
        vestingId: new import_eth_wallet6.BigNumber(result.vestingId),
        recipient: result.recipient,
        token: result.token,
        unclaimedFunds: new import_eth_wallet6.BigNumber(result.unclaimedFunds),
        claimedAmount: new import_eth_wallet6.BigNumber(result.claimedAmount),
        totalAmount: new import_eth_wallet6.BigNumber(result.totalAmount),
        startDate: new import_eth_wallet6.BigNumber(result.startDate),
        endDate: new import_eth_wallet6.BigNumber(result.endDate)
      };
    };
    this.getInfo = getInfo_call;
    let isApprovedForAllParams = (params) => [params.owner, params.operator];
    let isApprovedForAll_call = async (params) => {
      let result = await this.call("isApprovedForAll", isApprovedForAllParams(params));
      return result;
    };
    this.isApprovedForAll = isApprovedForAll_call;
    let isPermitted_call = async (param1) => {
      let result = await this.call("isPermitted", [param1]);
      return new import_eth_wallet6.BigNumber(result);
    };
    this.isPermitted = isPermitted_call;
    let maximumAllowedClaimedFunds_call = async (vestingId) => {
      let result = await this.call("maximumAllowedClaimedFunds", [import_eth_wallet6.Utils.toString(vestingId)]);
      return new import_eth_wallet6.BigNumber(result);
    };
    this.maximumAllowedClaimedFunds = maximumAllowedClaimedFunds_call;
    let name_call = async () => {
      let result = await this.call("name");
      return result;
    };
    this.name = name_call;
    let newOwner_call = async () => {
      let result = await this.call("newOwner");
      return result;
    };
    this.newOwner = newOwner_call;
    let nftIdCount_call = async () => {
      let result = await this.call("nftIdCount");
      return new import_eth_wallet6.BigNumber(result);
    };
    this.nftIdCount = nftIdCount_call;
    let nftVestingId_call = async (param1) => {
      let result = await this.call("nftVestingId", [import_eth_wallet6.Utils.toString(param1)]);
      return new import_eth_wallet6.BigNumber(result);
    };
    this.nftVestingId = nftVestingId_call;
    let owner_call = async () => {
      let result = await this.call("owner");
      return result;
    };
    this.owner = owner_call;
    let ownerOf_call = async (tokenId) => {
      let result = await this.call("ownerOf", [import_eth_wallet6.Utils.toString(tokenId)]);
      return result;
    };
    this.ownerOf = ownerOf_call;
    let supportsInterface_call = async (interfaceId) => {
      let result = await this.call("supportsInterface", [interfaceId]);
      return result;
    };
    this.supportsInterface = supportsInterface_call;
    let symbol_call = async () => {
      let result = await this.call("symbol");
      return result;
    };
    this.symbol = symbol_call;
    let tokenByIndex_call = async (index) => {
      let result = await this.call("tokenByIndex", [import_eth_wallet6.Utils.toString(index)]);
      return new import_eth_wallet6.BigNumber(result);
    };
    this.tokenByIndex = tokenByIndex_call;
    let tokenOfOwnerByIndexParams = (params) => [params.owner, import_eth_wallet6.Utils.toString(params.index)];
    let tokenOfOwnerByIndex_call = async (params) => {
      let result = await this.call("tokenOfOwnerByIndex", tokenOfOwnerByIndexParams(params));
      return new import_eth_wallet6.BigNumber(result);
    };
    this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call;
    let tokenURI_call = async (tokenId) => {
      let result = await this.call("tokenURI", [import_eth_wallet6.Utils.toString(tokenId)]);
      return result;
    };
    this.tokenURI = tokenURI_call;
    let totalSupply_call = async () => {
      let result = await this.call("totalSupply");
      return new import_eth_wallet6.BigNumber(result);
    };
    this.totalSupply = totalSupply_call;
    let vestingClaimedAmount_call = async (param1) => {
      let result = await this.call("vestingClaimedAmount", [import_eth_wallet6.Utils.toString(param1)]);
      return new import_eth_wallet6.BigNumber(result);
    };
    this.vestingClaimedAmount = vestingClaimedAmount_call;
    let vestingIdCount_call = async () => {
      let result = await this.call("vestingIdCount");
      return new import_eth_wallet6.BigNumber(result);
    };
    this.vestingIdCount = vestingIdCount_call;
    let vestingInfo_call = async (param1) => {
      let result = await this.call("vestingInfo", [import_eth_wallet6.Utils.toString(param1)]);
      return {
        campaignId: new import_eth_wallet6.BigNumber(result.campaignId),
        recipient: result.recipient,
        amount: new import_eth_wallet6.BigNumber(result.amount),
        startDate: new import_eth_wallet6.BigNumber(result.startDate),
        endDate: new import_eth_wallet6.BigNumber(result.endDate),
        status: new import_eth_wallet6.BigNumber(result.status)
      };
    };
    this.vestingInfo = vestingInfo_call;
    let approveParams = (params) => [params.to, import_eth_wallet6.Utils.toString(params.tokenId)];
    let approve_send = async (params) => {
      let result = await this.send("approve", approveParams(params));
      return result;
    };
    let approve_call = async (params) => {
      let result = await this.call("approve", approveParams(params));
      return;
    };
    this.approve = Object.assign(approve_send, {
      call: approve_call
    });
    let claim_send = async (id) => {
      let result = await this.send("claim", [import_eth_wallet6.Utils.toString(id)]);
      return result;
    };
    let claim_call = async (id) => {
      let result = await this.call("claim", [import_eth_wallet6.Utils.toString(id)]);
      return;
    };
    this.claim = Object.assign(claim_send, {
      call: claim_call
    });
    let claimMultiple_send = async (ids) => {
      let result = await this.send("claimMultiple", [import_eth_wallet6.Utils.toString(ids)]);
      return result;
    };
    let claimMultiple_call = async (ids) => {
      let result = await this.call("claimMultiple", [import_eth_wallet6.Utils.toString(ids)]);
      return;
    };
    this.claimMultiple = Object.assign(claimMultiple_send, {
      call: claimMultiple_call
    });
    let deny_send = async (user) => {
      let result = await this.send("deny", [user]);
      return result;
    };
    let deny_call = async (user) => {
      let result = await this.call("deny", [user]);
      return;
    };
    this.deny = Object.assign(deny_send, {
      call: deny_call
    });
    let newCampaignParams = (params) => [params.token, params.ownerFrozen, params.dataUri];
    let newCampaign_send = async (params) => {
      let result = await this.send("newCampaign", newCampaignParams(params));
      return result;
    };
    let newCampaign_call = async (params) => {
      let result = await this.call("newCampaign", newCampaignParams(params));
      return new import_eth_wallet6.BigNumber(result);
    };
    this.newCampaign = Object.assign(newCampaign_send, {
      call: newCampaign_call
    });
    let newLockParams = (params) => [import_eth_wallet6.Utils.toString(params.campaignId), params.recipient, import_eth_wallet6.Utils.toString(params.amount), import_eth_wallet6.Utils.toString(params.startDate), import_eth_wallet6.Utils.toString(params.endDate)];
    let newLock_send = async (params) => {
      let result = await this.send("newLock", newLockParams(params));
      return result;
    };
    let newLock_call = async (params) => {
      let result = await this.call("newLock", newLockParams(params));
      return new import_eth_wallet6.BigNumber(result);
    };
    this.newLock = Object.assign(newLock_send, {
      call: newLock_call
    });
    let permit_send = async (user) => {
      let result = await this.send("permit", [user]);
      return result;
    };
    let permit_call = async (user) => {
      let result = await this.call("permit", [user]);
      return;
    };
    this.permit = Object.assign(permit_send, {
      call: permit_call
    });
    let safeTransferFromParams = (params) => [params.from, params.to, import_eth_wallet6.Utils.toString(params.tokenId)];
    let safeTransferFrom_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
      call: safeTransferFrom_call
    });
    let safeTransferFrom_1Params = (params) => [params.from, params.to, import_eth_wallet6.Utils.toString(params.tokenId), import_eth_wallet6.Utils.stringToBytes(params.data)];
    let safeTransferFrom_1_send = async (params) => {
      let result = await this.send("safeTransferFrom", safeTransferFromParams(params));
      return result;
    };
    let safeTransferFrom_1_call = async (params) => {
      let result = await this.call("safeTransferFrom", safeTransferFromParams(params));
      return;
    };
    this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
      call: safeTransferFrom_1_call
    });
    let setApprovalForAllParams = (params) => [params.operator, params.approved];
    let setApprovalForAll_send = async (params) => {
      let result = await this.send("setApprovalForAll", setApprovalForAllParams(params));
      return result;
    };
    let setApprovalForAll_call = async (params) => {
      let result = await this.call("setApprovalForAll", setApprovalForAllParams(params));
      return;
    };
    this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
      call: setApprovalForAll_call
    });
    let setOwner_send = async (owner) => {
      let result = await this.send("setOwner", [owner]);
      return result;
    };
    let setOwner_call = async (owner) => {
      let result = await this.call("setOwner", [owner]);
      return;
    };
    this.setOwner = Object.assign(setOwner_send, {
      call: setOwner_call
    });
    let takeOwnership_send = async () => {
      let result = await this.send("takeOwnership");
      return result;
    };
    let takeOwnership_call = async () => {
      let result = await this.call("takeOwnership");
      return;
    };
    this.takeOwnership = Object.assign(takeOwnership_send, {
      call: takeOwnership_call
    });
    let transferFromParams = (params) => [params.from, params.to, import_eth_wallet6.Utils.toString(params.tokenId)];
    let transferFrom_send = async (params) => {
      let result = await this.send("transferFrom", transferFromParams(params));
      return result;
    };
    let transferFrom_call = async (params) => {
      let result = await this.call("transferFrom", transferFromParams(params));
      return;
    };
    this.transferFrom = Object.assign(transferFrom_send, {
      call: transferFrom_call
    });
    let transferOwnership_send = async (newOwner) => {
      let result = await this.send("transferOwnership", [newOwner]);
      return result;
    };
    let transferOwnership_call = async (newOwner) => {
      let result = await this.call("transferOwnership", [newOwner]);
      return;
    };
    this.transferOwnership = Object.assign(transferOwnership_send, {
      call: transferOwnership_call
    });
    let updateCampaignParams = (params) => [import_eth_wallet6.Utils.toString(params.campaignId), params.dataUri];
    let updateCampaign_send = async (params) => {
      let result = await this.send("updateCampaign", updateCampaignParams(params));
      return result;
    };
    let updateCampaign_call = async (params) => {
      let result = await this.call("updateCampaign", updateCampaignParams(params));
      return;
    };
    this.updateCampaign = Object.assign(updateCampaign_send, {
      call: updateCampaign_call
    });
    let withdrawFundParams = (params) => [params.token, import_eth_wallet6.Utils.toString(params.amount)];
    let withdrawFund_send = async (params) => {
      let result = await this.send("withdrawFund", withdrawFundParams(params));
      return result;
    };
    let withdrawFund_call = async (params) => {
      let result = await this.call("withdrawFund", withdrawFundParams(params));
      return;
    };
    this.withdrawFund = Object.assign(withdrawFund_send, {
      call: withdrawFund_call
    });
  }
};

// src/airdrop/index.ts
var airdrop_exports = {};
__export(airdrop_exports, {
  Claimant: () => claimant_exports,
  Locker: () => locker_exports,
  VestingTreeABI: () => VestingTreeABI,
  getCampaignInfoList: () => getCampaignInfoList
});

// src/airdrop/common.ts
var VestingTreeABI = [
  {
    type: "uint256",
    name: "campaignId"
  },
  {
    type: "uint256",
    name: "amount"
  },
  {
    type: "uint256",
    name: "startDate"
  },
  {
    type: "uint256",
    name: "endDate"
  }
];
async function getCampaignInfoList(wallet, contractAddress) {
  let vesting = new ScomAirdropVault(wallet, contractAddress);
  let campaignInfoList = [];
  let campaignIdCount = await vesting.campaignIdCount();
  for (let i = 1; i <= campaignIdCount.toNumber(); i++) {
    let info = await vesting.campaignInfo(i);
    let campaignInfo = __spreadProps(__spreadValues({}, info), {
      id: i
    });
    campaignInfoList.push(campaignInfo);
  }
  return campaignInfoList;
}

// src/airdrop/locker.ts
var locker_exports = {};
__export(locker_exports, {
  doMerkleLock: () => doMerkleLock,
  getMyLocks: () => getMyLocks
});
var import_eth_wallet7 = __toModule(require("@ijstech/eth-wallet"));
async function doMerkleLock(wallet, contractAddress, campaignId, lockRecords, dataUri) {
  let treeData = lockRecords.map((item) => {
    return {
      campaignId,
      account: item.account,
      amount: item.amount,
      startDate: item.startDate,
      endDate: item.endDate
    };
  });
  let totalAmount = lockRecords.reduce((prev, item) => new import_eth_wallet7.BigNumber(prev).plus(item.amount), new import_eth_wallet7.BigNumber(0));
  const vesting = new ScomAirdropVault(wallet, contractAddress);
  let tree = import_eth_wallet7.Utils.generateWhitelistTree(wallet, treeData, VestingTreeABI);
  let receipt = await vesting.merkleLock({
    campaignId,
    amount: totalAmount,
    merkleRoot: tree.root,
    dataUri
  });
  return receipt;
}
async function getMyLocks(wallet, contractAddress, campaignId) {
  const vesting = new ScomAirdropVault(wallet, contractAddress);
  let locks = [];
  let campaignLocksLength = await vesting.campaignLocksLength(campaignId);
  for (let i = 0; i < campaignLocksLength.toNumber(); i++) {
    let lockId = await vesting.campaignLocks({
      param1: campaignId,
      param2: i
    });
    let lock = await vesting.locks(lockId);
    let lockInfo = {
      id: lockId.toNumber(),
      dataUri: lock.dataUri,
      root: lock.root,
      vestingId: lock.vestingId.toNumber(),
      dateCreated: lock.dateCreated.toNumber()
    };
    locks.push(lockInfo);
  }
  return locks;
}

// src/airdrop/claimant.ts
var claimant_exports = {};
__export(claimant_exports, {
  doClaim: () => doClaim,
  doClaimAll: () => doClaimAll,
  doVerifyMerkleLock: () => doVerifyMerkleLock,
  getMyClaims: () => getMyClaims,
  getUnverifiedLockInfo: () => getUnverifiedLockInfo,
  getUnverifiedLockInfoMap: () => getUnverifiedLockInfoMap
});
var import_eth_wallet8 = __toModule(require("@ijstech/eth-wallet"));
async function doVerifyMerkleLock(wallet, contractAddress, lockId, vestingData) {
  const vesting = new ScomAirdropVault(wallet, contractAddress);
  const merkleInfo = await vesting.locks(lockId);
  let proof = import_eth_wallet8.Utils.getWhitelistTreeProof(wallet, merkleInfo.root, vestingData, VestingTreeABI);
  let vestingItem = vestingData.find((v) => v.account == wallet.address);
  if (!vestingItem)
    return null;
  let receipt = await vesting.verifyMerkleLock({
    lockId,
    amount: new import_eth_wallet8.BigNumber(vestingItem.amount),
    startDate: vestingItem.startDate,
    endDate: vestingItem.endDate,
    campaignId: vestingItem.campaignId,
    proof
  });
  return receipt;
}
async function getUnverifiedLockInfo(wallet, contractAddress, campaignId) {
  let unverifiedLockInfoList = [];
  let vesting = new ScomAirdropVault(wallet, contractAddress);
  let locksLength = await vesting.campaignLocksLength(campaignId);
  for (let j = 0; j < locksLength.toNumber(); j++) {
    let lockId = await vesting.campaignLocks({
      param1: campaignId,
      param2: j
    });
    let lockInfoItem = await vesting.locks(lockId);
    let isLockIdVerified = await vesting.isLockIdVerified({
      param1: wallet.address,
      param2: lockId
    });
    if (!isLockIdVerified) {
      let lockInfo = {
        id: lockId.toNumber(),
        dataUri: lockInfoItem.dataUri,
        root: lockInfoItem.root,
        vestingId: lockInfoItem.vestingId.toNumber(),
        dateCreated: lockInfoItem.dateCreated.toNumber()
      };
      unverifiedLockInfoList.push(lockInfo);
    }
  }
  return unverifiedLockInfoList;
}
async function getUnverifiedLockInfoMap(wallet, contractAddress, campaignIds) {
  let unverifiedLockInfoMap = {};
  for (let i = 0; i < campaignIds.length; i++) {
    let campaignId = campaignIds[i];
    unverifiedLockInfoMap[campaignId] = unverifiedLockInfoMap[campaignId] || [];
    let lockInfo = await getUnverifiedLockInfo(wallet, contractAddress, campaignId);
    unverifiedLockInfoMap[campaignId] = lockInfo;
  }
  return unverifiedLockInfoMap;
}
async function getMyClaims(wallet, contractAddress, campaignId) {
  let claimsArr = [];
  try {
    let vesting = new ScomAirdropVault(wallet, contractAddress);
    let nftCount = await vesting.balanceOf(wallet.address);
    for (let i = 0; i < nftCount.toNumber(); i++) {
      let nftId = await vesting.tokenOfOwnerByIndex({
        owner: wallet.address,
        index: i
      });
      let info = await vesting.getInfo(nftId);
      if (campaignId && info.campaignId.toNumber() != campaignId)
        continue;
      let vestingId = info.vestingId;
      let maxClaimedFunds = await vesting.maximumAllowedClaimedFunds(vestingId);
      let claimed = await vesting.vestingClaimedAmount(vestingId);
      let claimable = new import_eth_wallet8.BigNumber(maxClaimedFunds).minus(claimed).toFixed();
      let locked = new import_eth_wallet8.BigNumber(info.totalAmount).minus(claimed).toFixed();
      let vestingStart = info.startDate.toNumber();
      let vestingEnd = info.endDate.toNumber();
      let claimInfo = {
        campaignId: info.campaignId.toNumber(),
        tokenId: nftId.toNumber(),
        vestingId: vestingId.toNumber(),
        claimed: claimed.toFixed(),
        claimable,
        locked,
        vestingStart,
        vestingEnd
      };
      claimsArr.push(claimInfo);
    }
  } catch (err) {
    console.log("err", err);
  }
  return claimsArr;
}
async function doClaim(wallet, contractAddress, id) {
  if (!contractAddress)
    return;
  let vesting = new ScomAirdropVault(wallet, contractAddress);
  let receipt = await vesting.claim(id);
  return receipt;
}
async function doClaimAll(wallet, contractAddress, ids) {
  if (!contractAddress)
    return;
  let vesting = new ScomAirdropVault(wallet, contractAddress);
  let receipt = await vesting.claimMultiple(ids);
  return receipt;
}

})
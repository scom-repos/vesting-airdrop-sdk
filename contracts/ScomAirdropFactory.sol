// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.17;

import {ScomAirdropVault} from "./ScomAirdropVault.sol";

contract ScomAirdropFactory {
    uint256 public profileIdCount;
    mapping(uint256 => ScomAirdropVault) public profileVault; //profileVault[profileId] = ScomAirdropVault

    event NewProfile(uint256 profileId, address[] admins);

    constructor() {
    }  

    function newProfile(address[] calldata admins) external returns (uint256 profileId) {
        profileId = ++profileIdCount;
        ScomAirdropVault vault = new ScomAirdropVault("Scom Airdrop Vault", "Scom-Airdrop-Vault");
        for (uint i = 0; i < admins.length; i++) {
            vault.permit(admins[i]);
        }
        vault.setOwner(msg.sender);
        profileVault[profileId] = vault;
        emit NewProfile(profileId, admins);
    }    
}

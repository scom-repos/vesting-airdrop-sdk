// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.17;

import {ScomVestingVault} from "./ScomVestingVault.sol";

contract ScomVestingFactory {
    uint256 public profileIdCount;
    mapping(uint256 => ScomVestingVault) public profileVault; //profileVault[profileId] = ScomVestingVault

    event NewProfile(uint256 profileId, address[] admins);
    
    constructor() {
    }  

    function newVestingProfile(address[] calldata admins) external returns (uint256 profileId) {
        profileId = ++profileIdCount;
        ScomVestingVault vault = new ScomVestingVault("Scom Vesting Vault", "Scom-Vesting-Vault");
        for (uint i = 0; i < admins.length; i++) {
            vault.permit(admins[i]);
        }
        vault.setOwner(msg.sender);
        profileVault[profileId] = vault;
        emit NewProfile(profileId, admins);
    }    
}

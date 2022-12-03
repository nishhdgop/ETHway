// SPDX-License-Identifier: UNLICENSED
// transaction address : 0x1F7BaA2D899688C2611a488F3D3Fd6Bc61205A1D
pragma solidity ^0.8.10;

import "hardhat/console.sol";

import "./IPUSHCommInterface.sol";

contract Transactions {
    uint256 transactionCount;
    address public EPNS_CHANNEL_ADDRESS =
        0xE49ab5380e332AC3456bB33cf588Db2770536f27;
    address public EPNS_COMM_ADDRESS =
        0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa;
    event Transfer(
        address from,
        address receiver,
        uint amount,
        string message,
        uint256 timestamp
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(
        address payable receiver,
        uint amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCount += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp,
                keyword
            )
        );

        IPUSHCommInterface(EPNS_COMM_ADDRESS).sendNotification(
            EPNS_CHANNEL_ADDRESS,
            0x25cEA86d3309AFA37bEd0412810c5a4d9Ffdb9D7,
            bytes(
                string(
                    // We are passing identity here
                    abi.encodePacked(
                        "0", // this is notification identity
                        "1", // this is payload type
                        "+", // segregator
                        "New Proposal Created", // this is notificaiton title
                        "+", // segregator
                        "Check it out" // notification body
                    )
                )
            )
        );
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}

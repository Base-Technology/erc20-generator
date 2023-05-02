// Array of token names to verify
const hre = require("hardhat");
const { run } = require("hardhat");
const fs = require("fs");

const express = require('express');
const app = express();
const port = 23522;

// Creating a map with string keys and array values
const constructorMap = new Map();
constructorMap["BaseToken"] = ["NameTest", "NT", 18, 1e12, 1e12];
constructorMap["BaseToken_U"] = ["NameTest", "NT", 18, 1e12];
constructorMap["BaseToken_U_A"] = ["NameTest", "NT", 18, 1e12];
constructorMap["BaseToken_T"] = ["NameTest", "NT", 18, 1e12, ethers.constants.AddressZero, 1, 1, 1, 1, 1];
constructorMap["BaseToken_T_A"] = ["NameTest", "NT", 18, 1e12, ethers.constants.AddressZero, 1, 1, 1, 1, 1];
constructorMap["BaseToken_A"] = ["NameTest", "NT", 18, 1e12, 1e12];

// Add headers to allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/verify/:contractAddress/:network', async (req, res) => {
const contractAddress = req.params.contractAddress;
const network = req.params.network;
  // Verify contract function
  async function verifyContract() {
    const date = new Date();
    console.log(`[${date.toLocaleString()}] New Request, contract address: ${contractAddress}`, `Network: ${network}`);
    // Get contract name from token
    const TokenContract = await ethers.getContractFactory("BaseToken", {network: network});
    const contract = await TokenContract.attach(contractAddress);
    const contractName = await contract.getTokenName();

    try {
      await run("verify:verify", {
        address: contractAddress,
        constructorArguments: constructorMap[contractName],
        network: network
      });
      res.send('Contract verified successfully!');
    } catch (e) {
      if (e.message.toLowerCase().includes("already verified")) {
        res.send('Contract already verified!');
      } else {
        res.send(`Error verifying contract! ${e}`);
      }
    }
  }

  // Call verifyContract function and handle errors
  await verifyContract().catch(error => {
    console.error(error);
    res.send('Error verifying contract!');
  });
});

app.listen(port, () => {
  console.log(`[${new Date().toLocaleString()}] Server listening at http://localhost:${port}`);
});




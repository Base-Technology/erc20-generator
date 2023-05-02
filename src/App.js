import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Web3 from "web3";
import BaseToken from "./contracts/artifacts/contracts/BaseToken/BaseToken.sol/BaseToken.json";
import BaseToken_A from "./contracts/artifacts/contracts/BaseToken/BaseToken_A.sol/BaseToken_A.json";
import BaseToken_U from "./contracts/artifacts/contracts/BaseToken/BaseToken_U.sol/BaseToken_U.json";
import BaseToken_U_A from "./contracts/artifacts/contracts/BaseToken/BaseToken_U_A.sol/BaseToken_U_A.json";
import BaseToken_T from "./contracts/artifacts/contracts/BaseToken/BaseToken_T.sol/BaseToken_T.json";
import BaseToken_T_A from "./contracts/artifacts/contracts/BaseToken/BaseToken_T_A.sol/BaseToken_T_A.json";

import { PoseGroup } from "react-pose";
import Instructions from "./Instructions";
import TokenForm from "./TokenForm";
import TokenVerifyForm from "./TokenVerifyForm";
import TokenAirdropForm from "./TokenAirdropForm";
import StatusBox, { Steps } from "./StatusBox";
import styled from "styled-components";
import { API_URL } from "./constants";

const StartButton = styled.button`
  background-image: linear-gradient(to bottom right, green, yellow);
  margin: 1rem;
`;

const web3Options = {
  transactionConfirmationBlocks: 1
};

const getEtherscanURL = networkId => {
  let networkPrefix;
  if (networkId === 1) {
    networkPrefix = "";
  } else if (networkId === 3) {
    networkPrefix = "ropsten.";
  } else if (networkId === 4) {
    networkPrefix = "rinkeby.";
  } else if (networkId === 42) {
    networkPrefix = "kovan.";
  } else {
    return null;
  }

  return {
    getTxURL: transactionHash =>
      `https://${networkPrefix}etherscan.io/tx/${transactionHash}`,
    getAddressURL: address =>
      `https://${networkPrefix}etherscan.io/address/${address}`,
    getTokenURL: address =>
      `https://${networkPrefix}etherscan.io/token/${address}`
  };
};

const App = () => {
  const [web3, setWeb3] = useState();
  const [state, setState] = useState();
  const [defaultAccount, setDefaultAccount] = useState();
  const [etherscanGetter, setEtherscanGetter] = useState();
  const [currentStep, setCurrentStep] = useState(Steps.WAITING);
  const [cancelled, setCancelled] = useState(false);
  const [data, setData] = useState();
  const [transactionHash, setTransactionHash] = useState();
  const [contract, setContract] = useState();

  const initializeWeb3 = async () => {
    try {
      // Ensure accounts are unlocked
      await Web3.givenProvider.enable();
    } catch (err) {
      // User didn't approve access for accounts
      console.log("User has cancelled account access permission");
    }

    const _web3 = new Web3(Web3.givenProvider, null, web3Options);
    const _state = 0;
    const accounts = await _web3.eth.getAccounts();
    setDefaultAccount(accounts[0]);
    const networkId = await _web3.eth.net.getId();
    setEtherscanGetter(getEtherscanURL(networkId));
    setWeb3(_web3);
    setState(_state);
  };

  const initializeWeb3Airdrop = async () => {
    try {
      // Ensure accounts are unlocked
      await Web3.givenProvider.enable();
    } catch (err) {
      // User didn't approve access for accounts
      console.log("User has cancelled account access permission");
    }

    const _web3 = new Web3(Web3.givenProvider, null, web3Options);
    const _state = 1;
    const accounts = await _web3.eth.getAccounts();
    setDefaultAccount(accounts[0]);
    const networkId = await _web3.eth.net.getId();
    setEtherscanGetter(getEtherscanURL(networkId));
    setWeb3(_web3);
    setState(_state);
  };

  const initializeWeb3Verify = async () => {
    try {
      // Ensure accounts are unlocked
      await Web3.givenProvider.enable();
    } catch (err) {
      // User didn't approve access for accounts
      console.log("User has cancelled account access permission");
    }

    const _web3 = new Web3(Web3.givenProvider, null, web3Options);
    const _state = 2;
    const accounts = await _web3.eth.getAccounts();
    setDefaultAccount(accounts[0]);
    const networkId = await _web3.eth.net.getId();
    setEtherscanGetter(getEtherscanURL(networkId));
    setWeb3(_web3);
    setState(_state);
  };

  const handleTokenCreation = async values => {
    setCurrentStep(Steps.DEPLOYING);

    const _data = {
      name: values.tokenName.trim(),
      symbol: values.tokenSymbol.trim(),
      decimals: 18,
      initialSupply: values.initialAmount.toString() + "0".repeat(18),
      ownerAddress: values.initialOwner
    };
    setData(_data);

    const erc20 = new web3.eth.Contract(
      BaseToken_U_A.abi,
      null,
      web3Options
    );

    var args  = [
      _data.name,
      _data.symbol,
      _data.decimals,
      _data.initialSupply
    ]
    var bytecode = BaseToken_U_A.bytecode
    if (!values.airdropSupport){
      bytecode = BaseToken_U.bytecode
    }

    try {
      const contract = await erc20
        .deploy({
          data: bytecode,
          arguments: args
        })
        .send({ from: defaultAccount })
        .on("transactionHash", transactionHash => {
          setTransactionHash(transactionHash);
          setCurrentStep(Steps.BROADCASTING);
        });
      setContract(contract);
      setCurrentStep(Steps.DEPLOYED);
    } catch (err) {
      // User didn't approve contract creation
      setCancelled(true);
      console.log("User has cancelled token creation");
    }
  };

  const handleAirdrop = async values => {
    setCurrentStep(Steps.DEPLOYING);

    const _data = {
      contractAddress: values.contractAddress.trim(),
      addresses: values.airdropData.addresses,
      amounts: values.airdropData.amounts
    };
    setData(_data);

    const erc20 = new web3.eth.Contract(BaseToken_U_A.abi, _data.contractAddress);

    try {
      await erc20.methods.Airdrop(_data.addresses, _data.amounts)
        .send({ from: defaultAccount })
        .on("transactionHash", transactionHash => {
          setTransactionHash(transactionHash);
          setCurrentStep(Steps.BROADCASTING);
        });
      setContract(contract);
      setCurrentStep(Steps.AIRDROPED);
    } catch (err) {
      // User didn't approve contract creation
      setCancelled(true);
      console.log("User has cancelled token creation");
    }
  };

const handleVerify = async values => {
    setCurrentStep(Steps.DEPLOYING);

    const _data = {
      contractAddress: values.contractAddress.trim(),
      network: values.network,
    };
    setData(_data);
    
    fetch(`${API_URL}/${_data.contractAddress}/${_data.network}`)
    .then(response => response.text())
    .then(data => {
        setCurrentStep(Steps.VERIFIED);
    })
    .catch(error => {
      alert("An error occurred. Please try again later." + error);
    });
  };



  const lastRef = useRef(null);
  useEffect(() => {
    if (lastRef.current) {
      lastRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });
// Initialize a map with key as state and value as TokenForm component
const stateToTokenFormMap = new Map([
  [0, <TokenForm key="form" onSubmit={handleTokenCreation} disabled={currentStep > Steps.WAITING} />],
  [1, <TokenAirdropForm key="airdropForm" onSubmit={handleAirdrop} disabled={currentStep > Steps.WAITING} />],
  [2, <TokenVerifyForm key="verifyForm" onSubmit={handleVerify} disabled={currentStep > Steps.WAITING} />]
]);

const selectedComponent = stateToTokenFormMap.get(state);

return (
  <div className="App">
    <header className="App-header">
      <h1>Base Token Hub</h1>
      <Instructions key="info" />
      {web3 ? selectedComponent : (
          <div>
          <StartButton key="begin" onClick={initializeWeb3}>
            Create!
          </StartButton>
          <StartButton key="airdrop" onClick={initializeWeb3Airdrop}>
            Airdrop!
          </StartButton>
          <StartButton key="verify" onClick={initializeWeb3Verify}>
            Verify!
          </StartButton>
          </div>
        )
        }
        <PoseGroup>
          {currentStep >= Steps.DEPLOYING && (
            <React.Fragment key="status">
              <StatusBox
                currentStep={currentStep}
                cancelled={cancelled}
                transactionHash={transactionHash}
                etherscanGetter={etherscanGetter}
                contractAddress={contract && contract.options.address}
              />
              <div ref={lastRef} />
            </React.Fragment>
          )}
        </PoseGroup>
      </header>
      <hr />
    </div>
  );
};

export default App;
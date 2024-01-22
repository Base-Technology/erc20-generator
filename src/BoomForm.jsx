import React, { useState } from 'react';
import { ethers } from 'ethers';
import { saveAs } from 'file-saver';

const SimpleForm = () => {
  const [addressCount, setAddressCount] = useState('');
  const [totalTokens, setTotalTokens] = useState('');

  const generateRandomDistribution = (count, total) => {
    let amounts = [];
    let sum = 0;

    // 生成随机数
    for (let i = 0; i < count; i++) {
      let amount = Math.random();
      amounts.push(amount);
      sum += amount;
    }

    // 调整随机数，使其总和等于totalTokens，并取整
    return amounts.map(amount => Math.floor((amount / sum) * total));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 异步处理生成地址和私钥
    const generateAddresses = async () => {
      const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
      const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic);
      const tokenAmounts = generateRandomDistribution(parseInt(addressCount), parseFloat(totalTokens));

      let csvContent = 'Mnemonic,Private Key,Address,Token Amount\r\n';
      for (let i = 0; i < addressCount; i++) {
        const derivedNode = hdNode.derivePath(`m/44'/60'/0'/0/${i}`);
        const privateKey = derivedNode.privateKey;
        const address = derivedNode.address;
        const tokenAmount = tokenAmounts[i]; // 整数代币数量

        csvContent += `${mnemonic},${privateKey},${address},${tokenAmount}\r\n`;
      }

      return csvContent;
    };

    try {
      const csvContent = await generateAddresses();
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'addresses.csv');
    } catch (error) {
      console.error('Error generating addresses:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Address Count:
        <input
          type="number"
          value={addressCount}
          onChange={(e) => setAddressCount(e.target.value)}
        />
      </label>
      <label>
        Total Tokens:
        <input
          type="number"
          value={totalTokens}
          onChange={(e) => setTotalTokens(e.target.value)}
        />
      </label>
      <button type="submit">Generate CSV</button>
    </form>
  );
};

export default SimpleForm;
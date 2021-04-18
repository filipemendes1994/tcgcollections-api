require('dotenv').config();
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const contract = require('../artifacts/contracts/MyNFT.sol/MyNFT.json');

const { API_URL, PRIVATE_KEY, PUBLIC_KEY } = process.env;

const web3 = createAlchemyWeb3(API_URL);

const contractAddress = '0x7a0491ea0324e0b0d820bd47273da2a4d2c0ba82';
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

const mintNFT = async () => {
  const tokenURI =
    'https://gateway.pinata.cloud/ipfs/Qmb4ri8trtw5GTDx1xJVF9szve6ecNsECpURiqUF749XjC';
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); // get latest nonce

  // the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce,
    gas: 500000,
    data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);

  return new Promise((resolve, reject) => {
    signPromise
      .then((signedTx) => {
        web3.eth.sendSignedTransaction(signedTx.rawTransaction, (err, hash) => {
          if (!err) {
            resolve(hash);
            console.log(
              'The hash of your transaction is: ',
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            reject();
            console.log(
              'Something went wrong when submitting your transaction:',
              err
            );
          }
        });
      })
      .catch((err) => {
        reject();
        console.log(' Promise failed:', err);
      });
  });
};

// mintNFT(
//   'https://gateway.pinata.cloud/ipfs/Qmb4ri8trtw5GTDx1xJVF9szve6ecNsECpURiqUF749XjC'
// ).then((hash) => console.log(hash));

module.exports = () => mintNFT();

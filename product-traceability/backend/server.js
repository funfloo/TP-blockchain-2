const express = require('express');
const bodyParser = require('body-parser');
const Web3 = require('web3');

const app = express();
const port = 3000;

// Utiliser Web3 pour se connecter à MetaMask
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

// Smart contract ABI and address
const contractABI = [
    
        {
         "inputs": [
          {
           "internalType": "address",
           "name": "participant",
           "type": "address"
          }
         ],
         "name": "addToWhitelist",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
        },
        {
         "inputs": [
          {
           "internalType": "string",
           "name": "manufacturer",
           "type": "string"
          },
          {
           "internalType": "uint256",
           "name": "lotNumber",
           "type": "uint256"
          },
          {
           "internalType": "string",
           "name": "productName",
           "type": "string"
          },
          {
           "internalType": "string",
           "name": "lotId",
           "type": "string"
          },
          {
           "internalType": "uint256",
           "name": "totalProducts",
           "type": "uint256"
          },
          {
           "internalType": "uint256",
           "name": "purchaseDate",
           "type": "uint256"
          }
         ],
         "name": "createProduct",
         "outputs": [
          {
           "internalType": "uint256",
           "name": "",
           "type": "uint256"
          }
         ],
         "stateMutability": "nonpayable",
         "type": "function"
        },
        {
         "inputs": [
          {
           "internalType": "address",
           "name": "participant",
           "type": "address"
          }
         ],
         "name": "removeFromWhitelist",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
        },
        {
         "inputs": [],
         "stateMutability": "nonpayable",
         "type": "constructor"
        },
        {
         "anonymous": false,
         "inputs": [
          {
           "indexed": false,
           "internalType": "uint256",
           "name": "productId",
           "type": "uint256"
          },
          {
           "indexed": true,
           "internalType": "address",
           "name": "from",
           "type": "address"
          },
          {
           "indexed": true,
           "internalType": "address",
           "name": "to",
           "type": "address"
          }
         ],
         "name": "OwnershipTransferred",
         "type": "event"
        },
        {
         "anonymous": false,
         "inputs": [
          {
           "indexed": false,
           "internalType": "uint256",
           "name": "productId",
           "type": "uint256"
          },
          {
           "indexed": true,
           "internalType": "address",
           "name": "owner",
           "type": "address"
          }
         ],
         "name": "ProductCreated",
         "type": "event"
        },
        {
         "inputs": [
          {
           "internalType": "uint256",
           "name": "productId",
           "type": "uint256"
          },
          {
           "internalType": "address",
           "name": "newOwner",
           "type": "address"
          }
         ],
         "name": "transferOwnership",
         "outputs": [],
         "stateMutability": "nonpayable",
         "type": "function"
        },
        {
         "anonymous": false,
         "inputs": [
          {
           "indexed": true,
           "internalType": "address",
           "name": "participant",
           "type": "address"
          },
          {
           "indexed": false,
           "internalType": "bool",
           "name": "isAdded",
           "type": "bool"
          }
         ],
         "name": "WhitelistUpdated",
         "type": "event"
        },
        {
         "inputs": [
          {
           "internalType": "uint256",
           "name": "productId",
           "type": "uint256"
          }
         ],
         "name": "getProduct",
         "outputs": [
          {
           "components": [
            {
             "internalType": "string",
             "name": "manufacturer",
             "type": "string"
            },
            {
             "internalType": "uint256",
             "name": "lotNumber",
             "type": "uint256"
            },
            {
             "internalType": "string",
             "name": "productName",
             "type": "string"
            },
            {
             "internalType": "string",
             "name": "lotId",
             "type": "string"
            },
            {
             "internalType": "uint256",
             "name": "totalProducts",
             "type": "uint256"
            },
            {
             "internalType": "address",
             "name": "currentOwner",
             "type": "address"
            },
            {
             "internalType": "uint256",
             "name": "purchaseDate",
             "type": "uint256"
            }
           ],
           "internalType": "struct ProductTraceability.Product",
           "name": "",
           "type": "tuple"
          }
         ],
         "stateMutability": "view",
         "type": "function"
        },
        {
         "inputs": [],
         "name": "owner",
         "outputs": [
          {
           "internalType": "address",
           "name": "",
           "type": "address"
          }
         ],
         "stateMutability": "view",
         "type": "function"
        },
        {
         "inputs": [],
         "name": "productCount",
         "outputs": [
          {
           "internalType": "uint256",
           "name": "",
           "type": "uint256"
          }
         ],
         "stateMutability": "view",
         "type": "function"
        },
        {
         "inputs": [
          {
           "internalType": "uint256",
           "name": "",
           "type": "uint256"
          }
         ],
         "name": "products",
         "outputs": [
          {
           "internalType": "string",
           "name": "manufacturer",
           "type": "string"
          },
          {
           "internalType": "uint256",
           "name": "lotNumber",
           "type": "uint256"
          },
          {
           "internalType": "string",
           "name": "productName",
           "type": "string"
          },
          {
           "internalType": "string",
           "name": "lotId",
           "type": "string"
          },
          {
           "internalType": "uint256",
           "name": "totalProducts",
           "type": "uint256"
          },
          {
           "internalType": "address",
           "name": "currentOwner",
           "type": "address"
          },
          {
           "internalType": "uint256",
           "name": "purchaseDate",
           "type": "uint256"
          }
         ],
         "stateMutability": "view",
         "type": "function"
        },
        {
         "inputs": [
          {
           "internalType": "address",
           "name": "",
           "type": "address"
          }
         ],
         "name": "whitelist",
         "outputs": [
          {
           "internalType": "bool",
           "name": "",
           "type": "bool"
          }
         ],
         "stateMutability": "view",
         "type": "function"
        }
       
];
const contractAddress = '0xa880168E04D16fE368Dc05578394d5eb5b321b65';

const contract = new web3.eth.Contract(contractABI, contractAddress);

app.use(bodyParser.json());

// Endpoint pour ajouter un produit
app.post('/createProduct', async (req, res) => {
    const { manufacturer, lotNumber, productName, lotId, totalProducts, purchaseDate } = req.body;
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.createProduct(manufacturer, lotNumber, productName, lotId, totalProducts, purchaseDate).send({ from: accounts[0] });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint pour transférer la propriété d'un produit
app.post('/transferOwnership', async (req, res) => {
    const { productId, newOwner } = req.body;
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.transferOwnership(productId, newOwner).send({ from: accounts[0] });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint pour obtenir les détails d'un produit
app.get('/getProduct/:productId', async (req, res) => {
    const { productId } = req.params;
    try {
        const result = await contract.methods.getProduct(productId).call();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

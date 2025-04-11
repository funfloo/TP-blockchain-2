const contractAddress = '0xa880168E04D16fE368Dc05578394d5eb5b321b65';
const abi = [
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

let web3;
let contract;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        contract = new web3.eth.Contract(abi, contractAddress);
    } else {
        alert('Please install MetaMask!');
    }
});

async function createProduct() {
    const manufacturer = document.getElementById('manufacturer').value;
    const lotNumber = document.getElementById('lotNumber').value;
    const productName = document.getElementById('productName').value;
    const lotId = document.getElementById('lotId').value;
    const totalProducts = document.getElementById('totalProducts').value;
    const purchaseDate = document.getElementById('purchaseDate').value;

    const accounts = await web3.eth.getAccounts();
    await contract.methods.createProduct(manufacturer, lotNumber, productName, lotId, totalProducts, purchaseDate).send({ from: accounts[0] });
    alert('Product created successfully!');
}

async function getProduct() {
    const productId = document.getElementById('productId').value;
    const product = await contract.methods.getProduct(productId).call();
    document.getElementById('product-details').innerHTML = `
        <p>Manufacturer: ${product.manufacturer}</p>
        <p>Lot Number: ${product.lotNumber}</p>
        <p>Product Name: ${product.productName}</p>
        <p>Lot ID: ${product.lotId}</p>
        <p>Total Products: ${product.totalProducts}</p>
        <p>Current Owner: ${product.currentOwner}</p>
        <p>Purchase Date: ${new Date(product.purchaseDate * 1000).toLocaleString()}</p>
    `;
}

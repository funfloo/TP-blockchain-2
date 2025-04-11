const express = require('express');
const bodyParser = require('body-parser');
const Web3 = require('web3');

const app = express();
const port = 3000;

// Connect to Ethereum node using the correct method
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

// Smart contract ABI and address
const contractABI = [/* ABI du contrat */];
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

const contract = new web3.eth.Contract(contractABI, contractAddress);

app.use(bodyParser.json());

// Endpoint pour ajouter un produit
app.post('/createProduct', async (req, res) => {
    const { manufacturer, lotNumber, productName, lotId, totalProducts, purchaseDate, from } = req.body;
    try {
        const result = await contract.methods.createProduct(manufacturer, lotNumber, productName, lotId, totalProducts, purchaseDate).send({ from });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint pour transférer la propriété d'un produit
app.post('/transferOwnership', async (req, res) => {
    const { productId, newOwner, from } = req.body;
    try {
        const result = await contract.methods.transferOwnership(productId, newOwner).send({ from });
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

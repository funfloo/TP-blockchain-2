// Vérifiez si MetaMask est installé
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} else {
    alert('Please install MetaMask to use this dApp!');
}

const web3 = new Web3(window.ethereum);

// Demande à MetaMask de connecter l'utilisateur
async function connectMetaMask() {
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        console.log("Connected account: ", account);
        return account;
    } catch (error) {
        console.error("Error connecting to MetaMask: ", error);
    }
}

// ABI et adresse du contrat
const contractABI = [
    // Collez ici l'ABI générée
];
const contractAddress = '0xa880168E04D16fE368Dc05578394d5eb5b321b65';

const contract = new web3.eth.Contract(contractABI, contractAddress);

document.getElementById('createProductForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const account = await connectMetaMask();
    const { manufacturer, lotNumber, productName, lotId, totalProducts, purchaseDate } = {
        manufacturer: document.getElementById('manufacturer').value,
        lotNumber: document.getElementById('lotNumber').value,
        productName: document.getElementById('productName').value,
        lotId: document.getElementById('lotId').value,
        totalProducts: document.getElementById('totalProducts').value,
        purchaseDate: document.getElementById('purchaseDate').value,
    };

    try {
        const result = await contract.methods.createProduct(manufacturer, lotNumber, productName, lotId, totalProducts, purchaseDate).send({ from: account });
        console.log(result);
    } catch (error) {
        console.error(error);
    }
});

document.getElementById('transferOwnershipForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const account = await connectMetaMask();
    const productId = document.getElementById('productId').value;
    const newOwner = document.getElementById('newOwner').value;

    try {
        const result = await contract.methods.transferOwnership(productId, newOwner).send({ from: account });
        console.log(result);
    } catch (error) {
        console.error(error);
    }
});

document.getElementById('getProductForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const productId = document.getElementById('productIdGet').value;

    try {
        const result = await contract.methods.getProduct(productId).call();
        document.getElementById('productDetails').innerText = JSON.stringify(result, null, 2);
    } catch (error) {
        console.error(error);
    }
});

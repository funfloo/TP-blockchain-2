const contractAddress = '0xa880168E04D16fE368Dc05578394d5eb5b321b65';
const abi = [
    // Add your contract ABI here
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

document.getElementById('createProductForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const manufacturer = document.getElementById('manufacturer').value;
    const lotNumber = document.getElementById('lotNumber').value;
    const productName = document.getElementById('productName').value;
    const lotId = document.getElementById('lotId').value;
    const totalProducts = document.getElementById('totalProducts').value;
    const purchaseDate = document.getElementById('purchaseDate').value;
    const from = document.getElementById('from').value;

    const response = await fetch('http://localhost:3000/createProduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ manufacturer, lotNumber, productName, lotId, totalProducts, purchaseDate, from })
    });

    const result = await response.json();
    console.log(result);
});

document.getElementById('transferOwnershipForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const productId = document.getElementById('productId').value;
    const newOwner = document.getElementById('newOwner').value;
    const from = document.getElementById('fromTransfer').value;

    const response = await fetch('http://localhost:3000/transferOwnership', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId, newOwner, from })
    });

    const result = await response.json();
    console.log(result);
});

document.getElementById('getProductForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const productId = document.getElementById('productIdGet').value;

    const response = await fetch(`http://localhost:3000/getProduct/${productId}`);
    const result = await response.json();
    document.getElementById('productDetails').innerText = JSON.stringify(result, null, 2);
});

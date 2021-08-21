let extMemoryCost = document.getElementById('extra-memory-cost');
let extStorageCost = document.getElementById('extra-storage-cost');
let deliveryCost = document.getElementById('delivery-cost');
let bestPrice = document.getElementById('best-price');

let macPrice = Number(bestPrice.innerText);
let memoryPrice = Number(extMemoryCost.innerText);
let ssdPrice = Number(extStorageCost.innerText);
let deliveryPrice = Number(deliveryCost.innerText);
let totalAmount = macPrice + memoryPrice + ssdPrice + deliveryPrice;




// making best price string to integer

let bestPriceNumber = bestPrice.innerText;
bestPriceNumber = parseFloat(1299);
totalPrice();


// memory cost function

document.getElementById('default-memory').addEventListener('click', function () {
    extMemoryCost.innerText = 0;
    extMemoryNumber = parseInt(extMemoryCost);
    totalPrice();
})
document.getElementById('memory16').addEventListener('click', function () {
    extMemoryCost.innerText = 180;
    extMemoryNumber = parseInt(extMemoryCost);
    totalPrice();
})

// extra storage cost function
document.getElementById('default-storage-btn').addEventListener('click', function () {
    extStorageCost.innerText = 0;
    extStorageNumber = parseInt(extStorageCost.innerText);
    totalPrice();
})
document.getElementById('second-ssd').addEventListener('click', function () {
    extStorageCost.innerText = 100;
    extStorageNumber = parseInt(extStorageCost.innerText);
    totalPrice();
    // return extStorageNumber;
})
document.getElementById('third-ssd').addEventListener('click', function () {
    extStorageCost.innerText = 180;
    extStorageNumber = parseInt(extStorageCost.innerText);
    totalPrice();
})


// delivery cost function
document.getElementById('regular-shipping').addEventListener('click', function () {
    deliveryCost.innerText = 0;
    deliveryCostNumber = parseInt(deliveryCost.innerText);
    totalPrice();
})
document.getElementById('urgent-shipping').addEventListener('click', function () {
    deliveryCost.innerText = 20;
    deliveryCostNumber = parseInt(deliveryCost.innerText);
    totalPrice();
})


// function for total and
function totalPrice() {
    macPrice = Number(bestPrice.innerText);
    memoryPrice = Number(extMemoryCost.innerText);
    ssdPrice = Number(extStorageCost.innerText);
    deliveryPrice = Number(deliveryCost.innerText);
    totalAmount = macPrice + memoryPrice + ssdPrice + deliveryPrice;
    document.getElementById('total-price').innerText = Number(totalAmount);
    document.getElementById('all-total').innerText = Number(totalAmount);
}


// promo code function
function apply(){
    const applyInput = document.getElementById('promo-input').value;
    if (applyInput == 'stevekaku') {
        
        document.getElementById('all-total').innerText = Number(totalAmount - (totalAmount * 20 / 100));
        document.getElementById('promo-input').value = ' ';
    }
    else {
        alert('Invalid promo code');
        document.getElementById('promo-input').value = ' ';
        location.reload();
    }
}

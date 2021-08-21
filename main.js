// making best price string to integer
let bestPrice = document.getElementById('best-price');
let bestPriceNumber = bestPrice.innerText;
bestPriceNumber = parseFloat(1299);


// memory cost fucntion

document.getElementById('default-memory').addEventListener('click', function () {
    let extMemory = document.getElementById('extra-memory-cost')
    extMemory.innerText = 0;
    extMemoryNumber = parseInt(extMemory.innerText);
    return extMemoryNumber;
})
document.getElementById('memory16').addEventListener('click', function () {
    let extMemory = document.getElementById('extra-memory-cost')
    extMemory.innerText = 180;
    extMemoryNumber = parseInt(extMemory.innerText);
    return extMemoryNumber;
})

// extra storage cost function
document.getElementById('default-storage-btn').addEventListener('click', function () {
    let extMemory = document.getElementById('extra-storage-cost')
    extMemory.innerText = 0;
    extMemoryNumber = parseInt(extMemory.innerText);
    return extMemoryNumber;
})
document.getElementById('second-ssd').addEventListener('click', function () {
    let extMemory = document.getElementById('extra-storage-cost')
    extMemory.innerText = 100;
    extMemoryNumber = parseInt(extMemory.innerText);
    return extMemoryNumber;
})
document.getElementById('third-ssd').addEventListener('click', function () {
    let extMemory = document.getElementById('extra-storage-cost')
    extMemory.innerText = 180;
    extMemoryNumber = parseInt(extMemory.innerText);
    return extMemoryNumber;
})


// delivery cost function
document.getElementById('regular-shipping').addEventListener('click', function () {
    let extMemory = document.getElementById('delivery-cost')
    extMemory.innerText = 0;
    extMemoryNumber = parseInt(extMemory.innerText);
    return extMemoryNumber;
})
document.getElementById('urgent-shipping').addEventListener('click', function () {
    let extMemory = document.getElementById('delivery-cost')
    extMemory.innerText = 20;
    extMemoryNumber = parseInt(extMemory.innerText);
    return extMemoryNumber;
})

// total price
function total(a,b,c) {
    let totalPrice = a + b + c;
    document.getElementById('total-price').innerText = totalPrice;
    return totalPrice
}

total



// making best price string to integer
let bestPrice = document.getElementById('best-price');
let bestPriceNumber = bestPrice.innerText;
bestPriceNumber = parseFloat(1299);
console.log(typeof(bestPriceNumber));


// memory cost fucntion

document.getElementById('default-memory').addEventListener('click', function () {
    let extMemory = document.getElementById('ext-memory-cost')
    let extMemoryNumber = extMemory.innerText;
    extMemory.innerText = 0;
    console.log(typeof(parseInt(extMemory.innerText)));
    return parseInt(extMemoryNumber);;
})
document.getElementById('memory16').addEventListener('click', function () {
    let extMemory = document.getElementById('ext-memory-cost')
    let extMemoryNumber = extMemory.innerText;
    extMemory.innerText = 180;
    console.log(typeof(parseInt(extMemory.innerText)));
    return parseInt(extMemoryNumber);
})

// extra storage cost function
document.getElementById('default-storage-btn').addEventListener('click', function () {
    let extMemory = document.getElementById('extra-storage-cost')
    let extMemoryNumber = extMemory.innerText;
    extMemory.innerText = 0;
    console.log(typeof(parseInt(extMemory.innerText)));
    return parseInt(extMemoryNumber);
})
document.getElementById('second-ssd').addEventListener('click', function () {
    let extMemory = document.getElementById('extra-storage-cost')
    let extMemoryNumber = extMemory.innerText;
    extMemory.innerText = 100;
    console.log(typeof(parseInt(extMemory.innerText)));
    return parseInt(extMemoryNumber);
})
document.getElementById('third-ssd').addEventListener('click', function () {
    let extMemory = document.getElementById('extra-storage-cost')
    
    let extMemoryNumber = extMemory.innerText;
    extMemory.innerText = 180;
    console.log(typeof(parseInt(extMemory.innerText)));
    return parseInt(extMemoryNumber);
})


// delivery cost function
document.getElementById('regular-shipping').addEventListener('click', function () {
    let extMemory = document.getElementById('delivery-cost')
    let extMemoryNumber = extMemory.innerText;
    extMemory.innerText = 0;
    console.log(typeof(parseInt(extMemory.innerText)));
    return parseInt(extMemoryNumber);
})
document.getElementById('urgent-shipping').addEventListener('click', function () {
    let extMemory = document.getElementById('delivery-cost')
    let extMemoryNumber = extMemory.innerText;
    extMemory.innerText = 20;
    console.log(typeof(parseInt(extMemory.innerText)));
    return parseInt(extMemoryNumber);
})

// total price

document.getElementById('total-price').innerText = 
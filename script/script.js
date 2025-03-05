const colorBox = document.querySelectorAll('.color-box');
for(const colors of colorBox){
   const color = colors;
   color.addEventListener('click', function(e){
    for(let color of colorBox){
        color.classList.remove('border-purple-800')
        color.classList.add('border-gray-300')
    }
    e.target.classList.add('border-purple-800')
    e.target.classList.remove('border-gray-300')
    const imagesProduct = document.getElementById('images-product')
    const colorName= e.target.id;
    imagesProduct.src="../images/" + colorName + ".png"
   })
}
// size
const btnSize = document.querySelectorAll('.btn-size')
for(const btn of btnSize){
    btn.addEventListener('click', function(e){
        for(const btn of btnSize){
            btn.classList.remove('border-blue-800')
        }
        e.target.classList.add('border-blue-800')
    })
}
// - and + 
const btnQuantity = document.querySelectorAll('.btn-quantity')
for(const btn of btnQuantity){
    btn.addEventListener('click', function(e){
        const quantityNumber = parseInt(document.getElementById('quantity-number').innerText)
        const value = e.target.innerText === "+"? 1 : -1;
        document.getElementById('quantity-number').innerText = Math.max(0, quantityNumber + value);
    })
}
// add to cart btn
const array = [];
document.getElementById('btn-add-to-cart').addEventListener('click', function(){
    const quantityNumber = parseInt(document.getElementById('quantity-number').innerText);
    if(quantityNumber > 0){
    document.getElementById('btn-checkout').classList.remove('hidden')
    document.getElementById('checkout-number').innerText = quantityNumber;
    const colorName = document.querySelector('div.border-purple-800').id;
    const sizeName = document.querySelector('button.border-blue-800').id;
    const price = document.querySelector('button.border-blue-800').innerText.split(' ')[1].split('$')[1]
    array.push({
        Image: colorName + ".png",
        size: sizeName,
        color: colorName,
        price: price * quantityNumber,
        quantity: quantityNumber,
        title: "this is a title"
    })
    }
    else{
        alert('godi koyta kinbi bolda')
    }
    
})

// checkout btn
document.getElementById('btn-checkout').addEventListener('click', function(){
    document.getElementById('text-section-div').classList.add('hidden');
    document.getElementById('images-section div').classList.add('hidden');
    document.getElementById('main-hrd-section -hidden').classList.remove('hidden');
    const comment = document.getElementById('added-main-text')
    for(const item of array){
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="flex items-center justify-between border-b">
        <div class="flex gap-2 items-center">
        <img class="w-10 h-10 rounded-md" src="${"../images/"}${item.Image}" alt="">
        <h>${item.title}</h>
        </div>
        <div class="flex items-center gap-24 mr-4">
        <h>${item.color}</h>
        <h>${item.size}</h>
        <h>${item.quantity}</h>
        <h>$${item.price}</h>
        </div>
        </div>
        `
        comment.appendChild(div)
    }
   
})
function cost(amount, filed){
    const memoryCost = document.getElementById(filed);
    const memoryCostAmount = parseInt(memoryCost.innerText);

        memoryCost.innerText = amount;




        const total = document.getElementById('total-price');
        const totalAmount = parseInt(total.innerText);
        const mCost = document.getElementById('memory-cost');
        const mCostAmount = parseInt(mCost.innerText);
        const sCost = document.getElementById('storage-cost');
        const sCostAmount = parseInt(sCost.innerText);
        const dCost = document.getElementById('delivery-cost');
        const dCostAmount = parseInt(dCost.innerText);
    
        total.innerText =  mCostAmount + sCostAmount + dCostAmount + 1299;

    
}

document.getElementById('memory-first').addEventListener('click', function(){
    cost(0, 'memory-cost');
})

document.getElementById('memory-second').addEventListener('click', function(){
    cost(180, 'memory-cost');
})

document.getElementById('storage-first').addEventListener('click', function(){
    cost(0, 'storage-cost');
})

document.getElementById('storage-second').addEventListener('click', function(){
    cost(100, 'storage-cost');
});

document.getElementById('storage-third').addEventListener('click', function(){
    cost(180, 'storage-cost');
});
document.getElementById('delivery-first').addEventListener('click', function(){
    cost(00, 'delivery-cost');
});
document.getElementById('delivery-second').addEventListener('click', function(){
    cost(20, 'delivery-cost');
});


document.getElementById('promo-code').addEventListener('click', function(){
    const promoCode = document.getElementById('promo-filed');
    const promoValue = promoCode.value;
    const total = document.getElementById('total-price');
    const totalAmount = parseInt(total.innerText);
    const finalTotal = document.getElementById('final-total-price');
    // const finalTotalAmount = parseInt(finalTotal.innerText);

    console.log(totalAmount*.20);

    if(promoValue == 'code'){
       let promoDone = totalAmount - (totalAmount*.20);
       finalTotal.innerText = promoDone;
    }

    

    


})
const checkbox = document.querySelector('#id1')
const id1Price = document.querySelector('.id1-price')
const totalPayment = document.querySelector('.total-payment')

checkbox.addEventListener('change', (e)=>{
    const prevPrice =totalPayment.innerHTML
    if(e.target.checked){
        localStorage.setItem('prevPrice', prevPrice)
        const price = id1Price.innerHTML.slice(1)
        totalPayment.innerHTML = price
    }else{
        const getPrevPrice = localStorage.getItem('prevPrice')
        totalPayment.innerHTML = getPrevPrice
        console.log(prevPrice);
    }
})


checkbox.addEventListener('change', (e)=>{
    const prevPrice =totalPayment.innerHTML
    if(e.target.checked){
        localStorage.setItem('prevPrice', prevPrice)
        const price = id1Price.innerHTML.slice(1)
        totalPayment.innerHTML = price
    }else{
        const getPrevPrice = localStorage.getItem('prevPrice')
        totalPayment.innerHTML = getPrevPrice
        console.log(prevPrice);
    }
})




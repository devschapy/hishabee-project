const checkbox = document.querySelector('#id1')
const checkbox3 = document.querySelector('#id3')
const id1Price = document.querySelector('.id1-price')
const totalPayment = document.querySelector('.total-payment')

// const checkbox3 = document.querySelector('#id3')
// console.log(checkbox3);

checkbox.addEventListener('change', (e)=>{
    const prevPrice =totalPayment.innerHTML
    // console.log(Number(prevPrice));
    if(e.target.checked){
        localStorage.setItem('prevPrice', prevPrice)
        const price1 = id1Price.innerHTML.slice(1)
        totalPayment.innerHTML = price1
    }else{
        const getPrevPrice = localStorage.getItem('prevPrice')
        totalPayment.innerHTML = getPrevPrice
        // console.log(prevPrice);
    }
})

checkbox3.addEventListener('change', (e) => {
    const prevPrice =totalPayment.innerHTML
    // console.log(Number(prevPrice));
    if(e.target.checked){
        localStorage.setItem('prevPrice', prevPrice)
        const price3 = id1Price.innerHTML.slice(1)
        totalPayment.innerHTML = price3
        console.log(price3);
    }else{
        const getPrevPrice = localStorage.getItem('prevPrice')
        totalPayment.innerHTML = getPrevPrice
        // console.log(prevPrice);
    }
})




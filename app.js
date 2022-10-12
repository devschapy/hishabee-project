const checkbox = document.querySelector('#id1')
const checkbox3 = document.querySelector('#id3')
const id1Price = document.querySelector('.id1-price')
const totalPayment = document.querySelector('.total-payment')

const aside = document.querySelector('#sideMenu');
const mainArea = document.querySelector('#mainArea');
const menuBtn = document.querySelector('#menuBtn');

const paymentToggole = document.querySelector('#paymentToggole');4q 
const paymentItems = document.querySelectorAll('.pmntHide')
console.log(typeof aside);

const toggleCSSclasses = (el, ...cls) => cls.map(cl => {
    if(el?.length){
        el.forEach(element => {
            element.classList.toggle(cl)
        });
    }else{
        el.classList.toggle(cl)
    }
});

menuBtn.addEventListener('click', (e)=>{
    toggleCSSclasses(aside, 'd-block')
    toggleCSSclasses(mainArea, 'col-10', 'col-md-9')
})

paymentToggole.addEventListener('click', (e) => {
    toggleCSSclasses(paymentToggole, 'd-none');
    toggleCSSclasses(paymentItems, 'd-block');
})

seeLess.addEventListener('click', (e) => {
    toggleCSSclasses(paymentItems, 'd-block')
    toggleCSSclasses(paymentToggole, 'd-none');
})



















checkbox.addEventListener('change', (e)=>{
    const prevPrice =totalPayment.innerHTML
    if(e.target.checked){
        localStorage.setItem('prevPrice', prevPrice)
        const price1 = id1Price.innerHTML.slice(1)
        totalPayment.innerHTML = price1
    }else{
        const getPrevPrice = localStorage.getItem('prevPrice')
        totalPayment.innerHTML = getPrevPrice
    }
})

checkbox3.addEventListener('change', (e) => {
    const prevPrice =totalPayment.innerHTML
    if(e.target.checked){
        localStorage.setItem('prevPrice', prevPrice)
        const price3 = id1Price.innerHTML.slice(1)
        totalPayment.innerHTML = price3
        console.log(price3);
    }else{
        const getPrevPrice = localStorage.getItem('prevPrice')
        totalPayment.innerHTML = getPrevPrice
    }
})




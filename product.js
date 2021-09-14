var btns = document.querySelectorAll('.btn3');
const storeProducts = document.querySelectorAll('.store-product');
console.log(btns.length);
console.log(storeProducts.length);

for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};

// let one = document.querySelector('#one');
// let two = document.querySelector('#two');
// let three = document.querySelector('#three');
// let four = document.querySelector('#four');
// let five = document.querySelector('#five');
// let six = document.querySelector('#six');

// one.addEventListener('click' ,() => one.style.backgroundColor='green');
// two.addEventListener('click' ,() => two.style.backgroundColor='green');
// three.addEventListener('click' ,() => three.style.backgroundColor='green');
// four.addEventListener('click' ,() => four.style.backgroundColor='green');
// five.addEventListener('click' ,() => five.style.backgroundColor='green');
// six.addEventListener('click' ,() => six.style.backgroundColor='green');


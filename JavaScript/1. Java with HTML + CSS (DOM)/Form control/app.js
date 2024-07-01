const form = document.querySelector('form');
const prod = document.querySelector('#product');
const qty = document.querySelector('#qty');
const odr = document.querySelector('h2');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const pv = prod.value;
    const qv = qty.value;
    const grocery = document.createElement('li');
    grocery.append(`${qv} ${pv}`);
    list.append(grocery);
    prod.value = "";
    qty.value = "";
})

form.addEventListener('input', function (e) {
    const pv = prod.value;
    const qv = qty.value;
    const newval = `${qv} ${pv}`;
    odr.innerText = newval;
    if (newval === " ") {
        odr.innerText = "Enter Your Order Details";
    }
})
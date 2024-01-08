let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');

plus.addEventListener('click',function1);

function function1(){
    let counter = document.querySelector('.counter').innerHTML
    counter++
    document.querySelector('.counter').innerHTML= counter
}

minus.addEventListener('click',function2);

function function2(){
    let counter = document.querySelector('.counter').innerHTML
    counter--
    document.querySelector('.counter').innerHTML= counter
}

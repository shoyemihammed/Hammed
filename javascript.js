'use strict';

const menu = document.querySelector('.menu-imag');
const sidebar = document.querySelector('.first-lis');
const exitBar = document.querySelector('.exit-imag');
const arrow = document.querySelector('.arrow');
const arrows = document.querySelector('.arrows');
const ima = document.querySelector('.backgrou');
const add = document.querySelectorAll('.sign');
const minus = document.querySelector('.minus')
const text = document.querySelector('.sections01')


// add.addEventListener('click', function () {
//     text.classList.toggle('hidden')
//     minus.classList.toggle('hidden')
//     add.classList.toggle('hidden')
// })

// minus.addEventListener('click', function () {
//     text.classList.toggle('hidden')
//     minus.classList.toggle('hidden')
//     add.classList.toggle('hidden')
// })


for (let i = 0; i < add.length; i++) {
    add[i].addEventListener('click', function () {
        text.classList.toggle('hidden')
    })
}

menu.addEventListener('click', function () {
    sidebar.classList.toggle('hidden')
});

exitBar.addEventListener('click', function () {
    sidebar.classList.toggle('hidden');
})

arrow.addEventListener('click', function () {
    // diceEl.src = `dice-${dice}.png`;
    ima.src = `bac.jpg`;
});
// arrow.addEventListener('click', function () {
//     ima.src = `abstract-background-consisting-colorful-arcs-illustration_456031-149.jpg`
// })
arrows.addEventListener('click', function () {
    ima.src = `abstract-technological-background_23-2148897676.jpg`;
});

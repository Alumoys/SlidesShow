'use strict';
const imagens = [
    {'id':'1','url': './img/berserk.png'},
    {'id':'2','url': './img/inuyasha.jpg'},
    {'id':'3','url': './img/ippo.png'},
    {'id':'4','url': './img/tenjhotenge.jpg'},
    {'id':'5','url': './img/yuyuhakusho.jpg'},
    {'id':'6','url': './img/hellsing.jpg'},
] 
const conteinerItens = document.querySelector('#container-items');
const loadImages = (images, conteiner) =>{
    images.forEach(image => {
        conteiner.innerHTML += `<div class='item'>
        <img src='${image.url}'>
        </div>`
    })
}
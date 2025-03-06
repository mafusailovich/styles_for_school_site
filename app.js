'use strict';

//генерация галереи
;(function(){
    const src = document.querySelector('.source');
    const count = document.querySelector('.count');
    const btn = document.querySelector('.generate');
    const textGen = document.querySelector('.gallery-tags');

    btn.addEventListener('click', ()=>{
        const folder = document.querySelector('.source').value;
        const count = Number(document.querySelector('.count').value);

        let result = `<div class="ch-gallery">
        <div id="close" class="ch-gallery__fixed-obj">.</div>
        <div class="ch-gallery__slides">
        `

        for (let i = 1; i <= count; i++){
            result += `<div class="ch-gallery__slide">
                <a class="ch-gallery__link" href="#popup_${i}">
                    <img src="https://chernyshev.mskobr.ru/${folder}/image0${String(i).padStart(2, '0')}.jpg"
                        alt="" class="ch-gallery__img" title="Нажмите для увеличения">
                </a>
            </div>`
        }
        result += `
        </div>
        <div class="ch-gallery__title">(нажмите на картинку для увеличения)</div>
        `;
        
        for (let i = 1; i <= count; i++){
            result += `
        <div id="popup_${i}" class="ch-gallery__popup">
            <a href="#close" class="ch-gallery__popup-area">.</a>
            <div class="ch-gallery__popup-body">
                <div class="ch-gallery__popup-content">
                    <a href="#close" class="ch-gallery__popup-close">
                        <img src="https://chernyshev.mskobr.ru/files/FOTO/Galley/Files_for_gallery/close_icon.png"
                            alt="" class="ch-gallery__close-btn">
                    </a>
                    <img src="https://chernyshev.mskobr.ru/${folder}/image0${String(i).padStart(2, '0')}.jpg"
                        alt="" class="ch-gallery__popup-img">
                </div>
            </div>
        </div>`
        }

        result += `
        </div>`;
        console.log(result)

    });
})()
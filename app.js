'use strict';

//генерация галереи
;(function(){

    const siteAddr = 'chernyshev.mskobr.ru';
    const fullAddrToCloseIcon = 'https://chernyshev.mskobr.ru/files/FOTO/Galley/Files_for_gallery/close_icon.png';

    if (document.querySelector('.gallery-visual')){
   
    const btn = document.querySelector('.generate');
    const visual = document.querySelector('.gallery-visual');
    const textGen = document.querySelector('.gallery-tags');

    btn.addEventListener('click', ()=>{
        const folder = document.querySelector('.source').value;
        const count = Number(document.querySelector('.count').value);
        const picStart = Number(document.querySelector('.picStart').value);
        let picEnd = Number(document.querySelector('.picEnd').value);

        //если не указано количество картинок, то будет до последней
        if (picEnd === 0){
            picEnd = count;
        }

        let result = `
        <style>
        /* отступ абзаца */
p {
    text-indent:3ch;
 }

/* стили для галереи */
.ch-gallery {
    padding: 10px;
}

.ch-gallery__title {
    font-size: 14px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    color: #071d32;
}

.ch-gallery__slides {
    display: flex;
    column-gap: 2%;
    row-gap: 15px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    margin: 10px;

}

.ch-gallery__slide {
    width: 300px;
    height: 300px;
    box-shadow: 0 0 4px 4px gray;
    border-radius: 5px;
}

.ch-gallery__link {
    width: 100%;
    height: 100%;
}

.ch-gallery__img {
    cursor: zoom-in;
    width: 100%;
    height: 100%;
    object-fit:cover;
    object-position: center;
    border-radius: 5px;
    transform: scale(1,1);
    transition: transform 0.5s ease;
}

.ch-gallery__img:hover {
    transform: scale(1.05, 1.05);
}

/* стили popup */
.ch-gallery__fixed-obj {
    position: fixed;
    top:10px;
    left: 10px;
    pointer-events: none;
    opacity: 0;
}

.ch-gallery__popup {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    top:0;
    left:0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.8s ease 0s;
}

.ch-gallery__popup:target {
    opacity: 1;
    visibility: visible;
}

.ch-gallery__popup:target .ch-gallery__popup-content {
    transform: perspective(300px) translate(0px, 0%) rotate(0deg);
    opacity: 1;
}

.ch-gallery__popup-area {
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
}

.ch-gallery__popup-body {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 10px;
}

.ch-gallery__popup-content {
    all:initial;
    position: relative;
    max-width: 800px;
    transition: all 0.8s ease 0s;
    opacity: 0;
    transform: perspective(300px) translate(0px, -100%) rotateX(45deg);    
}

.ch-gallery__popup-close {
    position: absolute;
    right: -17px;
    top: -16px;
    color: black;
    text-decoration: none;
}

.ch-gallery__close-btn {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: rgba(245,245,245,0.2);
    transition: all 0.8s ease;
}

.ch-gallery__close-btn:hover {
    transform: scale(1.1,1.1);
    box-shadow: 0 0 2px 2px whitesmoke;
}

.ch-gallery__popup-img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    max-height: 85vh;
    object-position: center;
    box-shadow: 0 0 4px 4px gray;
    border-radius: 5px;
}
        </style>
        <div class="ch-gallery">
        <div id="close" class="ch-gallery__fixed-obj">.</div>
        <div class="ch-gallery__slides">
        `

        for (let i = picStart; i <= picEnd; i++){
            result += `<div class="ch-gallery__slide">
                <a class="ch-gallery__link" href="#popup_${i}">
                    <img src="https://${siteAddr}/${folder}image0${String(i).padStart(2, '0')}.jpg"
                        alt="" class="ch-gallery__img" title="Нажмите для увеличения">
                </a>
            </div>`
        }
        result += `
        </div>
        <div class="ch-gallery__title">(нажмите на картинку для увеличения)</div>
        `;
        
        for (let i = picStart; i <= picEnd; i++){
            result += `
        <div id="popup_${i}" class="ch-gallery__popup">
            <a href="#close" class="ch-gallery__popup-area">.</a>
            <div class="ch-gallery__popup-body">
                <div class="ch-gallery__popup-content">
                    <a href="#close" class="ch-gallery__popup-close">
                        <img src="${fullAddrToCloseIcon}"
                            alt="" class="ch-gallery__close-btn">
                    </a>
                    <img src="https://${siteAddr}/${folder}/image0${String(i).padStart(2, '0')}.jpg"
                        alt="" class="ch-gallery__popup-img">
                </div>
            </div>
        </div>`
        }

        result += `
        </div>`;
        visual.innerHTML = result;
        textGen.textContent = result;

    });
}})()

//генерация видео rutube
;(function(){
    if (document.querySelector('.rutube-gen')){
    const btn = document.querySelector('.rutube-gen__generate');
    const visual = document.querySelector('.rutube-gen__visual');
    const code = document.querySelector('.rutube-gen__code');

    btn.addEventListener('click', function(){
        const link = document.querySelector('.rutube-gen__link').value;
        const player = document.querySelector('.rutube-gen__player-code').value;

        let player_link = player.match(/\"https:.+?\"/)

        let result = `
        <style>
        /* отступ абзаца */
        p {
            text-indent:3ch;
        }
        
        /* видео */
        .rutube-video {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 90%;
        row-gap: 20px;
        margin: 0 auto;
    }

    .rutube-video__video {
        width: 100%;
        height: auto;
        aspect-ratio: 16/9;
        border-radius: 5px;
        box-shadow: 0 0 2px 2px gray;
    }

    .rutube-video__link {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 340px;
        width: fit-content;
        padding: 10px;
        background-image: linear-gradient(to bottom, #071d32, #172a3f, #26384d, #36475b, #455669);
        box-shadow: 2px 2px 4px 0 gray;
        font-size: 16px;
        font-weight: 700;
        color: #fff;
        letter-spacing: 2px;
        border-radius: 5px;
        cursor: pointer;
    }

    .rutube-video__link > a {
        all:unset;
    }

    .rutube-video__link:hover {
        box-shadow: 4px 4px 4px 0 gray;
        transform: scale();
    }

    @media (max-width: 768px){
        .rutube-video__link {
            padding: 7px;
            font-size: 10px;
        }
    }
    </style>
    
    <div class="rutube-video">
        <object class="rutube-video__video" data=${player_link[0]}
            type="video/mp4"></object>
        <div class="rutube-video__link">
            <a href="${link}"
                target="_blank">ПОЛНОЭКРАННАЯ ВЕРСИЯ</a>
        </div>
    </div>
    `
    
    visual.innerHTML = result;
    code.textContent = result;

    });
}})()
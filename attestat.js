//получение позиционирования для новой версии

;(function(){
    //получаем данные для шаблона титульного листа аттестата
    const cls1 = '.LgumFoeZTm6QeyCBeoDT'; //идентификаторы тегов блоков
    const cls2 = '.XzrauMnb2_dW7u6NikiT'; 
    if (document.querySelector(cls1) && document.querySelector(cls2)){
        const saveAtBlocks1 = document.querySelectorAll(cls1);
        const saveAtBlocks2 = document.querySelectorAll(cls2);    

    //генерируем массив css свойств для полей
    const saveAtBlocks1Css= [];
    const saveAtBlocks2Css = [];
    for (let i = 0; i < saveAtBlocks1.length; i++){
        saveAtBlocks1Css[i] = `'${saveAtBlocks1[i].style.cssText}'`;
    }
    for (let i = 0; i < saveAtBlocks2.length; i++){
        saveAtBlocks2Css[i] = `'${saveAtBlocks2[i].style.cssText}'`;
    }

    console.log('Для применения шаблона, скопируйте код ниже в консоль и нажмите Enter');
    
    console.log(`
    //сохраненные значения стилей для передвигаемых блоков
    const saveAtBlocks1Css = [${saveAtBlocks1Css}];
    const saveAtBlocks2Css = [${saveAtBlocks2Css}];    
    
    //находим новые значения параметров
    const newAtBlocks1 = document.querySelectorAll('.LgumFoeZTm6QeyCBeoDT');
    const newAtBlocks2 = document.querySelectorAll('.XzrauMnb2_dW7u6NikiT');

    //заменяем стили значениями из ранее сохраненных
    console.log(newAtBlocks1.length,saveAtBlocks1Css.length,newAtBlocks2.length, saveAtBlocks2Css.length)
    if (newAtBlocks1.length !== saveAtBlocks1Css.length || newAtBlocks2.length !== saveAtBlocks2Css.length){
        console.log('Хм, почему-то количество элементов не совпадает');
    } else {
        for (let i = 0; i < newAtBlocks1.length; i++){
            newAtBlocks1[i].style.cssText = saveAtBlocks1Css[i];
        }
        for (let i = 0; i < newAtBlocks2.length; i++){
            newAtBlocks2[i].style.cssText = saveAtBlocks2Css[i];
        }
    }
    `)
    } else {
        console.log('Нет таких элеметнов')
    }

    
     
})()


//получение позиционирования для новой версии

;(function(){
    //находим позиции элементов на странице
    const spans = document.querySelectorAll('span.ng-star-inserted');
    const spansPos = [];
    for (let i = 0; i < spans.length; i++){
        if (spans[i].querySelector('.just-text')){
            if (spans[i].querySelector('.just-text').textContent !== '' || spans[i].querySelector('.qr-canvas')){
                spansPos.push(`'${spans[i].style.cssText}'`);
            }
        }
    }
    
    const marks = document.querySelectorAll('.cert-print-marks');
    const marksPos = [];
    for (let i = 0; i < marks.length; i++){
        marksPos.push(`'${marks[i].style.cssText}'`);
    }
    
    //выводим код для сохранения
    console.log(`
    //сохраненные значения стилей для передвигаемых блоков
    const saveSpansPos = [${spansPos}];
    const saveMarksPos = [${marksPos}];    
    
    //заменим
    let j = 0;
    const newSpans = document.querySelectorAll('span.ng-star-inserted');
    for (let i = 0; i < newSpans.length; i++){
        if (newSpans[i].querySelector('.just-text')){
            if (newSpans[i].querySelector('.just-text').textContent !== '' || newSpans[i].querySelector('.qr-canvas')){
                newSpans[i].style.cssText = saveSpansPos[j];
                j++;
            }
        }
    }
    
    const newMarks = document.querySelectorAll('.cert-print-marks');
    for (let i = 0; i < newMarks.length; i++){
        newMarks[i].style.cssText = saveMarksPos[i];
    }
    `)

})()
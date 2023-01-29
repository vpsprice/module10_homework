
btn.addEventListener('click', () => {

alert(`Размер экырана: ${screenWidth}px x ${screenHeight}px. 
Размер окна браузера с полосой прокрутки: ${windowInnerWidthScroll}px x ${windowInnerHeightScroll}px.
Размер окна браузера без полосы прокрутки: ${windowInnerWidth}px x ${windowInnerHeight}px.
Размер веб-страницы: ${pageWidth}px x ${pageHeight}px.`);

});



const resultDiv = document.querySelector('.result');
const button = document.querySelector('button');

const appendResultMessage = _ => {
    resultDiv.appendChild(getWindowSizeView());
   }

const getTextConteiner = message => {
    const result = document.createElement('p');
    result.classList.add('important-message');
    result.innerHTML = message;
    return result;
}

const getWindowSizeView = _ => {
    const { width, height } = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    };
    return getTextConteiner(`Ваши размеры экрана: ${width}x${height}`);
}
button.addEventListener('click', appendResultMessage);
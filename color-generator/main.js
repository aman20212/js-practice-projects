const hexBtn = document.querySelector('.hex-btn');
const hexColorValue = document.querySelector('.hex-color-value');
const hexColorGenerator = document.querySelector('.hex-color-generator');
const hexCopyBtn = document.querySelector('.hex-copy-color-btn');
const rgbCopyBtn = document.querySelector('.rgb-copy-color-btn');
const rgbColorValue = document.querySelector('.rgb-color-value');


// create random hex color
hexBtn.addEventListener('click', () => {
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput = "";
    for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
        hexColorOutput += characterSet.charAt(Math.floor(Math.random() * charSetLength))
    }
    hexColorValue.textContent = `#${hexColorOutput}`;
    hexColorGenerator.style.backgroundColor = `#${hexColorOutput}`;
    hexBtn.style.color = `#${hexColorOutput}`
});

// RGB Color Generator
const rgbBtn = document.querySelector('.rgb-btn');
const getRedInputRange = document.querySelector('#red');
const getGreenInputRange = document.querySelector('#green');
const getBlueInputRange = document.querySelector('#blue');
const rgbColorGenerator = document.querySelector('.rgb-color-generator');

rgbBtn.addEventListener('click', () => {
    let extractedBlue = getBlueInputRange.value;
    let extractedGreen = getGreenInputRange.value;
    let extractedRed = getRedInputRange.value;
    rgbColorValue.textContent = `rgb(${extractedRed}, ${extractedGreen}, ${extractedBlue})`;
    rgbColorGenerator.style.backgroundColor = `rgb(${extractedRed}, ${extractedGreen}, ${extractedBlue})`;

})

function copyHexColorToClipBoard() {
    navigator.clipboard.writeText(hexColorValue.textContent);
}

hexCopyBtn.addEventListener('click', copyHexColorToClipBoard)

function copyRGBColorToClipBoard() {
    navigator.clipboard.writeText(rgbColorValue.textContent);
}

rgbCopyBtn.addEventListener('click', copyRGBColorToClipBoard);
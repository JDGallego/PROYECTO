const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');
const outputContainer = document.getElementById('output-container');
const imageContainer = document.querySelector('.image-container');

function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function togglePlaceholder(visible) {
    if (visible) {
        outputContainer.style.display = 'none';
        imageContainer.style.display = 'block'; 
    } else {
        outputContainer.style.display = 'block';
        imageContainer.style.display = 'none';  
    }
}

encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (text) {
        outputText.value = encrypt(text);
        togglePlaceholder(false);
    }
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (text) {
        outputText.value = decrypt(text);
        togglePlaceholder(false);
    }
});

copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

inputText.addEventListener('input', () => {
    if (!inputText.value) {
        togglePlaceholder(true);
    }
});


togglePlaceholder(true);


const background = document.querySelector('.background');
background.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    background.style.backgroundPosition = `${x / 100}px ${y / 100}px`;
});

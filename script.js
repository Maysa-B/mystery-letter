const botaoCriar = document.getElementById('criar-carta');
const inputTexto = document.getElementById('carta-texto');
botaoCriar.addEventListener('click', gerarCarta);
inputTexto.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        gerarCarta();
    }
})

function gerarCarta() {
    const input = document.querySelector('#carta-texto').value;
    const paiNumber = document.querySelector('#carta-contador');
    const pai = document.querySelector('#carta-gerada');
    const span = document.querySelectorAll('span');
    let number = 0;
    let palavra = '';

    for (let id = 0; id < span.length; id += 1) {
        const word = span[id];
        word.remove();
        paiNumber.innerText = 0;
    }

    if (input == '' || input == ' ') {
        let criaSpan = document.createElement('span');
        criaSpan.innerText = 'Por favor, digite o conteúdo da carta.';
        pai.appendChild(criaSpan);
    }

    for (let id = 0; id < input.length; id += 1) {
        let criaSpan = document.createElement('span');
        criaSpan.addEventListener('click', changeStyle);

        if (input[id] === ' ') {
            criaSpan.innerText = palavra;
            pai.appendChild(criaSpan);
            palavra = '';
            chooseStyle();
            number += 1;
        } else if (id === input.length - 1) {
            palavra += input[id];
            criaSpan.innerText = palavra;
            pai.appendChild(criaSpan);
            palavra = '';
            chooseStyle();
            number += 1;
        } else {
            palavra += input[id];
        }
    }

    paiNumber.innerText = number;
}

function chooseStyle() {
    const estilos = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
    const span = document.querySelectorAll('span');
    let classes = '';

    for (let id = 0; id < span.length; id += 1) {
        const word = span[id];

        for (let id = 1; id <= 4; id += 1) {
            if (id === 1) {
                classes += estilos[Math.floor(Math.random() * 3)];
            } else if (id === 2) {
                classes += ' ' + estilos[Math.floor(Math.random() * 3) + 3];
            } else if (id === 3) {
                classes += ' ' + estilos[Math.floor(Math.random() * 2) + 6];
            } else {
                classes += ' ' + estilos[Math.floor(Math.random() * 2) + 8];
            }
        }

        word.className = classes;
        classes = '';
    }
}

function changeStyle(event) {
    const estilos = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
    const word = event.target;
    let classes = '';

    for (let id = 1; id <= 4; id += 1) {
        if (id === 1) {
            classes += estilos[Math.floor(Math.random() * 3)];
        } else if (id === 2) {
            classes += ' ' + estilos[Math.floor(Math.random() * 3) + 3];
        } else if (id === 3) {
            classes += ' ' + estilos[Math.floor(Math.random() * 2) + 6];
        } else {
            classes += ' ' + estilos[Math.floor(Math.random() * 2) + 8];
        }
    }

    word.className = classes;
    classes = '';
}
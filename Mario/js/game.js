/* Elemento do mario */
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')

const pula = () => {
    mario.classList.add('pula');

    /* Remove div */
    setTimeout(() => {

        mario.classList.remove('pula');
    }, 500);
}

const loop = setInterval(() =>{
    /* Condição de perde */
    const pipePosition = pipe.offsetLeft;
    /* Pega posição do mario */
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if(pipePosition <= 140 && pipePosition > 0 && marioPosition < 90) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; 

        /* parando posição por cima */
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; 

        /* Mario morrendo */
        mario.src = './img/game-over.png';
        mario.style.width = '120px';
    }
}, 10);

/* ação de pula */
document.addEventListener('keydown', pula);
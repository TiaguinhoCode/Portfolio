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

    if(pipePosition <= 120) {

        pipe.style.animation = 'none';
    }
}, 10);

/* ação de pula */
document.addEventListener('keydown', pula);
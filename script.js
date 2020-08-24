const ball = document.querySelector(".ball-img");
const input = document.querySelector("question");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answers = [];

const shakeAnimation = (input) => {
    const img = input.parentElement;
    img.addCLass("shake-animation");
}

ball.addEventListener('click', e=>{
    e.preventDefault();

    e.shakeAnimation();
});

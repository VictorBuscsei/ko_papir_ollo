let userScore = 0;
let pcScore = 0;
let closeBtn;
const userScore_span = document.getElementById("user-score");
const pcScore_span = document.getElementById("pc-score");
// const scoreBoard_div = document.getElementById(".score-board")
const restart = document.getElementById("restart");
const result = document.getElementById("result")
const model = document.querySelector(".model");
const ko_div = document.getElementById("ko");
const papir_div = document.getElementById("papir");
const ollo_div = document.getElementById("ollo");


function getpcChoice() {
    const choices = ['ko', 'papir', 'ollo'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function win(userChoice, pcChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    result.innerHTML = `<span class="close"></span> <h1 class="text-win">Te nyertél!</h1> <p>Gép választotta: <strong>${pcChoice}</strong></p>`;
    model.style.display = 'block';
}

function lose(userChoice, pcChoice) {
    pcScore++;
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    result.innerHTML = `<span class="close"></span> <h1 class="text-lose">Vesztettél</h1> <p>Gép választotta: <strong>${pcChoice}</strong></p>`;
    model.style.display = 'block'
}

function draw(userChoice, pcChoice) {
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    result.innerHTML = `<span class="close"></span> <h1>Döntetlen</h1> <p>Gép és te is választottad: <strong>${pcChoice}</strong></p>`;
    model.style.display = 'block'
}


function play(userChoice) {
    const pcChoice = getpcChoice();
    switch (userChoice + pcChoice) {
        case 'koollo':
        case 'papirko':
        case 'ollopapir':
            win(userChoice, pcChoice);
            break;
        case 'kopapir':
        case 'papirollo':
        case 'olloko':
            lose(userChoice, pcChoice);
            break;
        case 'koko':
        case 'papirpapir':
        case 'olloollo':
            draw(userChoice, pcChoice);
            break;
    }
}


function main() {
    ko_div.addEventListener('click', function () {
        play('ko');
    })

    papir_div.addEventListener('click', function () {
        play('papir');
    })

    ollo_div.addEventListener('click', function () {
        play('ollo');
    })
}


function clearmodel(e) {
    closeBtn = document.querySelector('.close');

    if (e.target == model) {
        model.style.display = "none"
    }
    else if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            model.style.display = "none"
        });
    }
}


function restartGame() {
    userScore = 0;
    pcScore = 0;
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
}

restart.addEventListener('click', restartGame);
window.addEventListener('click', clearmodel);
main();


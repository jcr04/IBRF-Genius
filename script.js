let buttonColors = ['red', 'green', 'blue', 'yellow'];
let gamePattern = [];
let userPattern = [];
let level = 0;
let turn = 0;
let started = false;
let difficulty = 3;

document.getElementById('start-button').addEventListener('click', function() {
    if (!started) {
        started = true;
        let difficultyButtons = document.getElementsByName('difficulty');
        for (let i = 0; i < difficultyButtons.length; i++) {
            if (difficultyButtons[i].checked) {
                difficulty = parseInt(difficultyButtons[i].value);
            }
        }
        playGame();
    }
});

function playGame() {
    // lógica para definir a sequência de botões aleatórios
    // lógica para exibir a sequência de botões para o jogador
    // lógica para processar a entrada do usuário
    // lógica para atualizar o nível do jogo
}


document.getElementById('start-button').addEventListener('click', function() {
    if (!started) {
        started = true;
        difficulty = document.getElementById('difficulty-select').value;
        nextLevel();
    }
});


$('.btn').click(function() {
  let userColor = $(this).attr('id');
  userPattern.push(userColor);
  animateButton(userColor);

  if (checkPattern()) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(nextLevel, 1000);
    }
  } else {
    $('body').addClass('game-over');
    setTimeout(function() {
      $('body').removeClass('game-over');
    }, 200);
    $('h1').text('Fim de jogo, aperte Restart');
    startOver();
  }
});

function nextLevel() {
    userPattern = [];
    level++;
    $('h1').text('Level ' + level);
    let randomColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomColor);
    animateButton(randomColor);
  }
  

function flashButton(color){
    let button = document.querySelector('.' + color)
    button.style.opacity = '0.5';
    setTimeout(function() {
        button.style.opacity = '1'
    }, 400)
}

document.querySelectorAll('.button').forEach(function(button) {
    button.addEventListener('click', function() {
        if (turn === 1) {
            let color = button.classList[1];
            flashButton(color);
            userPattern.push(color);
            if (!checkAnswer()) {
                alert('Game Over');
                gameOver();
            } else if (userPattern.length === gamePattern.length) {
                setTimeout(function() {
                    nextSequence();
                }, 1000);
            }
        }
    });
});

function checkPattern() {
    for (let i = 0; i < userPattern.length; i++) {
      if (userPattern[i] !== gamePattern[i]) {
        return false;
      }
    }
    return true;
}
  
function gameOver() {
    gamePattern = [];
    userPattern = [];
    level = 0;
    turn = 0;
    started = false;
    document.querySelector('h1').textContent = "Vamos iniciar novamente?"
}

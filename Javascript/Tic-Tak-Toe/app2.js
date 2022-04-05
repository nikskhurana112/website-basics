document.addEventListener('DOMContentLoaded', play)

function play(){
  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1
  let count = 0;

  const winningArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    [6, 4, 2],
  ]

  function checkBoard(){
    for(let y=0; y<winningArrays.length; y++){
      const square1 = squares[winningArrays[y][0]]
      const square2 = squares[winningArrays[y][1]]
      const square3 = squares[winningArrays[y][2]]
   
    if(
      square1.classList.contains('player-one') &&
      square2.classList.contains('player-one') && 
      square3.classList.contains('player-one')
    ){
      result.innerHTML = 'Player one Wins!';
      clearInterval(interval);
      return true;
    }
    if(
      square1.classList.contains('player-two') &&
      square2.classList.contains('player-two') && 
      square3.classList.contains('player-two')
    ){
      result.innerHTML = 'Player two Wins!'
      clearInterval(interval);

      return true;
    }
    
   
  }

}

function computerMove(){
  let emptySquare = [];
  let random;
  for(let i=0; i<squares.length; i++){
    if(!squares[i].classList.contains('taken')){
      emptySquare.push(squares[i]);
    }
  }
  random = Math.floor(Math.random() * emptySquare.length)
  if(currentPlayer == 2 && !checkBoard()){
    emptySquare[random].classList.add('player-two')
    emptySquare[random].classList.add('taken')
    currentPlayer = 1;
    displayCurrentPlayer.innerHTML = currentPlayer;
    count ++;
    checkBoard();
  }
}


for(let i=0; i<squares.length; i++){
  squares[i].onclick = () =>{
    if(currentPlayer == 1 &&
       !squares[i].classList.contains('taken') &&
      !checkBoard()
      )
      {
      squares[i].classList.add('player-one');
      squares[i].classList.add('taken');
      currentPlayer = 2;
      displayCurrentPlayer.innerHTML = currentPlayer;
      count ++;
    }

    checkBoard()
    if(count == 9 && !checkBoard()){
      result.innerHTML = 'Game Drawn'
      clearInterval(interval);
    }
    
  }
}

   let interval = setInterval(computerMove, 1000)
}


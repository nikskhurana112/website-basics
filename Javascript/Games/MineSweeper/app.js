document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid')
  const scoreDisplay = document.querySelector('#score')
  const resultDisplay = document.querySelector('#result')
  const width = 4
  let squares = []
  //create a playing board
  function createBoard(){
    for( let i=0; i < width*width; i++){
      const square = document.createElement('div')
      square.innerHTML = 0
      grid.appendChild(square)
      squares.push(square)
    }
    generate()
    generate()
  }
  createBoard()
  


//Generate a number randomly

function generate() {
  let randomNumber = Math.floor(Math.random() * squares.length)
  if(squares[randomNumber].innerHTML == 0){
    squares[randomNumber].innerHTML = 2
  }else generate()
}





})
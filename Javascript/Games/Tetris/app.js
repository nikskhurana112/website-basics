document.addEventListener('DOMContentLoaded', () => {
    

    const width = 10
    const height = 20
    const grid = document.querySelector('.grid')
    let currentPosition = 4
    
    //The Tetrominoes
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]
    const zTetromino = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width *2, width *2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width *2 + 1]
    ]
    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width *2 + 1],
        [1, width , width + 1, width * 2 + 1]
    ]
    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ]
    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width *3 + 1],
        [width, width + 1, width + 2, width + 3],
    ]

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

    //Randomly Selected Tetromino
    let random = Math.floor(Math.random() * theTetrominoes.length)
    let currentRotation = 0
    let current = theTetrominoes[random][currentRotation]
    alert(theTetrominoes[0][0])
    alert( 4 + theTetrominoes[0][0])

    //move the Tetromino down 

    //draw the shape
    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('block')
        })
    }
    





})
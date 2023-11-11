
document.body.style.backgroundImage = "url('background.jpg')";

class Game
    {
        constructor() {
            console.log("init game") 
            this.turn = "X";
            this.board = new Array(9).fill(null); //making an arry to cover all the index in the board
        }

        nextTurn(){
             if (this.turn == "X"){
                this.turn ="O";
            }
            else{
                this.turn = "X";
            }
        }
                            
        makeMove(i){
            if (this.board[i] == null){ 
                this.board[i] = this.turn;
                }
                else{return;}
            }

    }

class GameView 
    {
        constructor() {
            console.log("init GameView");
        }

        updateBoard(game) {
            for(let i = 0  ; i < 9 ; i++){ 
                const tile = document.querySelector(`.division[data-index = '${i}']`)  
                tile.textContent = game.board[i];

            }
        }

    }      

let game = new Game; 
let gameview = new GameView;

let block = document.querySelectorAll(".division")

block.forEach((block) =>  {
    block.addEventListener("click", () => {
    onTileClicked(block.dataset.index);     
    })
})
                       
function onTileClicked(i){
    game.makeMove(i);
    gameview.updateBoard(game);
    game.nextTurn();
}
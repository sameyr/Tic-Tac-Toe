
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
                let winningCombination =  this.checkWinningCombination();

            }
            else{return;}
        }

        checkWinningCombination(){ 
            const winningCombination = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,4,8],
                [2,4,6],
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ]

            for (const combination of winningCombination){
                
                const [a,b,c] = combination; // breaking down the array and saving it into a,b and c
                if(this.board[a] && (this.board[a] === this.board[b]) && (this.board[a] === this.board[c]) ){
                    if (this.board[a]==="X"){console.log("Player X win")}
                    else{console.log("player Y Wins")}
                }
            }
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

let block = document.querySelectorAll(".division"); //grab all the block index from the board and saves it in "block" variable  


// adding a event listner onClick to invoke a function to print "X" or "O" in the board 
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

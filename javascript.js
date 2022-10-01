class Knight {
    constructor([x, y]){
        this.position = [x, y]
        this.moves = null
    }

    calculateMoves = ([x, y]) => {
        let moves = []
        let newX = x - 1
        let newY = y + 2
        
        let checkBoardRange = (x, y) => {
            if (x >= 0 && x <= 7 && y >= 0 && y <= 7){
                return true
            }
            return false
        }

        if (checkBoardRange(newX, newY) == true){
            moves.push([newX, newY])
        }

        newX = x - 2
        newY = y + 1
        if (checkBoardRange(newX, newY) == true){
            moves.push([newX, newY])
        }

        newX = x - 2
        newY = y - 1
        if (checkBoardRange(newX, newY) == true){
            moves.push([newX, newY])
        }

        newX = x - 1
        newY = y - 2
        if (checkBoardRange(newX, newY) == true){
            moves.push([newX, newY])
        }

        newX = x + 1
        newY = y - 2
        if (checkBoardRange(newX, newY) == true){
            moves.push([newX, newY])
        }

        newX = x + 2
        newY = y - 1
        if (checkBoardRange(newX, newY) == true){
            moves.push([newX, newY])
        }


        newX = x + 2
        newY = y + 1
        if (checkBoardRange(newX, newY) == true){
            moves.push([newX, newY])
        }


        newX = x + 1
        newY = y + 2
        if (checkBoardRange(newX, newY) == true){
            moves.push([newX, newY])
        }

        return moves
    }
}

class Chessboard {
    constructor(){
        this.root = null
        this.x = 7
        this.y = 7
    }

    constructBoard = ([x, y]) => {

    }
}

let newK = new Knight([4,3])
console.log(newK.moves)


let secondK = new Knight([0,0])
console.log(secondK.moves)
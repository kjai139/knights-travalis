class Knight {
    constructor([x, y]){
        this.position = [x, y]
        this.moves = null
    }

    
}

class Chessboard {
    constructor(){
        this.root = null
        
    }

    calculateMoves = ([x, y]) => {
        let knight = new Knight([x,y])
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
        knight.moves = moves
        return knight
    }

    containsObj = (obj, arr) => {
        for (let i = arr.length; i> 0; i--){
            if (arr[i] == obj){
                return true
            }
            
        }
        return false
    }
   

    knightMoves = ([startX, startY], [endX, endY], level=0, visited =[], queue=[], found = false) => {
        
        
        if (found == true) {
            // console.log('moves taken:', level)
            return
        }
        queue.shift()
        level += 1
        
        if (this.containsObj(([startX, startY]), visited) == true) {

            return
        } else {
            visited.push([startX, startY])
        }
        this.root = this.calculateMoves([startX, startY])
        console.log(this.root.moves[0])
        this.root.moves.forEach(element => {
            if (element[0] == endX && element[1] == endY){
                
                found = true
                return
            }
            if (this.containsObj([element[0], element[1]], visited) == false && this.containsObj([element[0], element[1]], queue) == false ){
                queue.push([element[0], element[1]])
                
            }
        });
        
        console.log('q',queue)
        console.log('v', visited)

        console.log(queue[0][0], queue[0][1])
        while (queue.length > 1) {
            this.knightMoves([queue[0][0], queue[0][1]], [endX, endY], level, visited, queue, found)
        }
    
        

        



    
        

        
        
        
    
    }
    

}

let newBoard = new Chessboard

newBoard.knightMoves([3,3], [4,3])

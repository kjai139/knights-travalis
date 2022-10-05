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
        for (let i = 0; arr.length > i; i++){
            // console.log(arr[i])
            if (arr[i][0] == obj[0] && arr[i][1] == obj[1]){
                return true
            }
            
        }
        return false
    }
   

    knightMoves = ([startX, startY], [endX, endY], numOfMoves=0, visited =[], queue =[[startX, startY]]) => {
        
        
        
        while ((queue[0][0] == endX && queue[0][1] == endY) == false){
            
            this.root = this.calculateMoves([queue[0][0], queue[0][1]])
            
            visited.push([queue[0][0], queue[0][1]])
            queue.shift()
            
            
            
            
            this.root.moves.forEach(element => {
                if (this.containsObj(element, visited) == false && this.containsObj(element, queue) == false) {
                    queue.push(element)
                    console.log(queue)
                    
                    
                    
                }
                
                
            });
            numOfMoves += 1
            console.log('q', queue)

            console.log(queue)
            
            

            
            
            
            
            


        }
        
        console.log(numOfMoves)
    }

       

        
        
        
        


}

let newBoard = new Chessboard
// let randomarr = [[3,3], [3,6], [5,4]]
newBoard.knightMoves([3,3], [4,3])
// console.log(newBoard.containsObj([3,6], randomarr))



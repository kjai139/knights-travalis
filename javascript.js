class Knight {
    constructor([x, y]){
        this.position = [x, y]
        this.setPrev = (prev) => {
            this.prev = this.prev || prev
        }
        this.getPrev = () => this.prev
        
    
        
    }



    calculateMoves = ([x,y]) => {
        
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
            moves.push(new Knight ([newX, newY]))
        }

        newX = x - 2
        newY = y + 1
        if (checkBoardRange(newX, newY) == true){
            moves.push(new Knight ([newX, newY]))
        }

        newX = x - 2
        newY = y - 1
        if (checkBoardRange(newX, newY) == true){
            moves.push(new Knight([newX, newY]))
        }

        newX = x - 1
        newY = y - 2
        if (checkBoardRange(newX, newY) == true){
            moves.push(new Knight([newX, newY]))
        }

        newX = x + 1
        newY = y - 2
        if (checkBoardRange(newX, newY) == true){
            moves.push(new Knight([newX, newY]))
        }

        newX = x + 2
        newY = y - 1
        if (checkBoardRange(newX, newY) == true){
            moves.push(new Knight([newX, newY]))
        }


        newX = x + 2
        newY = y + 1
        if (checkBoardRange(newX, newY) == true){
            moves.push(new Knight([newX, newY]))
        }


        newX = x + 1
        newY = y + 2
        if (checkBoardRange(newX, newY) == true){
            moves.push(new Knight([newX, newY]))
        }
        return moves
    }
    
}

class Chessboard {
    constructor(){
        this.root = null
        
        
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
   
    knightMoves = ([startX, startY], [endX, endY], queue =[], board =[]) => {
        this.root = new Knight([startX, startY])
        queue.push([this.root])
        console.log(queue[0])
        
        while (!this.containsObj([endX, endY], queue)){
            return
        };
            
        
        console.log(this.root.prev)

        console.log('board', board)


        
    }

    
        
        


}

let newBoard = new Chessboard
newBoard.knightMoves([3,3], [4,3])



let testK = new Knight([1, 3])

let testZ = [new Knight([3,4])]

let test0 = new Knight([0,0])

console.log('testz', testZ)
console.log('getprev', testK.getPrev())

const enqlist = testZ.shift()
console.log('enq', enqlist)


const qlist = enqlist.moves

console.log(qlist)

console.log('test0 moves', test0.calculateMoves(test0.position))
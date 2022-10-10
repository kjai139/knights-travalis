class Chessboard {
    constructor(){
        this.start = null
        this.target = null
        this.moves = []
        this.visited =[]
        this.lastCord = []
        
        
    }

    makeBoard = (size = 8) => {
        for (let x = 0; x < size; x++){
            let row = []
            for (let y = 0; y < size; y++){
                row.push(false)
            }
            this.visited.push(row)
            
        }

        for (let x = 0; x < size; x++) {
            let row = []
            for (let y = 0; y < size; y++) {
                row.push(false)
            }
            this.lastCord.push(row)
        }
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


    // containsObj = (obj, arr) => {
        
    //     for (let i = 0; arr.length > i; i++){
    //         // console.log(arr[i])
    //         if (arr[i][0] == obj[0] && arr[i][1] == obj[1]){
    //             return true
    //         }
            
    //     }     
        
    //     return false
    // }
   
    knightMoves = ([startX, startY], [endX, endY]) => {
        if (startX > 7 || startY > 7 || endX > 7 || endY > 7) {
            console.log('invalid cords')
            return
        } else if (startX < 0 || startY < 0 || endX < 0 || endY < 0) {
            console.log('invalid cords')
            return
        }
        let queue = []
        let start = [startX, startY]
        queue.push(start)
        console.log(queue)

        

        while (queue.length > 0) {
            let cur = queue.shift()
            
            if (cur[0] == endX && cur[1] == endY) {
                console.log('found')
                break
            }
            let moves = this.calculateMoves([cur[0], cur[1]])
            console.log('moves', moves)
            
            moves.forEach(e => {
                
                if (this.visited[e[0]][e[1]] == true) {
                    return
                }
                queue.push(e)
                // console.log(queue)
                this.visited[e[0]][e[1]] = true
                console.log('bvisited', this.visited)
                this.lastCord[e[0]][e[1]] = [cur[0],cur[1]]

            });
            
        }

        let path = []
        let curC = [endX, endY]

        
        
        
        while (curC[0] !== start[0] || curC[1] !== start[1]) {
            path.unshift(curC)
            curC = this.lastCord[curC[0]][curC[1]]
            
        }
        path.unshift(start)
        console.log(`You made it in ${path.length-1} moves! Here's your path:`)
        path.forEach(element => {
            console.log(element)
        });
    }

   
    
        
        


}

let newBoard = new Chessboard
newBoard.makeBoard()

// newBoard.knightMoves([3,3], [4,5])

newBoard.knightMoves([0, 0], [7, 7])
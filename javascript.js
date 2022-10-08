class Knight {
    constructor([x, y]){
        this.position = [x, y]
        this.last = null
        
    
        
    }



    
    
}

class Chessboard {
    constructor(){
        this.start = null
        this.target = null
        this.moves = []
        this.visited =[]
        this.lastCord = []
        
        
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


    containsObj = (obj, arr) => {
        
        for (let i = 0; arr.length > i; i++){
            // console.log(arr[i])
            if (arr[i][0] == obj[0] && arr[i][1] == obj[1]){
                return true
            }
            
        }     
        
        return false
    }
   
    knightMoves = ([startX, startY], [endX, endY], queue =[]) => {
        
        queue.push(new Knight ([startX, startY]))
        console.log(queue)

      

        while (queue.length !== 0){
            let curSq = queue.shift()
            console.log('cursq1', curSq)
            console.log('q1', queue)
            
            // console.log(curSq.position, this.target.position)
            if (curSq.position[0] == endX && curSq.position[1] == endY){
                console.log('found')
                console.log('cur after found', curSq)
                break
            }

            
            console.log('cur after break', curSq)
            let enq = this.calculateMoves([curSq.position[0], curSq.position[1]])
            console.log('endq', enq)

            
            
            enq.forEach(move => {
                
                
                if (this.containsObj(move.position, this.visited)){
                 
                    return
                }
                move.last = curSq
                console.log('last move', move.last)
                queue.push(move)
                console.log('queue2', queue)
                this.visited.push(move.position)
                console.log('visit arr', this.visited)
                
                
                this.lastCord.push(move)
                console.log('last cord', this.lastCord)
                
               
            });
            
            
            
            
        };
        
        console.log('last cord', this.lastCord)
        const path = []
        let cur = new Knight([endX, endY])

        while (cur.position[0] != startX && cur.position[1] != startY) {
            path.unshift(cur.position)
            cur = this.lastCord[cur.position[0]][cur.position[1]]
            console.log('cur in while', cur)
        }
        path.unshift([startX, startY])
        console.log(path)
        // console.log('a', this.lastCord[7])
        // console.log('b', this.lastCord[7].last)
        // console.log('b', this.lastCord[7].last.last)

        // while (this.lastCord.length > 0) {
            
        //     let cur = this.lastCord.shift()
        //     console.log('currrrr', cur)
        //     let path = []
        //     if (cur.position[0] != startX && cur.position[1] != startY) {
        //         path.push(cur.position)
        //         cur = cur.last
        //         if (cur.last == null){
        //             return
        //         }
                
        //     } else {
        //         return path
        //     }
        //     console.log(path)

        // }

        // this.lastCord.forEach(element => {
        //     let cur = element
        //     console.log(cur, 'cur at beginning')
        //     if (cur.last == null){
        //         return
        //     }
        //     console.log('curp', cur.position[0])
        //     while (cur.position[0] != startX && cur.position[1] != startY) {
        //         console.log(cur.last)
                
        //         path.unshift(cur.position)
        //         if (cur.last == null){
        //             return
        //         }
        //         cur = cur.last
        //         console.log(cur, 'cur5')
        //         console.log(cur.position)
        //     }
        // });

        
        
        // while (cur.position[0] !== startX || cur.position[1] !== startY ) {
        //     console.log('cur', cur.position[0])
        //     path.unshift(cur.position)
        //     this.lastCord.forEach(element => {
        //         console.log('ele pos', element.position[0], element.position[1])
        //         if (element.position[0] == endX && element.position[1] == endY){
        //             console.log('match')
        //             console.log('ele last', element.last)
        //             cur = element.last[0]
        //             console.log('new cur', cur)
                    
        //             return
        //         }
        //     });
            
            
        // }

        
        
        // console.log('path', path)
            
      


        
    }

    
        
        


}

let newBoard = new Chessboard
newBoard.knightMoves([3,3], [4,3])


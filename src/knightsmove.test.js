import { expect } from "expect"
import { newBoard } from "./javascript"



it('1 move', () => {
    expect(newBoard.knightMoves([0, 0], [1,2])).toBe(1)
})


it('3 moves', () => {
    expect(newBoard.knightMoves([3, 3], [4,3])).toBe(3)
})


it('error', () => {
    expect(() => newBoard.knightMoves([8,8], [2,1])).toThrow(Error)
})
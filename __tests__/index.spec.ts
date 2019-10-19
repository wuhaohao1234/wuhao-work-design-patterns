import sum from '../src/index'

describe('sum', () => {
    test('sum求和', () => {
        expect(sum(1, 2)).toEqual(3)
    })
})
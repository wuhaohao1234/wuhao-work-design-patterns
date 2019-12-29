import fizzBuzz from '../src/index'
describe('FizzBuzz', () => {
    test('fizzBuzz函数存在', () => {
        expect(fizzBuzz).toBe(fizzBuzz)
    })
    test('输入１等于１', () => {
        expect(fizzBuzz(1)).toBe(1)
    })
    test('输入３等于fizz', () => {
        expect(fizzBuzz(3)).toBe('fizz')
    })
    test('输入5等于Buzz', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
    })
    test('输入15等于fizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('fizzBuzz')
    })
})
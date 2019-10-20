import Observer from '../src/index'

const observer = new Observer()

describe('Observer的方法', () => {
    test('add异步方法测试', () => {
        const inputOne = () => {
            console.log(1)
        }
        observer.add(inputOne).then((result) => {
            expect(result).toBe(inputOne)
        })
    })
    test('清空', () => {
        observer.empty().then((result) => {
            expect(result).toBe([])
        })
    })
    test('获取所有监听的函数', () => {
        expect(observer.getObserverList()).toEqual([])
    })
    test('添加函数', () => {
        const inputOne = () => {
            console.log(1)
        }
        const inputTwo = () => {
            console.log(2)
        }
        observer.add(inputOne).then((result) => {
            observer.add(inputTwo).then((resulted) => {
                resulted.forEach((itemCallback, key) => {
                    expect(resulted[key]).toBe(itemCallback)
                })
            })
        })
    })
    test('去除一个', () => {
        observer.spliceObserver(0).then((result) => {
            expect(result.length).toBe(1)
        })
    })
    test('执行', () => {
        observer.upDate()
    })
})
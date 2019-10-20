type ICallback = () => any

export default class Observer {
    private observerList: ICallback[] = []
    /**
     * @param add 向观察者添加监听函数
     * @argument callback 监听函数
     * @returns {ICallback[]} 返回监听函数的数组
     */
    public add(callback: ICallback): Promise<ICallback[]> {
        const pushObserver = () => {
            this.observerList.push(callback)
            return this.observerList
        }
        return Promise.resolve(pushObserver())
    }
    /**
     * @param empty 清空监听函数
     * @returns {ICallback[]} 返回监听函数的数组
     */
    public empty(): Promise<ICallback[]> {
        this.observerList = []
        return Promise.resolve(this.observerList)
    }
    /**
     * @param getObserverList 获取所有监听的函数
     */
    public getObserverList(): ICallback[] {
        return this.observerList
    }
    /**
     * @argument key 去除索引为number
     * @param spliceObserver
     * @returns {ICallback[]}
     */ 
    public spliceObserver(key: number): Promise<ICallback[]> {
        if (this.observerList[key]) {
            this.observerList.splice(0, key)
        }
        return Promise.resolve(this.observerList)
    }
    /**
     * @param upDate 执行所有监听的函数
     * @returns {ICallback[]} 返回监听函数的数组
     */
    public upDate(): Promise<ICallback[]> | Promise<string> {
        if (this.observerList.length === 0) {
            return Promise.resolve('没有监听的函数')
        }
        this.observerList.forEach((itemCallback: ICallback) => {
            itemCallback()
        })
        return Promise.resolve(this.observerList)
    }
}

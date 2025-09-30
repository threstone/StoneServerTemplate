
export class CommonUtils {
    /** 防抖 */
    static debounce(func: Function, delay: number) {
        let timeoutId: NodeJS.Timeout;
        return function (...args: any[]) {
            // 清除之前的定时器
            clearTimeout(timeoutId);
            // 设置新的定时器
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }
}

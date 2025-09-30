/** 相对准确的间隔定时器 */
export class IntervalTimer {
    private _nextLogicTime: number;

    /** 设置间隔 */
    private _interval: number;

    private _handler: Function;

    /** 检查间隔值,需要设置一个比间隔更小的数来确保准确性 */
    private _checkInterval: number;

    private _checkHandler: Function;

    private _timer: number;

    constructor(interval: number, handler: Function) {
        this._interval = interval;
        this._handler = handler;
        this._checkInterval = Math.floor(interval / 10);

        this._checkHandler = this.check.bind(this);
    }

    startTimer() {
        this._nextLogicTime = Date.now() + this._interval;
        this._timer = setInterval(this._checkHandler, this._checkInterval);
    }

    stopTimer() {
        clearInterval(this._timer);
    }

    private check() {
        const now = Date.now();
        if (now > this._nextLogicTime) {
            this._handler();
            this._nextLogicTime += this._interval;
        }
    }
}

/**
 * 以下实现废弃
 * 如果触发使用setImmediate会造成较大的性能损耗,虽然setImmediate可以达到较高的间隔精度
 * 综合下来使用setInterval(0)对性能的消耗不足setImmediate的千分之一
 * 而且在需要精确控制时间的情况下setInterval(0)的效果也可以接受
 */
// export class IntervalTimer {
//     private _nextLogicTime: number;

//     /** 设置间隔 */
//     private _interval: number;

//     private _handler: Function;

//     /** 检查间隔值,需要设置一个比间隔更小的数来确保准确性 */
//     private _checkInterval: number;

//     private _checkHandler: Function;

//     private _timer: NodeJS.Immediate | NodeJS.Timeout;

//     private _setTimeFunc: Function;

//     private _clearFunc: Function;

//     constructor(interval: number, handler: Function) {
//         this._interval = interval;
//         this._handler = handler;
//         this._checkInterval = Math.floor(interval / 3);

//         this._checkHandler = this.check.bind(this);
//         // 高于18ms的用interval   低于18ms的用immediate
//         if (this._interval > 15) {
//             this._setTimeFunc = setTimeout;
//             this._clearFunc = clearTimeout;
//         } else {
//             this._setTimeFunc = setImmediate;
//             this._clearFunc = clearImmediate;
//         }
//     }

//     startTimer() {
//         this._nextLogicTime = Date.now() + this._interval;
//         this.check();
//     }

//     stopTimer() {
//         this._clearFunc(this._timer);
//     }

//     private check() {
//         const now = Date.now();
//         if (now > this._nextLogicTime) {
//             this._handler();
//             this._nextLogicTime += this._interval;
//         }
//         this._timer = this._setTimeFunc(this._checkHandler, this._checkInterval);
//     }
// }

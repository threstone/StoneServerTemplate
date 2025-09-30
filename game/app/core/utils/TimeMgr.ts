import * as schedule from 'node-schedule';
import { EventEnum } from '../../Enum';
import { EventEmitter } from '../event/EventEmitter';

export class TimeMgr extends EventEmitter {
    /** 每日开始时间,凌晨0点 */
    static dayStartHour = 0;

    /** 错峰分钟数,决定beforeNewDay和afterNewDay的执行时间 */
    static offPeakMin = 10;

    static hourMs = 60 * 60 * 1000;

    static dayMs = 24 * TimeMgr.hourMs;

    static weekMs = TimeMgr.dayMs * 7;

    private static _ins: TimeMgr;

    static ins() {
        if (!TimeMgr._ins) {
            TimeMgr._ins = new TimeMgr();
        }
        return TimeMgr._ins;
    }

    /** 今日开始的毫秒时间戳 */
    get dayStartMs() { return this._dayStartMs; }

    private _dayStartMs: number;

    /** 今日格式化后的日期,参考:20241024(2024年10月24日) */
    get formatDay() { return this._formatDay; }

    private _formatDay: string;

    /** 今日格式化后的日期,参考:20241024(2024年10月24日) */
    get intFormatDay() { return this._intFormatDay; }

    private _intFormatDay: number;

    /** 当周开始的毫秒时间戳 */
    get weekStartMs() { return this._weekStartMs; }

    private _weekStartMs: number;

    /** 当周式化后的日期,参考:202401(2024年第一周) */
    get formatWeek() { return this._formatWeek; }

    private _formatWeek: string;

    /** 当周格式化后的日期,参考:202401(2024年第一周) */
    get intFormatWeek() { return this._intFormatWeek; }

    private _intFormatWeek: number;

    /** 当月开始的毫秒时间戳 */
    get monthStartMs() { return this._monthStartMs; }

    private _monthStartMs: number;

    /** 当月格式化后的日期,参考:202403(2024年3月) */
    get formatMonth() { return this._formatMonth; }

    private _formatMonth: string;

    /** 当月格式化后的日期,参考:202403(2024年3月) */
    get intFormatMonth() { return this._intFormatMonth; }

    private _intFormatMonth: number;

    constructor() {
        super();
        // *    *    *    *    *    *
        // ┬    ┬    ┬    ┬    ┬    ┬
        // │    │    │    │    │    │
        // │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
        // │    │    │    │    └───── month (1 - 12)
        // │    │    │    └────────── day of month (1 - 31)
        // │    │    └─────────────── hour (0 - 23)
        // │    └──────────────────── minute (0 - 59)
        // └───────────────────────── second (0 - 59, OPTIONAL)

        this.onNewDay(false);
        this.onNewWeek(false);
        this.onNewMonth(false);
        schedule.scheduleJob(`0 ${60 - TimeMgr.offPeakMin} ${(TimeMgr.dayStartHour + 24 - 1) % 24} * * *`, this.onBeforeNewDay.bind(this));
        schedule.scheduleJob(`0 0 ${TimeMgr.dayStartHour} * * *`, this.onNewDay.bind(this));
        schedule.scheduleJob(`0 ${TimeMgr.offPeakMin} ${TimeMgr.dayStartHour} * * *`, this.onAfterNewDay.bind(this));
        schedule.scheduleJob(`0 0 ${TimeMgr.dayStartHour} * * 1`, this.onNewWeek.bind(this));
        schedule.scheduleJob(`0 0 ${TimeMgr.dayStartHour} 1 * *`, this.onNewMonth.bind(this));
    }

    private onBeforeNewDay() {
        this.emit(EventEnum.BeforeNewDay);
    }

    private onNewDay(isEmit = true) {
        this._dayStartMs = TimeMgr.getDayStartMs();
        this._formatDay = TimeMgr.getFormatDay(this._dayStartMs);
        this._intFormatDay = Number(this._formatDay);
        if (isEmit) {
            this.emit(EventEnum.NewDay, this._formatDay);
        }
    }

    private onAfterNewDay() {
        this.emit(EventEnum.AfterNewDay);
    }

    private onNewWeek(isEmit = true) {
        this._weekStartMs = TimeMgr.getWeekStartMs();
        this._formatWeek = TimeMgr.getFormatWeek(this._weekStartMs);
        this._intFormatWeek = Number(this._formatWeek);
        if (isEmit) {
            this.emit(EventEnum.NewWeek, this._formatWeek);
        }
    }

    private onNewMonth(isEmit = true) {
        this._monthStartMs = TimeMgr.getMonthStartMs();
        this._formatMonth = TimeMgr.getFormatMonth(this._monthStartMs);
        this._intFormatMonth = Number(this._formatMonth);
        if (isEmit) {
            this.emit(EventEnum.NewMonth, this._formatMonth);
        }
    }

    /** 获取格式化后的日期,参考:20241024(2024年10月24日) */
    static getFormatDay(ts = Date.now()) {
        const date = new Date(ts);
        // 如果当前时间小于定义的每日开启时间,则减去一天
        if (date.getHours() < TimeMgr.dayStartHour) {
            date.setTime(ts - TimeMgr.dayMs);
        }
        // 获取日期的各个部分
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以需要+1
        const day = date.getDate().toString().padStart(2, '0');
        // 组合成YYYYMMDD格式
        return `${year}${month}${day}`;
    }

    /**
     * 获取格式化后的日期,参考:202401(2024年第一周)
     * 注意，如果一年的第一天不是周一，则一月一号这一周属于上一年的最后一周
     * 例如2025年1月1日与2024年12月31日属于同一周,带入时间戳都返回202453
     */
    static getFormatWeek(ts = Date.now()) {
        const date = new Date(ts);
        // 如果当前时间小于定义的每日开启时间,则减去一天
        if (date.getHours() < TimeMgr.dayStartHour) {
            date.setTime(ts - TimeMgr.dayMs);
        }

        let year = date.getFullYear();

        let firstMondayTime = TimeMgr.getYearFirstMondayTime(year);
        if (date.getTime() < firstMondayTime) {
            firstMondayTime = TimeMgr.getYearFirstMondayTime(year - 1);
            year -= 1;
        }
        const week = Math.ceil(
            (date.getTime() - firstMondayTime) / TimeMgr.weekMs,
        ).toString().padStart(2, '0');
        return `${year}${week}`;
    }

    /** 根据yyyymmdd数据返回Date对象 */
    static formatDayToDate(yyyymmdd: string | number) {
        const time = `${yyyymmdd}`;
        const year = time.slice(0, 4);
        const month = time.slice(4, 6);
        const day = time.slice(6, 8);
        const date = new Date(`${year} ${month} ${day} ${this.dayStartHour}:00`);
        return date;
    }

    private static getYearFirstMondayTime(year: number) {
        const firstDayOfYear = new Date(`${year}-01-01`);
        firstDayOfYear.setHours(TimeMgr.dayStartHour, 0, 0, 0);
        let firstMondayTime = this.getWeekStartMs(firstDayOfYear.getTime());
        // 此年第一天不是周一，则寻找下一周的周一
        if (firstDayOfYear.getDay() !== 1) {
            firstMondayTime += TimeMgr.weekMs;
        }
        return firstMondayTime;
    }

    /** 获取格式化后的日期,参考:202403(2024年3月) */
    static getFormatMonth(ts = Date.now()) {
        const date = new Date(ts);
        // 如果当前时间小于定义的每日开启时间,则减去一天
        if (date.getHours() < TimeMgr.dayStartHour) {
            date.setTime(ts - TimeMgr.dayMs);
        }
        // 获取日期的各个部分
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以需要+1
        // 组合成YYYYMMDD格式
        return `${year}${month}`;
    }

    /** 获取一天开始的时间戳 */
    static getDayStartMs(ts = Date.now()) {
        const newDate = new Date(ts);
        // 如果当前时间小于定义的每日开启时间,则减去一天
        if (newDate.getHours() < TimeMgr.dayStartHour) {
            newDate.setTime(ts - TimeMgr.dayMs);
        }
        newDate.setHours(TimeMgr.dayStartHour, 0, 0, 0);
        return Math.floor(newDate.getTime() / 1000) * 1000;
    }

    /** 获取一周开始的时间戳 */
    static getWeekStartMs(ts = Date.now()) {
        const newDate = new Date(ts);
        // 如果当前时间小于定义的每日开启时间,则减去一天
        if (newDate.getHours() < TimeMgr.dayStartHour) {
            newDate.setTime(ts - TimeMgr.dayMs);
        }
        newDate.setHours(TimeMgr.dayStartHour, 0, 0, 0);
        const day = newDate.getDay() || 7; // 获取星期几，周日为7
        return Math.floor(newDate.getTime() / 1000) * 1000 - (day - 1) * TimeMgr.dayMs;
    }

    /** 获取一月开始的时间戳 */
    static getMonthStartMs(ts = Date.now()) {
        const newDate = new Date(ts);
        // 如果当前时间小于定义的每日开启时间,则减去一天
        if (newDate.getHours() < TimeMgr.dayStartHour) {
            newDate.setTime(ts - TimeMgr.dayMs);
        }
        newDate.setDate(1); // 设置为月份的第一天
        newDate.setHours(TimeMgr.dayStartHour, 0, 0, 0);
        return Math.floor(newDate.getTime() / 1000) * 1000;
    }
}

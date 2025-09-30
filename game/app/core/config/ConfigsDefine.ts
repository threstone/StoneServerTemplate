/* eslint-disable no-unused-vars */
declare type define = string;
declare type SpineSkeletonData = any;
declare interface InitialItemsCfg {
   readonly id?: number;
   readonly newUserItem?: number[][];
}
declare interface RandomNameCfg {
   readonly id?: number;
   readonly firstName?: string;
   readonly secondName?: string;
}
declare interface ItemsCfg {
   readonly id?: number;
   readonly define?: define;
   readonly name?: string;
   readonly desc?: string;
   readonly type?: number;
   readonly subType?: number;
   readonly json?: number[][];
   readonly iconPath?: string;
   readonly quality?: number;
   readonly qualityEffect?: number;
   readonly isShow?: number;
   readonly popShow?: number;
   readonly tip?: string;
   readonly getLimit?: number[];
   readonly getway?: number[];
}
declare interface DropPoolCfg {
   readonly id?: number;
   readonly drawType?: number;
   readonly resetType?: number;
   readonly dropItems?: any;
   readonly timeCnt?: any;
}
declare interface EmailCfg {
   readonly id?: number;
   readonly define?: define;
   readonly title?: string;
   readonly text?: string;
   readonly vid?: number;
}
declare interface SensitiveWordCfg {
   readonly id?: number;
   readonly word?: string;
}

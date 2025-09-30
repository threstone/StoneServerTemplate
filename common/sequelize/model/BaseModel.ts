/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { Model } from 'sequelize-typescript';

export class BaseModel extends Model {
    getJsonData(argument: any[], defaultClass?: any) {
        const key = argument[0];
        const v = this.getDataValue(key);
        if (typeof (v) === 'string') {
            this.setDataValue(key, JSON.parse(v));
        }
        if (v == null) {
            this.setDataValue(key, defaultClass ? new defaultClass() : {});
        }
        return this.getDataValue(key);
    }

    getJsonArray(argument: any[]) {
        const key = argument[0];
        const v = this.getDataValue(key);
        if (typeof (v) === 'string') {
            this.setDataValue(key, JSON.parse(v));
        }
        if (v == null) {
            this.setDataValue(key, []);
        }
        return this.getDataValue(key);
    }

    getProtoData(argument: any[], ProtoClass: any) {
        const key = argument[0];
        const v = this.getDataValue(key);
        const localKey = `__${key}`;
        if (this[localKey]) {
            return this[localKey];
        }

        if (v == null) {
            this[localKey] = new ProtoClass();
        } else {
            this[localKey] = ProtoClass.decode(v);
        }

        return this[localKey];
    }

    setProtoData(argument: any[], ProtoClass: any) {
        const [value, key] = argument;
        const localKey = `__${key}`;
        this[localKey] = value;
        this.setDataValue(key, ProtoClass.encode(value).finish());
    }
}

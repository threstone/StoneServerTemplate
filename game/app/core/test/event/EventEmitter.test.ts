import * as assert from 'assert';
import { EventEmitter } from '../../event/EventEmitter';

describe('EventEmitter.test', () => {
    it("EventEmitter test", async function () {
        let triggerCount = 0;
        const eventName = 'name'
        EventEmitter.ins().once(eventName, (time: number) => {
            triggerCount += time;
        });
        EventEmitter.ins().on(eventName, (time: number) => {
            triggerCount += time;
        });

        EventEmitter.ins().emit(eventName, 2);
        EventEmitter.ins().emit(eventName, 2);
        assert.strictEqual(triggerCount, 6);
    });

    it('EventEmitter removeListenersByCaller test', function () {
        const em = new EventEmitter();
        em.on('test1', () => { }, this);
        em.on('test1', () => { }, this);
        assert.strictEqual(em.listeners('test1').length, 2);
        em.removeListenersByCaller(this);
        assert.strictEqual(em.listeners('test1').length, 0);

        em.on('test2', () => { }, this);
        assert.strictEqual(em.listeners('test2').length, 1);
        em.removeListenersByCaller(this);
        assert.strictEqual(em.listeners('test2').length, 0);

        em.on('test3', () => { }, this);
        em.removeListenersByCaller(this);
        assert.strictEqual(em.listeners('test3').length, 0);
    })
});

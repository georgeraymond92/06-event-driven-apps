'use strict';
const app = require('../app');
const emits = require('../emits');
const event = require('../events');

describe('testing the event emitter app' , () => {
    test('checking readFile function', () => {
        const spy = jest.spyOn(app, 'readFile');
        const emit = app.readFile('../files/test.txt');
        expect(spy).toHaveBeenCalled();
    });
    test('called alterFile function', ()=> {
        const spy = jest.spyOn(app, 'alterFile')
        const emit = app.alterFile();
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
    // test('checking writeFile function', () => {
    //     const spy = jest.spyOn(app, '');
    //     const emit = app.then();
    //     expect(spy).toHaveBeenCalled();
    // });

})
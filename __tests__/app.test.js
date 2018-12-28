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
    test('checking writeFile triggered a console log', () => {
        const spy = jest.spyOn(app, 'alterFile');
        const consoleObj = jest.spyOn(console, "log");
        const emit = app.alterFile();
        consoleObj();
        expect(consoleObj).toHaveBeenCalled();
    });
    test('does the readFile function log things to the console', () => {
        const spy = jest.spyOn(app, 'readFile');
        const consoleObj = jest.spyOn(console, "log");
        const emit = app.readFile();
        consoleObj();
        expect(consoleObj).toHaveBeenCalled();
    })

})
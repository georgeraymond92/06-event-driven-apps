'use strict';

const fs = require('fs');
const util = require('util');
const event = require('./events');
const emits = require('./emits');
const readFile = util.promisify(fs.readFile);


const alterFile = (file) => {
  readFile(file)
  .then(data => {
    
    let text = data.toString().toUpperCase();

    fs.writeFile( file, text, (err, data) => {
      if(err) { throw err; }
      event.emit('saved');
      console.log(`${file} saved`);
    })
  }).catch(err => {
    event.emit('error', err);
  })
};

let file = process.argv.slice(2).shift();

alterFile(file);

module.exports = {alterFile, readFile};

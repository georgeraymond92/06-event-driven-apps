const event = require('./events');

event.on('error', dealWithError);
event.on('saved', dealWithSave);

function dealWithSave(){
  console.log('the new file was saved');
}
    
function dealWithError(err) {
  console.log(err);
}
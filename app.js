let dm = require('./DataManager');
const MAX_SIZE = 10;
let count = 0;
let dataManager = new dm.DataManager();

dataManager.emitter.on(dataManager.emitter.EVENT_FILE, (name) => {
    console.log("new user from app",name);
    if (count<MAX_SIZE-1) {
        let j = Math.floor(Math.random() * Math.floor(MAX_SIZE));
        count++
        dataManager.writeStudent("Oleg"+j);
    } 
});

let j = Math.floor(Math.random() * Math.floor(MAX_SIZE));
dataManager.writeStudent("Oleg"+j);


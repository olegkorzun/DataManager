const EventEmmiter = require('events');

class MyEmit extends EventEmmiter {
    constructor () {
        super(); // 
        this.EVENT_FILE = "NEW_STUDENT_EVENT"
    }
}

module.exports = {
    MyEmit: MyEmit
}

fs = require('fs');
let me = require('./MyEmit');


class DataManager {

    constructor() {
        this.emitter = new me.MyEmit();
        this.FILE_NAME = "student1.json";
    }

    readStudent(result) {
        let stud = null;
        fs.readFile(this.FILE_NAME, "utf8", (error,data)=>{
            if(error) throw error; 
            stud = JSON.parse(data);
            result(stud);
        });
    }

    active (students) {
        for (let i=0; i<students.length; i++) {
            if (students[i].isActive) {
                console.log(students[i].name);
            }
        }
    }

    writeStudent(studentName) {
        let stud = [];
        fs.readFile(this.FILE_NAME, "utf8", (error,data)=>{
            if(!error) {
                if (data.indexOf(studentName) !== -1) {
                    this.emitter.emit(this.emitter.EVENT_FILE, null);
                    return;
                }
                stud = JSON.parse(data);
            }
            stud.push({"name": studentName,"isActive": true});
            let mm =JSON.stringify(stud);
            fs.writeFile(this.FILE_NAME,mm,(error)=>{
                if(error) throw error;
                this.emitter.emit(this.emitter.EVENT_FILE, studentName);
            });
        });
    }
}

module.exports = {
    DataManager: DataManager,
    emitter: this.emitter
}

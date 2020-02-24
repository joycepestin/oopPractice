//call function demo
let stud1 = {name: "Joyce Ann"};
let stud2 = {name: "Pedro Cruz"};

let study = function(subject)
{
    console.log(`${this.name}, is enrolled in ${this.subject}`);
}

//stud1.study("Science"); //di pwede kasi yung study function ay di kasama sa object --- it was defined outside the obj

//functions are objects in javascript

study.call(stud2, "Science");
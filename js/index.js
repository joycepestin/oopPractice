/*class Student
{
    constructor(name, course, section)
    {
        this.name = name;
        this.course = course;
        this.section = section;
    }

    enrolled(subject)
    {
        console.log(`${this.name} , ${this.course} , is enrolled in ${this.section}`);
        console.log(`He is studying ${subject}`);
    }
}

let stud1 = new Student("Joyce Ann Pestin" , "IT" , "2ITF");
stud1.enrolled("ICS2609");
*/

//Prototype - all the objects derived fmvthe same class can actually share

let stud1 = {name: "Joyce Ann " , course: "IT" , section: "2ITF" , 
study:function(subject)
{
    console.log(`${this.name}, is enrolled in ${subject}`);
}};

//calling the study method
//use the objcect syntx

let stud2 = {name: "Joyce" , course: "CS" , section: "2ITE"}; //di gagana kasi wlang study function

stud1.study("ICS2609");
const Employee = require("./Employee");
// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    };
  }
  
  module.exports = Intern;
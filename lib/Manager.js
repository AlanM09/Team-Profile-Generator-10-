const Employee = require("./Employee");

// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    };
  }
  
  module.exports = Manager;
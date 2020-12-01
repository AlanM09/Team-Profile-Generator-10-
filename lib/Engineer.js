const Employee = require("./Employee");
// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    };
  }
  
  module.exports = Engineer;
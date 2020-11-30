//fs read or write file
//inquirer ask user for stuff
//we need to call all our classes to use them
const Employee = require("./lib/Employee");

const inquirer = require("inquirer");
//holds all the cards
const employeeArray =  [];
//require in htmltemplate

//100% you will ask for name, id, email. and role
function mainMenu(){

}

//check your role... if manager
//ask for officenum
function getManger(answers){
    //ask for officeNum (inquirer)
    //ask are you done?
        //if done
        //create that instance of manager
       // push to employee Array
       //htmlTemplateRender(employeeArray)
        //display html (build the pic) fswritefile (index.html)
        //if not done? start again (mainMenu())
}


function getEngineer(answers){
     //ask for github (inquirer)
    //ask are you done?
        //if done
        //display html (build the pic)
        //if not done? start again (mainMenu())
}

function getIntern(anwers){
     //ask for school (inquirer)
    //ask are you done?
        //if done
        //display html (build the pic)
        //if not done? start again (mainMenu())
}




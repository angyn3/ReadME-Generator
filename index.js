// TODO: Include packages needed for this application
const inquirer =  require("inquirer");
const path = require ("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
{
    type:"input",
    name:"project",
    message:"What is the name of your project?",
    },
{
    type:"input",
    name:"description",
    message:"Please describe the purpose and fuctionality.",
    },
{
    type:"input",
    name:"installation",
    message:"What steps are required to install this project?",
    },
{
    type:"input",
    name:"usage",
    message:"What is the purpose of this file?",
    },
{
    type:"input",
    name:"contributors",
    message:"Please list the GitHub usernames of all contributors.",
    },
{
    type:"input",
    name:"tests",
    message:"Please describe what this file can do.",
    },    

{
    type:"list",
    name:"choices",
    message:"Choose license for your Repo!",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "None"],
    },




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  
    
  }
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then((response)=>{
  console.log ("Writing Document...")
  writeToFile("./output/Readme.md",generateMarkdown({ ...response }));
    })
  }


// Function call to initialize app
init();

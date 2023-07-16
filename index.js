// TODO: Include packages needed for this application
const inquirer =  require("inquirer");
const path = require ("path")
const fs = require("file-system")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
{
    type:"input",
    message:"What is the name of your project?",
    name:"project"
    },
{
    type:"input",
    message:"Please enter your project's description.",
    name:"description"
    },
{
    type:"input",
    message:"How to install this project?",
    name:"installation"
    },
{
    type:"input",
    message:"What is the purpose of this file?",
    name:"usage"
    },
{
    type:"input",
    message:"Who contributed to this document?",
    name:"contributor"
    },
{
    type:"input",
    message:"Please describe what this file can do.",
    name:"tests"
    },    

{
    type:"list",
    message:"Choose license for your Repo!",
    choices:["Mit","none",],
    name:"choices"
    }




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

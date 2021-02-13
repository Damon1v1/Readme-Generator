// Calling in all of our packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// Calling in our script to wirte the readme file
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?",
    },

    {
        type: "input",
        name: "email",
        message: "Please enter your e-mail",
    },

    {
        type: "input",
        name: "title",
        message: "What is your project's title?",
    },

    {
        type: "input",
        name: "description",
        message: "Please give a brief description of your project:"
    },

    {
        type: "input",
        name: "install",
        message: "What does the user need to know about installation?"
    },

    {
        type: "input",
        name: "test",
        message: "What does the user need to know about testing your project?"
    },

    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to your project?"
    },
    
    {
        type: "input",
        name: "credits",
        message: "Any collaborators on the project?"
    },

    {
        type: "list",
        name: "license",
        message: "What license is your project using?",
        choices: ["Mozilla Public License 2.0", "Academic Free License v3.0", "Microsoft Public License", "None"]
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
}

// function call to initialize program
init();

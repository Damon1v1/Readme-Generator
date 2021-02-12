const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
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
        name: "features",
        message: "What are the features of the project?"
    },

    {
        type: "input",
        name: "credits",
        message: "Please list your collaborators:"
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

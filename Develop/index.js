// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require(".Develop\.utils\generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project.",
    },
    {
        type: "input",
        name: "descripton",
        message: "Please explain the purpose and functionality of this project.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Pleasee select the license this project is utilizing.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: ```md![alt text](assets/images/screenshot.png)```",
    },
    {
        type: "input",
        name: "creator",
        message: "Please provide your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide a valid email address.",
    },
    {
        type: "input",
        name: "contributors",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        default: "",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

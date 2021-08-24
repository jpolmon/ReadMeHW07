// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['Please provide your github username', 'Please provide your email', 'Please provide your project title.', 'Please provide a brief description of the project.', 'Please provide the project installation instructions.', 'Please provide some useful usage information for the project.', 'Please provide instructions for contributing to the project.', 'Please provide project testing instructions.', 'What license does this project fall under?'];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./generatedReadme/${fileName}`, data, (err) => err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
            type: 'input',
            message: questions[0],
            name: 'title',
            },
            {
            type: 'input',
            message: questions[1],
            name: 'title',
            },
            {
            type: 'input',
            message: questions[2],
            name: 'title',
            },
            {
            type: 'input',
            message: questions[3],
            name: 'desc',
            },
            {
            type: 'input',
            message: questions[4],
            name: 'install',
            },
            {
            type: 'input',
            message: questions[5],
            name: 'usage',
            },
            {
            type: 'input',
            message: questions[6],
            name: 'contrib',
            },
            {
            type: 'input',
            message: questions[7],
            name: 'test',
            },
            {
            type: 'list',
            message: questions[8],
            name: 'license',
            choices: ['MIT', 'GPL', 'LGPL', 'Proprietary']
            },
        ])
        .then((response) => writeToFile('README.md', generateMarkdown(response)))
}

// Function call to initialize app
init();

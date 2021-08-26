// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['Please provide your github username', 'Please provide your email', 'Please provide your project title.', 'Please provide a brief description of the project.', 'Do you have an image you would like to include? (Please ensure it is named WebPageImage.png and located in the images folder)', 'Please provide the project installation instructions.', 'Please provide some useful usage information for the project.', 'Please provide instructions for contributing to the project.', 'Please provide project testing instructions.', 'What license does this project fall under?', 'If you selected a license type, who does the licence belong to? (If not you can just press Enter)'];

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
            message: questions[2],
            name: 'title',
            },
            {
            type: 'input',
            message: questions[3],
            name: 'Description',
            },
            {
            type: 'confirm',
            message: questions[4],
            name: 'imgConfirm',
            },            
            {
            type: 'input',
            message: questions[5],
            name: 'Installation',
            },
            {
            type: 'input',
            message: questions[6],
            name: 'Usage',
            },
            {
            type: 'input',
            message: questions[7],
            name: 'Contributing',
            },
            {
            type: 'input',
            message: questions[8],
            name: 'Testing',
            },
            {
            type: 'input',
            message: questions[0],
            name: 'github',
            },
            {
            type: 'input',
            message: questions[1],
            name: 'email',
            },
            {
            type: 'list',
            message: questions[9],
            name: 'License',
            choices: ['MIT', 'Apache 2.0', '3-clause BSD', 'None']
            },
            {
            type: 'input',
            message: questions[10],
            name: 'name',
            },
        ])
        .then((response) => writeToFile('README.md', generateMarkdown(response)))
}

// Function call to initialize app
init();

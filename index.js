// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe what this project does?'
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'What are the table of contents?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you utilize your project?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter license or copyright.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can another developer contribute to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test your application?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What questions do you have?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Success!');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        const markdown = generateMarkdown(response);
        writeToFile(response.title + '.md', markdown)
    });
}

// Function call to initialize app
init();

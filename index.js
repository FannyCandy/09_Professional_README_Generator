// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description for your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how your application can be used.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to your application?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What is the command to run tests?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['Apache 2.0', 'MIT', 'Unlicense']
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

    // Project title
    // Description
    // Installation instructions
    // Usage information
    // contribution guidelines
    // Tests instructions
    // License
    // Questions -- GitHub username, email address

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('README file has successfully generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answer) => {
            const readmeContent = markdown(answer);
            writeToFile('./result/README.md', readmeContent);
        });
}

// Function call to initialize app
init();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title <------------------
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions <------------------
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options <------------------
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username <------------------
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address <------------------
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents <------------------
// THEN I am taken to the corresponding section of the README
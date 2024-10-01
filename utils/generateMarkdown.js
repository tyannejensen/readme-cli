// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let result = ''
  // if license then return badge based on which license is passed in
  switch(license) {
    case 'apache':
      result = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
      break;
    case 'boost':
      result = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
      break;
    case 'bsd3':
      result = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
      break;
    case 'bsd2':
      result = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`;
      break;
    case 'CC01':
      result = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]';
      break;
  }
  return result;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let result = ''
  switch(license) {
    case 'apache':
      result = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'boost':
      result = `https://www.boost.org/LICENSE_1_0.txt`;
      break;
    case 'bsd3':
      result = `https://opensource.org/licenses/BSD-3-Clause`;
      break;
    case 'bsd2':
      result = `https://opensource.org/licenses/BSD-2-Clause`;
      break;
    case 'CC01':
      result = `http://creativecommons.org/publicdomain/zero/1.0/`;
      break;
    case 'attribution4.0International':
      result = `https://creativecommons.org/licenses/by/4.0/`;
      break;
  }
  return result;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
## License
${renderLicenseBadge(license)}(${renderLicenseLink(license)})
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, guidelines, installation, usage, license, contributing, tests, email, username}) {
  return `# ${title}
## Description:
${description}

## Table Of Contents:
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Guidelines](#Guidelines)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation:
${installation}

## Usage:
${usage}

## Guidelines:
${guidelines}

${renderLicenseSection(license)}

## Contributing:
${contributing}

## Tests:
${tests}

## Questions:
Here is the developers details in case you have any questions.

Email: ${email}

Username: ${username} 
`;
}

export default generateMarkdown;

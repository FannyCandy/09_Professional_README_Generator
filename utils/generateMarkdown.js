// const licenseBadges = [
//   { licenseName: 'Apache 2.0', badge: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' },
//   { licenseName: 'MIT', badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' },
//   { licenseName: 'Unlicense', badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)' }
// ]

const licenseBadges = [
  ['Apache 2.0', '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'],
  ['MIT', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
  ['Unlicense', '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)']
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
  for (const licenseBadge of licenseBadges) {
    if (license === licenseBadge[0]) {
      return licenseBadge[1]
    }
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // const renderBadge = licenseBadges.map(licenseBadge => {
  //   if (license === licenseBadge.licenseName) {
  //     return licenseBadge.badge;
  //   } else {
  //     return ""
  //   }
  // })

  // ${renderLicenseSection(data.license)}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle} 
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#how-to-contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.test}

  ## License
  This application is licensed under the terms of the ${data.license} license.

  ## Questions
  For any questions, please email me at [${data.email}](mailto:${data.email})
  or visit my GitHub [${data.gitHub}](https://github.com/${data.gitHub})

`;
}

module.exports = generateMarkdown;

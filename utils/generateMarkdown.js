// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Deployed Application URL
${data.link}

## Table of Content
* [Installation](#installation)
* [Contributors](#contributor)
* [Tests](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contributor}

## Tests
${data.tests}


`;
}

module.exports = generateMarkdown;
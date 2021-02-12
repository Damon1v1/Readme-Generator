// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## ${data.description}

## Features
${data.features}

## Credits
### Collaborators on this project
${data.credits}

## Contact
Inquiries into how to contribute to this project should be sent to ${data.email}




By ${data.GitHub} on github
`;
}

module.exports = generateMarkdown;

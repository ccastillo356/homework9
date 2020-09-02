const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "Title",
    },
    {
      type: "input",
      name: "Description",
      message: "Description",
    },
    {
      type: "input",
      name: "TableofContents",
      message: "Table of Contents",
    },
    {
      type: "input",
      name: "Installation",
      message: "Installation",
    },
    {
      type: "input",
      name: "Usage",
      message: "Usage",
    },
    {
      type: "input",
      name: "License",
      message: "License",
    },
    {
      type: "input",
      name: "Contributing",
      message: "Contributing",
    },
    {
      type: "input",
      name: "Tests",
      message: "Tests",
    },
    {
      type: "input",
      name: "Questions",
      message: "Questions",
    },
  ]);
}

function generateREADME(answers) {
  return `

    ${answers.Title}
    ${answers.Description}
    ${answers.TableofContents}
    ${answers.Installation}
    ${answers.Usage}
    ${answers.License}
    ${answers.Contributing}
    ${answers.Tests}
    ${answers.Questions}
  `;
}

promptUser().then(function (answers) {
  const README = generateREADME(answers);

  fs.writeFile("README.md", generateREADME, function (err) {
    if (err) throw err;

    console.log("Successfully wrote to README.md");
  });
});

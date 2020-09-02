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
import chalk from "chalk";
import inquirer from "inquirer";
const qna = await inquirer.prompt({
    name: "Quiz1",
    type: "list",
    message: "Who is the current captain of the Pakistan national cricket team?",
    choices: ["Babar Azam", "Shaheen Afridi", "M.Rizwan", "Imad Wasim"]
});
const qna1 = await inquirer.prompt({
    name: "Quiz2",
    type: "list",
    message: "What is the highest individual score by a Pakistani batsman in Test cricket?",
    choices: ["400*", "311", "380", "344"]
});
const qna2 = await inquirer.prompt({
    name: "Quiz3",
    type: "list",
    message: "Who is known as the Rawalpindi Express in Pakistan cricket?",
    choices: ["M.Amir", "Shoaib Akthar", "Shahid Afridi", "Shoaib Malik"]
});
const qna3 = await inquirer.prompt({
    name: "Quiz4",
    type: "list",
    message: "Which Pakistani bowler has the most Test wickets?",
    choices: ["Yasir Shah", "Shoaib Akthar", "Imran Khan", "Waqar Younus"]
});
const qna4 = await inquirer.prompt({
    name: "Quiz5",
    type: "list",
    message: "In which year did Pakistan win their first ICC Cricket World Cup?",
    choices: ["1980", "1991", "1999", "1992"]
});
if (qna.Quiz1 === "Babar Azam") {
    console.log(chalk.green("Question 1: Correct Answer"));
}
else {
    console.log(chalk.red("Question 1: Incorrect Answer"));
}
if (qna1.Quiz2 === "344") {
    console.log(chalk.green("Question 2: Correct Answer"));
}
else {
    console.log(chalk.red("Question 2: Incorrect Answer"));
}
if (qna2.Quiz3 === "Shoaib Akthar") {
    console.log(chalk.green("Question 3: Correct Answer"));
}
else {
    console.log(chalk.red("Question 3: Incorrect Answer"));
}
if (qna3.Quiz4 === "Yasir Shah") {
    console.log(chalk.green("Question 4: Correct Answer"));
}
else {
    console.log(chalk.red("Question 4: Incorrect Answer"));
}
if (qna4.Quiz5 === "1992") {
    console.log(chalk.green("Question 5: Correct Answer"));
}
else {
    console.log(chalk.red("Question 5: Incorrect Answer"));
}

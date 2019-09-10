# justice-pretask
Task used to determine the leanings of judicial cases, part of an academic experiment.

## what's required for this pretask?
- Must present all 7 cases for evaluation. (Should over all cases.)
- Users should only read 1 of the cases. (In other words, if you do the task once, you can't do it again.)
- In the task, users should be able to read the jury instructions, and case summary.
- In the tasks, users should be given the correct questions to answer.

## breakdown of components
1. display the case
2. making sure we cover all cases
3. giving users the survey

## ways to design this

### Displaying the cases
.md —> html —> embed the HTML
.md —> PDF —> embed a PDF
iFrame a link to a PDF

### Giving the user a case, and making sure we cover all cases
Create 6 different tasks and run simultaneously (each task has one version)
Create two tasks and randomize within cases
Create 1 task and randomly pick a case + a version
How do I keep track of features of each one?

### Asking the survey
Use an HTML form
- how do we keep track of survey data with this?
Use a builtin form, like Google Forms

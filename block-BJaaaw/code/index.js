// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

// take number from user using prompt
let num = prompt("Enter a number");
// prompt always returns string
// we will convert the value into number
num = Number(num);
// if the number divisible by 2 or not

if (num % 2 === 0) {
  alert("Number is even");
} else {
  alert("Number is odd!");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let a = Number(prompt("enter a number"));

let b = Number(prompt("enter second number"));

if (a > b) {
  alert("A is greater");
} else {
  alert("B is greater");
}
// 3. Convert the above code using`?` terniary operator

let a = Number(prompt("enter a number"));

let b = Number(prompt("enter second number"));

a > b ? alert("A is greater") : alert("B is greater");

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("enter the house name");
if (houseName === "stark") {
  alert("winter is coming");
} else if (houseName === "lannister") {
  alert("a lannister always pays his debt");
} else {
  alert("all men must die");
}

// 5. Convert the above code using`?` terniary operator
houseName === "stark"
  ? alert("winter is coming")
  : houseName === "lannister"
  ? alert("a lannister always pays his debt")
  : alert("all men must die");
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthName = prompt("enter the month name");
switch (monthName) {
  case "January":
    alert("Total number of days are 31");
    break;
  case "February":
    alert("Total number of days are 29");
    break;
  case "Mrach":
    alert("Total number of days are 31");
    break;
  case "April":
    alert("Total number of days are 30");
    break;
  case "May":
    alert("Total number of days are 31");
    break;
  case "June":
    alert("Total number of days are 30");
    break;
  case "July":
    alert("Total number of days are 31");
    break;
  case "August":
    alert("Total number of days are 31");
    break;
  case "September":
    alert("Total number of days are 30");
    break;
  case "October":
    alert("Total number of days are 31");
    break;
  case "November":
    alert("Total number of days are 30");
    break;
  case "December":
    alert("Total number of days are 31");
    break;
  default:
    alert("not a valid input");
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt("enter your salary"));
switch (true) {
  case salary <= 20000:
    let taxedAmount = (salary * 10) / 100;
    {
      alert("Your in-hand salary ${salary-taxedAmount}");
      break;
    }
  case salary <= 40000:
    let taxedAmount = (salary * 20) / 100;
    {
      alert("Your in-hand salary ${salary-taxedAmount}");
      break;
    }
  case salary > 50000:
    let taxedAmount = (salary * 30) / 100;
    {
      alert("Your in-hand salary ${salary-taxedAmount}");
      break;
    }
  default: {
    alert("not a  valid salary");
  }
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("enter your marks"));
if (marks > 100) {
  alert("Marks can't be greater than 100");
} else if (marks > 80 && marks < 100) {
  alert("Grade A");
} else if (marks > 50 && marks < 80) {
  alert("Grade B");
} else if (marks > 30 && marks < 50) {
  alert("Grade c");
} else marks > 0;
{
  alert("Grade D");
}

switch (true) {
  case marks > 100:
    alert("Marks can't be greater than 100");
    break;
  case marks > 80 && marks < 100:
    alert("Grade A");
    break;
  case marks > 50 && marks < 80:
    alert("Grade B");
    break;
  case marks > 30 && marks < 50:
    alert("Grade C");
    break;
  default:
    alert("Grade D");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outside ?");
switch (weather) {
  case "sunny":
    alert("Wear a T-shirt");
    break;
  case "rainy":
    alert("Don't forget to take your raincoat");
    break;
  case "hot":
    alert("Get a hanky");
    break;
  case "freezing":
    alert("Get your sweater on");
    break;
  default:
    alert("Not a valid input");
}

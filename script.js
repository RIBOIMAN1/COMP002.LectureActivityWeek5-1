myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) { // Changed i to equal 0 since JavaScript values start from 0 instead of 1. Also, changed the operating sign to "<" so that it would only access the required code necessary to complete this function and the function would be in bounds.

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);
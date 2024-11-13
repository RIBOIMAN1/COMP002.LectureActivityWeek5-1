myGrades = [100, 100, 90, 73, 78, 94, 86];
myAverage = 0;
for (let i = 0; i < myGrades.length; i++) { // Changed i to equal 0 since JavaScript values start from 0 instead of 1. Also, changed the operating sign to "<" so that it would only access the required code necessary to complete this function and the function would be in bounds.
    myAverage += myGrades[i];
}
myAverage = myAverage / myGrades.length;
console.log("My grade average is " + myAverage);

class InvalidValue extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidValue";
    }
} // Handles invalid values
function ValidateValue(num) {
    if (typeof num !== 'number') {
        throw new InvalidValue("Input is not a number.");
    }
    if (num < 0) {
        throw new InvalidValue("Number is less than 0.");
    }
    if (num > 100) {
        throw new InvalidValue("Number is greater than 100.");
    }
    return true;
} // Handles values between 0 and 100 and throws custom exceptions for values that don't fit this criteria
try {
    ValidateValue(2024);
} catch (error) {
    if (error instanceof InvalidValue) {
        console.error("Custom Error:", error.message);
}
    else {
        console.error("General Error:", error.message);
    }
} // Handles custom and general errors using try-catch blocks
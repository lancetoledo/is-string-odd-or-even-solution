// Create a function that when given a string as an argument
// return "true" if the length is even
// return "false" if the length is odd

//Example:
// Input: "robot"
// Output: false

let string = 'javascript';

function oddOrEven(string) {
  //Write code here
  if (string.length % 2 == 0) {
    return true;
  } else if (string.length % 2 == 1) {
    return false;
  }
}

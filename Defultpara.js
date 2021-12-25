function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}
document.getElementById("demo").innerHTML = myFunction(5);




//function defult example

function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));
  // expected output: 10
  
  console.log(multiply(5));
  // expected output: 5
  

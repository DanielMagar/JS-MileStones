/**
 * Write a JavaScript function called printPattern that takes a number n as an argument and prints a 
 * right triangle pattern of asterisks (*) to the console.
 * 
 */

function rightTrianglePatter(patternCount){
  for(let i=1; i <= patternCount; i++){
    let star="";
    for(let j = 0; j < i; j++){
        star += "*"
       
    }
    console.log(star)
  }
}

rightTrianglePatter(5);

/**
 * Code Break Down
 * #for (let i = 1; i <= patternCount; i++) {
     - This loop iterates from 1 to patternCount (inclusive). The variable i represents the current row number.
     - For example, if patternCount is 5, i will take the values 1, 2, 3, 4, and 5 in successive iterations.
 */

/**
 * #let star = "";
 * for (let j = 0; j < i; j++) {
    star += "*";
}

This inner loop runs i times. The variable j starts from 0 and continues until it reaches i - 1.
Each time the inner loop runs, an asterisk (*) is appended to the star string.
For example:

    - When i is 1, the inner loop runs 1 time, adding 1 asterisk: *
    - When i is 2, it runs 2 times, adding 2 asterisks: **
    - When i is 3, it runs 3 times, adding 3 asterisks: ***
    - This pattern continues for the value of patternCount.
-----------------------------
  # Putting It All Together

    - When you call rightTrianglePatter(5);, the function processes as follows:

    Iteration 1 (i = 1):
        star = *
        Output: *

    Iteration 2 (i = 2):
        star = **
        Output: **

    Iteration 3 (i = 3):
        star = ***
        Output: ***

    Iteration 4 (i = 4):
        star = ****
        Output: ****

    Iteration 5 (i = 5):
        star = *****
        Output: *****
 */
/*
-> Something repeated (Loops)
    - For
    for(initializtion, condition, increment) {
        ...code
    }
*/

function print100() {
  for (i = 1; i < 100; i++) {
    console.log(i);
  }
}

function sumOf(n) {
  sum = 0;
  for (i = 0; i < n; i++) {
    sum = sum + i;
  }

  console.log(sum);
}

sumOf(10);
sumOf(20);


function printMultiplication(n) {}

/*
    -> Product of n numbers (Factorial)
    -> Sum of all even numbers till n
    -> Sum of squares till number n
    -> Print a mulitple table
        1x1 = 1
        1x2 = 2
        ..
        1x10 = 10
    -> Febanoci
         1, 1, 2, 3, 5
    -> Sum, Product of all the integers in a number 123 => 1+2+3
    -> Patterns
        Pattern1:
            *******
        Pattern2:
            *******
            *****
            ***
            *
        Pattern3:
            *
           ***
          *****
           ***
            *
        Pattern4:
            ********
            *      *
            *      *
            *      *
            ********
*/

// Valid Parentheses
/*
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

// my solution

function validParentheses(parens) {
  //TODO
  while (parens.includes('()')) {
    (parens = parens.replace('()', '')), console.log('Parens:', parens);
  }
  if (parens == '') {
    return true;
  } else {
    return false;
  }
}

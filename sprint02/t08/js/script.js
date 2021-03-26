function checkBrackets(arg) {

    let stack = [];
  
    if (!(typeof arg === "string") || !arg.match(/[()]/)) {
      return -1;
    } else {
  
      for (let i = 0; i <= arg.length; i++) {
        if (arg.charAt(i) == "(") {
          stack.push("(");
        }
        if (arg.charAt(i) == ")") {
          stack.push(")");
        }
      }
      stack = stack.join("");
      
      for (let i = 0; i <= arg.length; i++) {
        stack = stack.replace(/\(\)/, "");
      }
    }
  
    return stack.length;
  }
  
  console.log(checkBrackets('1)()(())2(())')); 
  
const logicalError = () => {
  let a = 10;
  let b = 20;   
   if (num = 30) { // This is a logical error, should be '==' or '===' instead of '='
    console.log("The number is 30");
  }
}

module.exports = logicalError;
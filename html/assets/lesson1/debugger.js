var a = "bug!";
function potentiallyBuggyCode(param) {
  var b = "another bug!";
  // do potentially buggy stuff to examine, step through, etc.
  debugger;  
}
potentiallyBuggyCode("thing");
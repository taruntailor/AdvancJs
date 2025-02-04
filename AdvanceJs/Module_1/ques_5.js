// ● Replace Function Expressions with arrow functions in
// the code below:Function ask(question, yes, no)
// { if
// (confirm(question))y
// es(); elseno();
// } ask("Do you
// agree?",function()
// { alert("You agreed."); }, function() {
// alert("Youcanceled the execution."); }
// }
function ask(question, yes, no) {
     if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
  
  
  

function Output$2() {
  console.log("This is the default output");
}

function OutputOption1() {
  console.log("This is option 1 output");
}

var someVariable = 'default';

switch (someVariable) {
  case 'option1':
    OutputOption1();
    break;
  
  case 'default':
    Output$2();
    break;

  // other cases...
}

// This will log: "This is the default output"

// VAR - function-scoped
var num: number = 100;

function Var_Global_Variable() {
  if (true) {
    num = 200;
    console.log(num);
  }
  console.log(num);
}

Var_Global_Variable();
console.log(num);

function Var_Variable_within_Function() {
  if (true) {
    var num1 = 200;
    console.log(num1);
  }
  console.log(num1);
}

Var_Variable_within_Function();

// LET - block-scoped
let num2: number = 100;

function Let_Global_Variable() {
  if (true) {
    num2 = 200;
    console.log(num2);
  }
  console.log(num2);
}

Let_Global_Variable();

function Let_Block_Scope_Variable() {
  if (true) {
    let num3 = 200;
    console.log(num3);
  }
}

Let_Block_Scope_Variable();

// LET and CONST comparison
let score: number = 50;
score = 80;
console.log(score);

const maxScore: number = 100;
console.log(maxScore);

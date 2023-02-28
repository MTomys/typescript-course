function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(number: number) {
  console.log('Result ' + number);
}

function addAndHandle(n1: number, n2: number, cb: (n1: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(1, 2));

let combineValues: (n1: number, n2: number) => number;
combineValues = add;
console.log(combineValues(8, 8));

addAndHandle(10, 20, printResult);

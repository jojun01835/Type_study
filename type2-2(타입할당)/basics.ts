function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

// 타입스크립트에는 타입추론 기능이 있어서 변수에도 타입을 지정하는건 바람직하지 못하다
// 초기에 변수를 초기화하지 않으면 어떤값이 저장될지 알려주는건 가능하다 ex) let a : number;

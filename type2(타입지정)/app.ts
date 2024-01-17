function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);

console.log(result);

// 타입스크립트 기본 타입지정 number, string, boolean 등의 타입을 지정한다
// 타입지정 방법은 변수 옆 : 자료형 이런식으로 지정한다
// 매게변수의 지정타입이 다르면 오류를 발생시킨다

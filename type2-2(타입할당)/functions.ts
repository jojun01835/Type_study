function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result : " + num);
}

function addHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addHandler(10, 20, (result) => {
  console.log(result);
  return result;
});

// void 타입
// void는 함수에 리턴값이 없는 대부분의 경우에 사용한다
// 굳이 :void를 적지 않아도 알아서 타입 추론해준다

// 함수 타입
// 함수 타입은 어떤 타입의 합수를 사용할 것인지 정의할때 사용함
// 사용법은 변수명 : (매개변수1,매개변수2)=> 반환타입 이런식으로 사용함

// CallBack 함수
// Callback 함수는 return값을 void로 지정해놓으면 반환값을 반환해도 무시한다

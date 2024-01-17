let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "max";
if (typeof userInput === "string") {
  userName = userInput;
}

function generate(message: string, code: number): never {
  throw {
    message: message,
    errCode: code,
  };
}

const result = generate("An Error occurred!", 500);
console.log(result);

// unknown 타입
// unknown 타입은 any타입과 비슷하지만
//  userName = userInput; 이 코드를 실행하려고 하면 에러를 발생시킨다
// unknown 타입은 런타임에 타입이 보장되기 위해 if체크를 하기때문이다
// any보다 unknown이 안전하고 동적인 상황에서 타입을 안전하기 다루기 위해 사용된다

//never 타입
// never타입은 예외처리, 무한루프 등의 상황에서의 반환타입으로 사용된다.
// never는 코드 흐름분석에 사용된다

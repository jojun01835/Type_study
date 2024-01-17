type combineable = number | string;
type ConverT = "as-number" | "as-Text";

function combine(input1: combineable, input2: combineable, resultType: ConverT) {
  let result;
  if ((typeof input1 === "number" && typeof input2 === "number") || resultType === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
//   if (resultType === "as-number") {
//     return +result;
//   } else {
//     return result.toString();
//   }
//   return result;
// }

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "265", "as-number");
console.log(combineStringAges);

const combineNames = combine("jo", "jjun", "as-Text");
console.log(combineNames);

// 유니온 타입
// 유니온 타입은 복수의 타입을 지정하는것
// 하지만 if체크를 하는게 바람직함
// TS는 유니온타입인거만 체크하고 그 안에 있는 타입은 읽지않는다

// 리터럴 타입
// 리터럴 타입은 정확한 이름을 가진 타입을 사용하는것
// ex) resultType : 'as-number' | 'as-Text' 이런식으로 사용가능
// 위의 예시에서 'as-numbe'는 오류를 발생시킴 정확한 타입이 아니기때문
// 단점은 개발자가 리터럴 타입의 이름을 기억해야되는것
// 유니온 타입과 결합해서 사용하기도 함

// Type alias
// 맨위에 타입을 지정하는게 관습인듯함
// Type 별칭을 지어서 사용함 자주사용되는 방식은 유니온타입과 병행해서 사용하는듯
// Type alias 를 string 하나만 지정해서 사용하는 경우엔 가독성만 해침
// Type alias는 타입을 직접 생성하는것도 가능하다

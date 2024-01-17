// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "jo",
//   age: 30,
// };

// 튜플 예시

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "jo",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "jo",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin", "user"];

let Favorite: string[];
Favorite = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // 타입추론을 통해 hobby는 문자열이라서 UpperCase를 사용할수있음
  //   console.log(hobby.map()) 타입추론 기능을 이용해 hobby는 문자열이기 때문에 map을 사용하지 못함
}
// 타입스크립트의 객체생성 방식
// 타입스크립트의 배열은 const array :string[] 이런식으로 자료형[]으로 선언함
// 단 이렇게 선언된 자료형에 array = ['jo' , 1] 이런식으론 작성하지 못함
// any타입을 사용하면 가능한데 추천하지 않음

// 튜플(고정 길이 배열)
// 타입스크립트에서 튜플을 사용하려면 role: [number, string];
// 0번째와 1번째에 들어갈 데이터 타입을 지정해준다
// 예외가 있는데 push를 사용할 경우 에러처리를 안해준다
// person.role = [0, "admin", "user"]; 이 경우에는 에러처리를 해준다

//enum 사람이 읽을 수 있는 식발져가 필요하고 내부적으로 매핑된 값이 필요할 때 사용한다
// enum Role {
//     ADMIN,
//     READ_ONLY,
//     AUTHOR,
//   } 이런식으로 선언하고 각 첫번째부터 0의 숫자로 매핑되고 1씩 자동증가함
// ADMIN = 5 이렇게 지정도 가능함 그러면 5부터 1씩 자동증가함
// ADMIN = 'string' 문자열도 가능함

// var Role;
// (function (Role) {
//     Role[Role["ADMIN"] = 0] = "ADMIN";
//     Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
//     Role[Role["AUTHOR"] = 2] = "AUTHOR";
// })(Role || (Role = {}));
// TS를 컴파일하면 JS에선 이런식으로 변환됨

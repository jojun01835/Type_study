type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevateEmployee = Admin & Employee;

const e1: ElevateEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric; // 이러면 Universal은 타입을 숫자로 판단한다 겹치는 타입이 넘버라서

// 교차 타입
// 인터페이스와 유사하다
// 교차타입의 장점은 객체 타입을 조합시킬수도 있지만 객체가 아니여도 ㄱㅊ

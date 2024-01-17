type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name : " + emp.name);
  if ("privileges" in emp) {
    console.log("privileges : " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date : " + emp.startDate);
  }
}

printEmployeeInformation(e1);

printEmployeeInformation({ name: "jo", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Trick {
  drive() {
    console.log("Trick...");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo..." + amount);
  }
}

type Vehicle = Car | Trick;

const v1 = new Car();
const v2 = new Trick();

function useVehicle(Vehicle: Vehicle) {
  Vehicle.drive();
  if (Vehicle instanceof Trick) {
    // 이제 vehicle의 타입이 Trick 클래스인지를 확인
    Vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// 타입가드
// 유니온타입을 사용할때 타입이 여러개일수도 있는데 그걸 if체크로 걸러내는걸 말함
// 객체를 if체크 하는건 자바스크립트에서 typeof 연산자를 쓰는건 불가능하기 때문에
// if ("privileges" in emp) 이런식으로 한다
// instanceof 연산자로 체크하는 방법도 있음
// instanceof는 인터페이스에선 못씀 인터페이스는 JS에 없어서

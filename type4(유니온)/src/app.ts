type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

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
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Bird 인터페이스: 새를 나타내는 인터페이스
interface Bird {
  type: "bird"; // 문자열 리터럴 타입 "bird"
  flySpeed: number; // 새의 비행 속도
}

// Horse 인터페이스: 말을 나타내는 인터페이스
interface Horse {
  type: "horse"; // 문자열 리터럴 타입 "horse"
  runningSpeed: number; // 말의 달리기 속도
}

// Animal 타입: Bird와 Horse의 유니온 타입
type Animal = Bird | Horse;

// moveAnimal 함수: Animal을 매개변수로 받아 해당 동물의 속도를 출력
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flySpeed;
      console.log("새로 이동 중, 속도: " + speed);
      break;
    case "horse":
      speed = animal.runningSpeed;
      console.log("말로 이동 중, 속도: " + speed);
      break;
  }
}

// moveAnimal 함수를 호출하면서 Horse 타입의 객체 전달
moveAnimal({ type: "horse", runningSpeed: 10 });

// 인터페이스를 유니온 타입으로 만들었을 때 유용하게 쓸 수 있는 타입가드
// 인터페이스에 type을 추가해서 구분할수 있다

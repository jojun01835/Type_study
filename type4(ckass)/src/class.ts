abstract class Department {
  static fiscalYear = 2020;
  protected emply: string[] = [];
  constructor(protected readonly id: string, public name: string) {}
  static createEmployee(name: string) {
    return {
      name: name,
    };
  }
  abstract describe(this: Department): void;

  addEmplu(employ: string) {
    this.emply.push(employ);
  }

  printEmpoly() {
    console.log(this.emply.length);
    console.log(this.emply);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID " + this.id);
  }
}

class AccountingD extends Department {
  private lastReport: string;
  private static instance: AccountingD;

  get mostlastReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error(" no report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please pass in valid");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingD("d2", []);
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.emply.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }

  describe() {
    console.log("Accoung ID : " + this.id);
  }
}
const employ1 = Department.createEmployee("jojun0");
console.log(employ1, Department.fiscalYear);

const acc = new ITDepartment("d1", ["Max"]);
// const accting = new AccountingD("d2", []);
const accting = AccountingD.getInstance();

accting.mostRecentReport = "보고 안섭니다";
accting.addReport("보고 섭니다");
console.log(accting.mostlastReport);
accting.getReports();

acc.addEmplu("JO");
acc.addEmplu("MAX");

accting.describe();

// acc.describe();
// acc.printEmpoly();

// const accountingCopy = { name: "s", describe: acc.describe };

// accountingCopy.describe();

//Class
// class 생성방법 class 이름 여기서 이름은 첫글자는 대문자로 짓는게 관례
// class는 동일한 구조를 가지는 여러개의 객체를 쉽게 생성하는데 도움이 된다
// class 안에 정의되는 함수는 메서드라고 부른다
// constructor 키워드는 클래스를 기반으로 생성한 객체에 연결되는 함수이다
// constructor객체가 생성될때 동작함,인수를 받을수있음
// 객체 생성방법은 new 키워드를 사용한다

// this
// this는 일반적으로 호출한 객체를 참조한다
// 16번째 라인의 코드를 실행하면 this가 accountingCopy를 참조한다
// accountingCopy에는 name 프로퍼티가 없어서 undefined를 출력한다
// class 내부의 매서드의 매개변수로 this를 작성하면 항상 Department의 클래스 객체를 참조한다

// private
// 클래스 또는 생성된 객체 안에서만 프로퍼티를 접근하게 하고싶으면 private 키워드를 사용한다
// readonly
// readonly 속성을 사용하면 수정이 불가능하게 만들어준다

//extends
// 상속은 부모 클래스의 속성을 가져와서 사용할수있음
// super는 함수처럼 호출하고 super는 부모의 생성자를 인자로 받는다
// 생성자 안에서 this 키워드를 사용해 작업하기 전에 반드시 super를 먼저 호출해야함

// static
// new를 사용하지 않고 클래스 이름으로 사용하는거
// 프로퍼티에 static을 사용해서 불러오는것도 가능

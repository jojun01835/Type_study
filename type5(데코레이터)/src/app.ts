function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (originalconstructor: any) {
    return class<T> extends originalconstructor: T {
      constructor() {
        super();
        console.log("rendering...");
        const hookEl = document.getElementById(hookId);
        const p = new originalconstructor();
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("Logging - Person")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "MAX";

  constructor() {
    console.log("Createing Person Object...");
  }
}

const Pers = new Person();

console.log(Pers);

function Log(target: any, propertyName: string | symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price ");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 198);
const p2 = new Product("Book", 192);

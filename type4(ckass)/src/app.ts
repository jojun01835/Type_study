interface Greetable extends Nameed {
  readonly name?: string;

  greet(phrase: string): void;
}

interface AddFn {
  (a: number, b: number): number;
}

interface Nameed {
  readonly name?: string;
  outputName?: string;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (this.name) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("");
console.log(Person);

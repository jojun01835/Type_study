// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "MAX" }, { age: 30 });
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let Text = "Got no value.";
  if (element.length === 1) {
    Text = "Got 1 element";
  } else if (element.length > 1) {
    Text = "Got " + element.length + "element";
  }
  return [element, Text];
}

console.log(countAndPrint("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "max" }, "name"));

class DataStrage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStroage = new DataStrage<string>();
textStroage.addItem("Max");
textStroage.addItem("Manu");
textStroage.removeItem("Max");
console.log(textStroage.getItems());

const numberStroage = new DataStrage<number>();

// const objStorage = new DataStrage<object>();
// const MaxObj = { name: "Max" };
// objStorage.addItem(MaxObj);
// objStorage.addItem({ name: "Maue" });
// objStorage.removeItem(MaxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let Goal: Partial<CourseGoal> = {};
  Goal.title = title;
  Goal.description = description;
  Goal.completeUntil = date;
  return Goal as CourseGoal;
}

const names: Readonly<string[]> = ["MAX", "Anna"];
// names.push("Manu");

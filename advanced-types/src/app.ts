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
  name: 'michal',
  privileges: ['szef'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const universal: Universal = 2;
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('name' + emp.name);
  if ('privileges' in emp) {
    console.log('privileges' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('privileges' + emp.startDate);
  }
}

class Car {
  drive() {
    console.log('driving');
  }
}
class Truck {
  drive() {
    console.log('driving a truck');
  }
  loadCargo(amount: number) {
    console.log('loading cargo: ' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(2);
  }
}

// discriminated union

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case 'bird':
      console.log(animal.flyingSpeed);
      break;
    case 'horse':
      console.log(animal.runningSpeed);
  }
}

moveAnimal({ type: 'bird', flyingSpeed: 20 });

const paragraph = document.querySelector('p');
const nonNullParagraph = paragraph as HTMLParagraphElement;

const userInputElement = document.getElementById(
  'user-input'
) as HTMLInputElement;
userInputElement.value = 'Hi there!';

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character',
};

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, 5);

const someObj: any = {
  a: 1,
  b: 2,
};

console.log('break====');
console.log(someObj?.a);
console.log(someObj?.b);
console.log(someObj?.c?.d);
console.log('break====');

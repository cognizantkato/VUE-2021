const someNumber: number = 3;
const someBoolean: boolean = true;
const someEnum: "a" | "b" | "c" = "a";
const someNumberArray: number[] = [1, 2, 3];
const someName = "John Doe"; // string

function add(a: number, b: number): number {
    return a + b;
}

function someVoidFunction(message: string) {
    console.log(message);
}

interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    return "Hello " + person.name;
}
let b : number = 3;

const age : number = 25;
const isActive : boolean = true;
let fruits : string[] = ['Apple', 'Orange', 'Mango'];
const letterEnum: 'a' | 'b' | 'c' = 'a';
let firstName = 'Arvie';

function add(firstNumber: number, secondNumber: number): number{
    return firstNumber + secondNumber;
}

let sum = (x: number, y: number): number => {
    return x + y;
}

interface EntityName {
    firstName: string;
    lastName: string;
}

// interface Person extends EntityName {
//     age: number;
//     birthday: Date;
// }

type Employee = {
    employeeName: string;
    isActive: boolean;
}

export class Person {
    fullname: string;
    isActive: boolean;

    constructor(firstName: string, lastName: string){
        this.fullname = firstName + ' ' + lastName;
        this.isActive = true;
    }
}
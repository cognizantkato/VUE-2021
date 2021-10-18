const age: number = 25;
const isActive: boolean = true;
const fruits: string[] = ['Apple', 'Orange', 'Mango'];
const letterEnum: 'a' | 'b' | 'c' = 'a';
// let firstName = 'Arvie';

function add(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
}
// interface EntityName {
//     firstName: string;
//     lastName: string;
// }
// interface Person extends EntityName  {
//     age: number;
//     birthday: Date;
// }

// type Employee = {
//     employeeName: string;
//     isActive: boolean
// }

export class Person {
    fullName: string;
    isActive: boolean;

    constructor(firstName: string, lastName: string){
        this.fullName = firstName + ' ' +lastName;
        this.isActive = true;
    }
}
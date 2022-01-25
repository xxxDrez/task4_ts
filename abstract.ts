abstract class Employee {
    abstract first_name: string;
    abstract last_name: string;
    abstract get_salary(): number; 
}

class Manager extends Employee {

    constructor(
        readonly first_name: string,
        readonly last_name: string,
        readonly salary: number
    ){
        super();     
    }

    public get_salary(): number {
        return this.salary - this.salary * 0.13;
    }
}

class Agent extends Employee {
    public amountEmployee: number = 0;

    constructor (
        readonly first_name: string,
        readonly last_name: string,
        readonly moneyPerEmployee: number
    ){
        super();
    }

    public get_salary(): number {
        return this.amountEmployee * this.moneyPerEmployee - this.amountEmployee * this.moneyPerEmployee * 0.13;
    }
}

class Workman extends Employee {
    public amountHours: number = 0;

    constructor (
        readonly first_name: string,
        readonly last_name: string,
        readonly moneyPerHour: number
    ){
        super();
    }

    public get_salary(): number {
        return this.moneyPerHour * this.amountHours - this.moneyPerHour * this.amountHours * 0.13;
    }
}

const showSalary = (employee: Employee) => {
    console.log(`${employee.first_name} ${employee.last_name} has salary: \$${employee.get_salary()}`);
}

const sam = new Manager('Sam','Winchester', 1600);
const din = new Agent('Din', 'Winchester', 110);
const bob = new Workman('Bob', 'Winchester', 6);

din.amountEmployee = 8;
bob.amountHours = 174;

showSalary(sam);
showSalary(din);
showSalary(bob);
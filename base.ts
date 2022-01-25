class Employee {
    constructor(
        readonly first_name: string,
        readonly last_name: string,
        readonly salary: number
    ){}

    public get_salary(): number {
        return this.salary - this.salary * 0.13;
    }
}

class Manager extends Employee {}

class Agent extends Employee {
    public amountEmployee: number = 0;

    public get_salary(): number {
        return this.amountEmployee * this.salary - this.amountEmployee * this.salary * 0.13;
    }
}

class Workman extends Employee {
    public amountHours: number = 0;

    public get_salary(): number {
        return this.salary * this.amountHours - this.salary * this.amountHours * 0.13;
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
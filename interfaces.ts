interface Employee {
    readonly first_name: string,
    readonly last_name: string,
    readonly salary?: number,
    readonly moneyPerEmployee?: number,
    readonly moneyPerHour?: number,
    amountEmployee?: number,
    amountHours?: number,
    get_salary(): number
}

class Manager implements Employee {
    constructor(
        readonly first_name: string,
        readonly last_name: string,
        readonly salary: number
    ){}

    public get_salary(): number {
        return this.salary - this.salary * 0.13;
    }
}

class Agent implements Employee {
    public amountEmployee: number = 0;

    constructor(
        readonly first_name: string,
        readonly last_name: string,
        readonly moneyPerEmployee: number
    ){}

    public get_salary(): number {
        return this.amountEmployee * this.moneyPerEmployee - this.amountEmployee * this.moneyPerEmployee * 0.13;
    }
}

class Workman implements Employee {
    public amountHours: number = 0;

    constructor(
        readonly first_name: string,
        readonly last_name: string,
        readonly moneyPerHour: number
    ){}

    public get_salary(): number {
        return this.moneyPerHour * this.amountHours - this.moneyPerHour * this.amountHours * 0.13;
    }
}

const showSalary = (employee: Employee) => {
    console.log(`${employee.first_name} ${employee.last_name} has salary: \$${employee.get_salary()}`);
}

const sam: Employee = new Manager('Sam','Winchester', 1600);
const din: Employee = new Agent('Din', 'Winchester', 110);
const bob: Employee = new Workman('Bob', 'Winchester', 6);

din.amountEmployee = 8;
bob.amountHours = 174;

showSalary(sam);
showSalary(din);
showSalary(bob);
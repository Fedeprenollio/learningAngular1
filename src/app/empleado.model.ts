export class Employee {
  firstName: string = '';
  lastName: string = '';
  position: string = '';
  salary: number = 0;

  constructor(
    firstName: string,
    lastName: string,
    position: string,
    salary: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
  }
}

export class Algo{
  accessToken:string=""
}
import { Injectable } from '@angular/core';
import { Employee } from './empleado.model';
import { EmployeeServiceService } from './employee-service.service';
import { DataServices } from './services/data-services';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  // employees: Employee[] = [
  //   new Employee('Fede', 'Prenollio', 'Director', 10000),
  //   new Employee('Pepe', 'Sosa', 'Gerente', 5000),
  //   new Employee('Leo', 'Messi', 'Empleado', 2222),
  //   new Employee('Luisa', 'Diaz', 'Empleado', 2000),
  // ];
  employees: Employee[] = [];
  setEmployees(mysEmployees: Employee[]) {
    this.employees = mysEmployees;
  }

  constructor(
    private serviceWindow: EmployeeServiceService,
    private dataSerice: DataServices
  ) {}

  getAllEmployees() {
    return this.dataSerice.getEmployees();
  }

  addEmployeeService(newEmploye: Employee) {
    this.serviceWindow.showMessage('lo he logrado' + newEmploye.firstName);
    this.employees.push(newEmploye);
    this.dataSerice.saveEmployees(this.employees);
  }

  findEmployee(id: number): Employee {
    let employee = this.employees[id];

    return employee;
  }

  updateEmployeeService(index: number, employee: Employee) {
    // this.employees[index] = employee
    // this.dataSerice.updateEmployee(index, employee)

    let updatedEmployee = this.employees[index];

    updatedEmployee.firstName = employee.firstName;
    updatedEmployee.lastName = employee.lastName;
    updatedEmployee.salary = employee.salary;
    updatedEmployee.position = employee.position;

    this.dataSerice.updateEmployee(index, employee);
    this.dataSerice.saveEmployees(this.employees);
    this.dataSerice?.getEmployees()?.subscribe(res=>console.log(res))
  }

  deletedEmployee(index: number) {
    this.employees.splice(index, 1);
    this.dataSerice.deleteEmployee(index);
    this.dataSerice.saveEmployees(this.employees);
    this.dataSerice.getEmployees()?.subscribe(res=> console.log(res))
  }
}

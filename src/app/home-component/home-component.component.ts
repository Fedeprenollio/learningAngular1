import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employee } from '../empleado.model';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  title = 'App de empleados';
  employees: Employee[]= []


  constructor(private employeesSerice: EmployeesService){


    // TAMBIEN SE PUEDE INICIALIZAR CON onInit
  // this.employees =this.employeesSerice.employees
}

ngOnInit(): void {
  

  this.employeesSerice.getAllEmployees()?.subscribe({
    next: employees=> {
      console.log(employees)
      this.employees= Object.values(employees)
      this.employeesSerice.setEmployees(this.employees) 
     
    },
    error: error=> console.log(error),
    complete: ()=> {
      console.log("Finalizado")}
  })

}
  
  formFirstName:string=""
  formLasttName:string=""
  formPosition:string=""
  formSalary:number=0
  
  handleNewEmployee(){
  let newEmp=   new Employee(this.formFirstName, this.formLasttName, this.formPosition, this.formSalary )
  // this.myService.showMessage("creado" + " " + newEmp.firstName )
  // this.employees.unshift( newEmp )
  this.employeesSerice.addEmployeeService(newEmp)
  }
  
  
}

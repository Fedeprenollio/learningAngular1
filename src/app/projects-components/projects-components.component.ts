import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../empleado.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-projects-components',
  templateUrl: './projects-components.component.html',
  styleUrls: ['./projects-components.component.css']
})
export class ProjectsComponentsComponent {

  constructor(private router:Router, private employeesSerice: EmployeesService){

  }

  toHome():void{
     this.router.navigate([""])
  
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
  this.router.navigate([""])
  }
  


}

import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employee } from '../empleado.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent  implements OnInit{

  action: string=""


  constructor(private router:Router, private route:ActivatedRoute ,private employeesService: EmployeesService){

  }

  ngOnInit(): void {

    this.action = this.route.snapshot.queryParams['action']

    this.index = this.route.snapshot.params["id"]
    let employeeToUpdate: Employee= this.employeesService.findEmployee(this.index)
    this.formFirstName = employeeToUpdate.firstName
    this.formLasttName = employeeToUpdate.lastName
    this.formPosition = employeeToUpdate.position
    this.formSalary = employeeToUpdate.salary
  }

  toHome():void{
     this.router.navigate([""])
  
  }

  index: number= 0
  formFirstName:string=""
  formLasttName:string=""
  formPosition:string=""
  formSalary:number=0
  
  // updateEmployee(){
  // let newEmp=   new Employee(this.formFirstName, this.formLasttName, this.formPosition, this.formSalary )
  // // this.myService.showMessage("creado" + " " + newEmp.firstName )
  // // this.employees.unshift( newEmp )
  // this.employeesService.updateEmployeeService(this.index , newEmp)
  // this.router.navigate([""])
  // }

  // deleteEmployee(){
  //   this.employeesService.deletedEmployee(this.index)
  //   this.router.navigate([""])

  // }
  
  actionEmployee(){
    if(this.action === "1"){
      console.log("ghol")
      let newEmp=   new Employee(this.formFirstName, this.formLasttName, this.formPosition, this.formSalary )
      
      this.employeesService.updateEmployeeService(this.index , newEmp)
      this.router.navigate([""])

      }else if(this.action === "2"){
        this.employeesService.deletedEmployee(this.index)
        this.router.navigate([""])

      }else{
        this.router.navigate([""])

      }



    }
  
}

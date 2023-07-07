import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-characteristics',
  templateUrl: './employee-characteristics.component.html',
  styleUrls: ['./employee-characteristics.component.css']
})
export class EmployeeCharacteristicsComponent {

  constructor(private myService: EmployeeServiceService){}

@Output() employeeCharacteristics = new EventEmitter<string>()

addCharacteristics(value:string){
  this.myService.showMessage("Agregado: " + value)
  this.employeeCharacteristics.emit(value)
}

}

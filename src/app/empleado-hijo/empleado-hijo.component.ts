import { Component, Input } from '@angular/core';
import { Employee } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {


  @Input() employeeList: Employee | null = null
  @Input() index: number = 0


  characteristics:string[]  = [];

  addCharacteristic(newCharacterist: string) {
    this.characteristics?.push(newCharacterist);
  }




}

import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { LoginService } from './login/login.service';
import { DataServices } from './services/data-services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit {

    constructor(private loginServive: LoginService, private dataService: DataServices){ }


ngOnInit(): void {
  // initializeApp({
  //   apiKey: "AIzaSyDgsi2iBDWCFQrbYwfsrYqF4kEuEyE2Gko",
  // authDomain: "mis-clientes-2e993.firebaseapp.com",
  // })
}




  // employees: Employee[] = [
  //   new Employee('Fede', 'Prenollio', 'Director', 10000),
  //   new Employee('Pepe', 'Sosa', 'Gerente', 5000),

  //   new Employee('Leo', 'Messi', 'Empleado', 2222),

  //   new Employee('Luisa', 'Diaz', 'Empleado', 2000),
  // ];

isLoginIn(){
  return this.loginServive.isLoggedIn()
}

logout(){
   this.loginServive.logout()
  //  this.dataService.getEmployees().subscribe()
}



}

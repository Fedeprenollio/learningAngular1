import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../empleado.model';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class DataServices {
  constructor(private http: HttpClient, private loginService: LoginService) {}

  token:string= this.loginService.getIdToken()  
  url: string =
    `https://mis-clientes-2e993-default-rtdb.firebaseio.com/datos.json?auth=${this.token}`;


  saveEmployees(employees: Employee[]): void {
    this.http.put(this.url, employees).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }


  getEmployees(){
    let token= this.loginService.getIdToken()  

   const allEmployyes = this.http.get<Employee[]>(`https://mis-clientes-2e993-default-rtdb.firebaseio.com/datos.json?auth=${token}`)
    return allEmployyes
  }


  updateEmployee(index: number, employee: Employee){
    let token= this.loginService.getIdToken()  
    let url: string = `https://mis-clientes-2e993-default-rtdb.firebaseio.com/datos/${index}.json?auth=${token}`
    this.http.put(url, employee).subscribe({
      next: (v) => console.log("se ha modificado correctamente: ",v),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }



  deleteEmployee(index: number){
    let url: string = `https://mis-clientes-2e993-default-rtdb.firebaseio.com/datos/${index}.json`
    this.http.delete(url).subscribe({
      next: (v) => console.log("se ha eliminado correctamente: ",v),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
}

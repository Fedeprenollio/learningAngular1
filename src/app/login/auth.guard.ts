import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChildFn, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
// export class AuthGuard implements CanActivate {

//   constructor(private router: Router, private loginService: LoginService) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       if (this.loginService.isLoggedIn()) {
//         return true;
//       } else {
//         // Redireccionar al usuario a una ruta específica para no autenticados
//         this.router.navigate(['/login']);
//         return false;
//       }
//   }
  
// }
export class AuthGuard {

    constructor(private router: Router, private loginService: LoginService) {}
  
    canActivate: CanActivateFn = (
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
          console.log(this.loginService.isLoggedIn())
        if (this.loginService.isLoggedIn()) {
          // El usuario está autenticado, permitir la activación de la ruta
          return true;
        } else {
          // El usuario no está autenticado, redirigir a la página de inicio de sesión
          this.router.navigate(['login']);
          return false;
        }
    }
    
  }
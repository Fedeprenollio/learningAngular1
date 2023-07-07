import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import {
  Auth,
  getAuth,
  getIdToken,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { CookieService } from 'ngx-cookie-service';
import { DataServices } from '../services/data-services';

// import { initializeApp } from "firebase/app";
// import { UserCredential, UserInfo, getAuth,signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router, private cookieService: CookieService) {}

  token: string = '';
  // Initialize Firebase
  firebaseConfig = {
    apiKey: 'AIzaSyDgsi2iBDWCFQrbYwfsrYqF4kEuEyE2Gko',
    authDomain: 'mis-clientes-2e993.firebaseapp.com',
    databaseURL: 'https://mis-clientes-2e993-default-rtdb.firebaseio.com',
    projectId: 'mis-clientes-2e993',
    storageBucket: 'mis-clientes-2e993.appspot.com',
    messagingSenderId: '962389302988',
    appId: '1:962389302988:web:ce7f933355edcb35d96c69',
  };

  app = firebase.initializeApp(this.firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  auth = getAuth(this.app);

  login(email: string, password: string) {
    console.log('ACA NO ENTRA?');
    //  firebase.auth().signInWithEmailAndPassword(email, password)
    //     .then(response=>{
    //         console.log(response)
    //             firebase.auth().currentUser?.getIdToken().then(
    //                 token=>{
    //                     console.log("TOKEN: ", token)
    //                     this.token = token
    //                     this.router.navigate(["/"])
    //                     }
    //             )
    //         }
    //     )

    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Acceder al usuario y obtener el token
        const user = userCredential.user;
        // const token = (user as any)?.accessToken; // Conversión de tipo y acceso al token
        // this.token = token;
        // console.log("TOKEN::::::", token)
        getIdToken(user).then((token) => {
          this.token = token;
          this.cookieService.set("token", this.token)
          this.router.navigate(['/']);
    
        });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        this.router.navigate(['/about']);
      });
  }

  // var email = "test@example.com";
  // var password = "hunter2";
  // [START auth_signin_password]

  getIdToken() {
    // return this.token;
    return this.cookieService.get("token")
  }

  isLoggedIn() {
    // return this.token;
    return this.cookieService.get("token")

  }

  logout() {
    signOut(this.auth)
      .then(() => {
        console.log("TENGO QUe salir")
        this.token = '';
        this.cookieService.set("token", this.token)
        
        this.router.navigate([''])
       window.location.reload()
        // this.dataService.getEmployees()
      })
      .catch((err) => console.log(err));
  }
}

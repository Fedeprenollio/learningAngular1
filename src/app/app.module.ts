import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { EmployeeCharacteristicsComponent } from './employee-characteristics/employee-characteristics.component';
import { EmployeeServiceService } from './employee-service.service';
import { EmployeesService } from './employees.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentsComponent } from './projects-components/projects-components.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { ErrorNotfoundComponent } from './error-notfound/error-notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { DataServices } from './services/data-services';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './login/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    EmployeeCharacteristicsComponent,
    HomeComponentComponent,
    ProjectsComponentsComponent,
    AboutComponentComponent,
    ContactComponentComponent,
    UpdateComponentComponent,
    ErrorNotfoundComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EmployeeServiceService, EmployeesService, DataServices, LoginService , CookieService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

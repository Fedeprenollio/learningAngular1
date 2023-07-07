import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentsComponent } from './projects-components/projects-components.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { ErrorNotfoundComponent } from './error-notfound/error-notfound.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
  
  {
    path:"",
    component: HomeComponentComponent
},
{
  path:"proyects",
  component: ProjectsComponentsComponent,
  canActivate:[AuthGuard]
},
{
  path:"about",
  component: AboutComponentComponent
},
{
  path:"contact",
  component: ContactComponentComponent,
  canActivate: [AuthGuard]
},
{
  path:"update-comp/:id",
  component: UpdateComponentComponent
},
{
  path:"login",
  component: LoginComponent
},
{
  path:"**",
  component: ErrorNotfoundComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

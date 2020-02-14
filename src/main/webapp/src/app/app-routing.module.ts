import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./body/home/home.component";
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";
import {NoPageFoundComponent} from "./no-page-found/no-page-found.component";
import {RegisterSuccessComponent} from "./auth/register-success/register-success.component";
import {AddAnnounceComponent} from "./body/add-announce/add-announce.component";
import {ContactUsComponent} from "./body/contact-us/contact-us.component";

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'add-announce', component: AddAnnounceComponent},
  {path:'contact-us', component: ContactUsComponent},
  {path:'register', component: RegisterComponent},
  {path:'register-success', component: RegisterSuccessComponent},
  {path:'login', component: LoginComponent},
  {path:'**', component: NoPageFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

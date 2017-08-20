import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './../authentication/login/login.component'
import { RegisterComponent } from './../authentication/register/register.component'
import { HomeComponent } from './../home/home.component'
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component'

const routes: Routes = [
		{"path": 'login', "component": LoginComponent},
		{"path": 'register', "component": RegisterComponent},
		{"path": 'home', "component": HomeComponent},
		{"path": '', redirectTo: "/home", "pathMatch": 'full'},
		{"path": '**', "component": PageNotFoundComponent}
];
		
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})




export class AppRoutingModule { 



}

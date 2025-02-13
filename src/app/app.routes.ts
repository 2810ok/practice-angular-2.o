import { Routes } from '@angular/router';
import { DeptComponent } from './dept/dept/dept.component';
import { AboutComponent } from './about/about/about.component';
import { ConactComponent } from './contact/conact/conact.component';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './dept/dept/departments.component';

export const routes: Routes = [
    {path:"home",component:AppComponent},
    {path:"dept", component:DeptComponent,
    children:[
        {path:'department/title',component:DepartmentComponent}
    ]
    },
    {path:"about", component:AboutComponent},
    {path:"contact", component:ConactComponent},
    {path:'', redirectTo:'/home',pathMatch:"full"},//defult route 
    {path:'**',redirectTo:'/home',pathMatch:'full'}//path not match than ,
    
];

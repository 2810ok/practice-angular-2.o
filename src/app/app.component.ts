import { Component } from '@angular/core';
import { Route, RouterOutlet } from '@angular/router';
import { UserModule } from './user/user.module';
import { HeaderComponent } from './user/header/header.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { DirectiveDecorator } from '@angular/core';
import { EmpdataService } from './service/empdata.service';
import { DeptComponent } from './dept/dept/dept.component';
import { AboutComponent } from './about/about/about.component';
import { ConactComponent } from './contact/conact/conact.component';
import { RouterLink } from '@angular/router';
import { DepartmentComponent } from './dept/dept/departments.component';
import { Router } from '@angular/router';
@Component({
  
  selector: 'app-root',
  imports: [DepartmentComponent,RouterOutlet,RouterLink,ConactComponent,AboutComponent,DeptComponent,RouterOutlet,UserModule,HeaderComponent,GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'MyPractice';
  msg:string="this welcome from parent componot";
  
constructor( private route:Router){}
userLogin=0;
showLogin()
{
  if(this.userLogin==0)
    {
this.route.navigate(['about']);}
else{
//alert 'user dont exit';
}

}
  cmsg:string="";
  recivemsg(event: string)
  {
    this.cmsg=event;
  }
   
  parentMessage: string = 'Initial Message';

  changeMessage() {
    this.parentMessage = 'Message changed from Parent!';
  }
  
 
}

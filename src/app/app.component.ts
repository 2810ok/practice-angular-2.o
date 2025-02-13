import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserModule } from './user/user.module';
import { HeaderComponent } from './user/header/header.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { DirectiveDecorator } from '@angular/core';
import { EmpdataService } from './service/empdata.service';

@Component({
  
  selector: 'app-root',
  imports: [RouterOutlet,UserModule,HeaderComponent,GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'MyPractice';
  msg:string="this welcome from parent componot";

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

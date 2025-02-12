import { CommonModule } from '@angular/common';
import { Component , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: '.app-header',
  imports: [FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  fontsize=25;
  val:number=11;
     userName:string="";
     LastName:string="dies"
     change()
     {
      this.userName="omkar";
     }
     changeTojoy()
     {
      this.userName="joy";
     }
     value:string="";
   
     user:number=0;
     books=["ami","never give up","rich and pooor dad"  ];
    book="aim";
    getMsg()
    {
      return  this.book;
    }
    @Input() msg='';
    @Output() cmsg: EventEmitter<string>=new EventEmitter<string>();
  sendData()
  {
    this.cmsg.emit("this msg from child comepont");
  }
}

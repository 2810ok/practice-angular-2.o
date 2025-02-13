import { Component, SimpleChanges,Input } from '@angular/core';
import { OnChanges , OnInit,OnDestroy} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DirectiveDecorator } from '@angular/core';
import { CustomePipe } from '../../pipes/custome.pipe';
import { EmpdataService } from '../../service/empdata.service';
CustomePipe
@Component({
  selector: 'app-gallery',
  imports: [FormsModule,CommonModule,CustomePipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent  implements OnChanges,OnInit,OnDestroy{
  amount=0;
  datetoday:string="";
   username:string="joy";
  display:boolean=true;
  public empdata:any[]=[];
  remove()
  {
  this.display=false;
  }
 constructor(private emp:EmpdataService)
 {
console.log("this is constructor")
this.datetoday=new Date().toDateString();

 }

  ngOnInit()
  {
   console.log("in init method");
   this.empdata=this.emp.getEmpdata();

  }
  @Input() receivedMessage: string = ''; 
  ngOnDestroy(): void {
   console.log("destroy method");
  }
  // This method will be triggered when `receivedMessage` changes
  ngOnChanges(changes: SimpleChanges) {
    if (changes['receivedMessage']) {
      const previousValue = changes['receivedMessage'].previousValue;
      const currentValue = changes['receivedMessage'].currentValue;

      console.log(`receivedMessage changed from ${previousValue} to ${currentValue}`);
    }
   


    
}
}

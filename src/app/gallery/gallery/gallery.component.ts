import { Component, SimpleChanges,Input } from '@angular/core';
import { OnChanges , OnInit,OnDestroy} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DirectiveDecorator } from '@angular/core';
@Component({
  selector: 'app-gallery',
  imports: [FormsModule,CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent  implements OnChanges,OnInit,OnDestroy{
  display:boolean=true;
  remove()
  {
  this.display=false;
  }
 constructor()
 {
console.log("this is constructor")
 }

  ngOnInit()
  {
   console.log("in init method");
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

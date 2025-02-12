import { Directive, ElementRef ,OnInit,Renderer2} from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective implements OnInit {

  constructor(private el:ElementRef,private re:Renderer2) { 
   

  }
ngOnInit(): void {
  this.re.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
  //this.el.nativeElement.style.color="red";
}
}

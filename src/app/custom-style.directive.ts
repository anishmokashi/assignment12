import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private eref:ElementRef) 
  { 
    this.eref.nativeElement.style.backgroundColor='yellow';
    //setting static baground colour as yellow 

    this.eref.nativeElement.style.fontWeight="bold";
    //setting bagorund of font as bold
  }

}

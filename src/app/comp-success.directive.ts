import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private erf:ElementRef) 
  { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolur('green');
  }
  setcolur(colur:string)
  {
    this.erf.nativeElement.style.color=colur;
  }
@HostListener('mouseleave')onmouseleave()
{
  this.setcolur('black');
}
}
/*hotslistener is used to listen the event happend 
we import element  ref inbuilt class through dependency injection

when mouse enters a particular region then we call onmouseenter 
method which is present in elementref class
in mouse enter method we call setcolor method which takes colour as a 
argument and set the desired colour

onmouse leave method sense that mouse has leaved the particular region then 
it changes the colour to black by calling setcolor method

*/
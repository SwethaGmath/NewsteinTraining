import { Directive, Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import {HostListener} from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {
@Input('appAppHighlight') highlightColor : string;

  constructor(private elRef:ElementRef) {
    //elRef.nativeElement.style.backgroundColor='yellow';
   }
   
  private highlight(color:string){
    this.elRef.nativeElement.style.backgroundColor=color;
  }
@HostListener('mouseenter')
onmouseenter()
{
  this.highlight(this.highlightColor);
}

@HostListener('mouseleave')
onmouseleave()
{
  this.highlight(null);
}
}

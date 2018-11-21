import { Directive } from '@angular/core';
import { ElementRef, Input , HostListener} from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  @Input('appTextColor') textingColor:string;
  
  constructor(private ele:ElementRef) { 
    //el.nativeElement.style.color = "darkblue";
  }
  private colorText(tColor:string){
    this.ele.nativeElement.style.backgroundColor = tColor ;
  }
 

  @HostListener('click')
  onclick()
  {
    this.colorText(this.textingColor || 'pink');
  }
  
}

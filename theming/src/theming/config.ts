import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[]'
})
export class DirectivasColor {


  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }
  
  @Input() color: String | any ;
  
  ngOnChanges() {
    switch(this.color) {
      case 'success':
        this.el.nativeElement.style.background = '#8fc93a';
        return ;
        
        case 'warning':
          this.el.nativeElement.style.background = "#c02c2c";
          return ;
          
          
          case 'info':
            this.el.nativeElement.style.background = "#fa7200";
            return ;

      default:
        break;
    }
  }
}
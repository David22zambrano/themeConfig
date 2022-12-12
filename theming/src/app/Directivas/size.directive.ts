import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
@Directive({
  selector: '[size]',
})
export class SizeDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.customProperty = true;
  }
  @Input() size: any;

  ngOnChanges() {
    let typeElement = this.el.nativeElement.localName;
    switch (this.size) {
      case 'small':
        if (typeElement === 'mat-chip') {
          this.el.nativeElement.style.height = '24px';
          this.el.nativeElement.style.paddingInline = '8px';
          this.el.nativeElement.style.fontSize = '13px';
        } else if (typeElement === 'button') {
          this.el.nativeElement.style.height = '30px ';
          this.el.nativeElement.style.fontSize = '13px';
        } else if (typeElement === 'mat-form-field') {
          this.el.nativeElement.classList.add('small');
          this.el.nativeElement.style.height = '70px ';
          this.el.nativeElement.style.fontSize = '16px';
        } else if (typeElement === 'mat-checkbox') {
          this.el.nativeElement.classList.add('small');
        } else if (typeElement === 'mat-slider') {
          this.el.nativeElement.classList.add('small');
        } else if (typeElement === 'mat-radio-button') {
          this.el.nativeElement.classList.add('small');
        } else if (typeElement === 'mat-icon') {
          this.el.nativeElement.style.fontSize = '20px ';
        } else if (typeElement === 'mat-spinner') {
          this.el.nativeElement.classList.add('small');
        }
        return;
      case 'large':
        if (typeElement === 'button') {
          this.el.nativeElement.style.padding = '20px 19px';
          this.el.nativeElement.style.fontSize = '15px';
        } else if (typeElement === 'mat-checkbox') {
          this.el.nativeElement.classList.add('large');
        } else if (typeElement === 'mat-radio-button') {
          this.el.nativeElement.classList.add('large');
        } else if (typeElement === 'mat-icon') {
          this.el.nativeElement.style.height = '30px';
          this.el.nativeElement.style.width = '33px';
          this.el.nativeElement.style.fontSize = '35px ';
        }
        return;
      default:
        return;
    }
  }
}

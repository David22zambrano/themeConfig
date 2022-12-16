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
    function SetStyle(
      element: {
        style: {height: string;
          paddingInline: string;fontSize: string;
          padding: string;width: string;
        };
        classList: { add: (arg0: string) => void };
      },
      heightCase: string,fontSizeCase: string,
      paddingInlineCase: string,classCase: string,
      paddingCase: string,widthCase: string
    ) {
      if (heightCase) {
        element.style.height = heightCase;
      }
      if (paddingInlineCase) {
        element.style.paddingInline = paddingInlineCase;
      }
      if (fontSizeCase) {
        element.style.fontSize = fontSizeCase;
      }
      if (classCase) {
        element.classList.add(classCase);
      }
      if (paddingCase) {
        element.style.padding = paddingCase;
      }
      if (widthCase) {
        element.style.width = widthCase;
      }
    }
    switch (this.size) {
      case 'small':
        if (typeElement === 'mat-chip' && 'mat-chip-option') {
          SetStyle(this.el.nativeElement,
            '24px','13px','8px',
            'undefined','undefined','undefined'
          )
        }
        if (typeElement === 'mat-chip-option') {
          SetStyle(this.el.nativeElement,
            '24px','13px','8px',
            'undefined','undefined','undefined'
          );
        } else if (typeElement === 'button') {
          SetStyle(this.el.nativeElement,
            '30px','13px','undefined',
            'undefined','undefined','undefined'
          );
        } else if (typeElement === 'mat-form-field') {
          SetStyle(this.el.nativeElement,
            '70px','16px','undefined',
            'small','undefined','undefined'
          );
        } else if (
          typeElement === 'mat-checkbox' || typeElement === 'mat-slider' ||
          typeElement === 'mat-radio-button' || typeElement === 'mat-spinner' ||
          typeElement === 'table'
        ) {
          SetStyle(this.el.nativeElement,
            'undefined','undefined','undefined',
            'small','undefined','undefined'
          );
        } else if (typeElement === 'mat-icon') {
          SetStyle(this.el.nativeElement,
            'undefined','20px','undefined',
            'undefined','undefined','undefined'
          );
        }
        return;
      case 'large':
        if (typeElement === 'button') {
          SetStyle(this.el.nativeElement,
            'undefined','15px','undefined',
            'undefined','20px 19px','undefined'
          );
        } else if (typeElement === 'mat-checkbox' || typeElement === 'mat-radio-button'
        ) {
          SetStyle(this.el.nativeElement,
            'undefined','undefined','undefined',
            'large','undefined','undefined'
          );
        } else if (typeElement === 'mat-icon') {
          SetStyle(this.el.nativeElement,
            '30px','35px','undefined',
            'undefined','undefined','33px'
          );
        }
        return;
      default:
        return;
    }
  }
}

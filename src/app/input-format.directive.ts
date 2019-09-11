import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('inputFormat') format;
  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log('on Focus');
  }

  @HostListener('keyup') onKeyUp() {
    const value: string = this.el.nativeElement.value;
    console.log('on keyup');
    if (this.format == 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

  @HostListener('blur') onBlur() {
    console.log('on Blur');
    const value: string = this.el.nativeElement.value;
    console.log(this.format);

    if (this.format == 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}

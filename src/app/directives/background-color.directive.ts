import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  @Input('appBackgroundColor')
  backgroundColor: string = 'white';

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
  }

}

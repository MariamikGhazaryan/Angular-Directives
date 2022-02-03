import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appShowAfter]'
})
export class ShowAfterDirective {

  @Input('appShowAfter')
  showAfter: number = 0;

  constructor(private templateRef: TemplateRef<HTMLElement>,
              private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, this.showAfter)
  }

}

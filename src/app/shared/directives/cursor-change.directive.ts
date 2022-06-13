import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[cmCursorChange]'
})
export class CursorChangeDirective {

  @Input()
  cmCursorChange: string = "pointer";

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.cursor = this.cmCursorChange;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.cursor = this.cmCursorChange;
  }

}

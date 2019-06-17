import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropdownDirective implements OnInit {

  @HostBinding('class.open') opened = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleOpen() {
    this.opened = !this.opened;
    if (this.opened) {
      this.renderer.addClass(this.elementRef.nativeElement,  'open');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
  }

  ngOnInit(): void {}
}

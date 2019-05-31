import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight') highlightColor = 'blue';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }
  set appBetterHighlight(condition: boolean) {

  }
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') mouseOver(eventData: Event) {
  //  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
//    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
   this.backgroundColor = this.defaultColor;
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

}

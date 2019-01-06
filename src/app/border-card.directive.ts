import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[pkmnBorderCard]' })
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  @HostListener('mouseover') onHover() {
    this.setBorder(this.borderColor || this.defaultColor);
    // window.alert("hover");
  }

  private setBorder(color: string) {
    let border = 'solid 4 px ' + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }
}
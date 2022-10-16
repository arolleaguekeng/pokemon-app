import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/*
 * Customise Border of one component.
 * Can take the hover color as an argument.
*/ 

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {
  initialColor = '#f5f5f5';
  defautColor = '#009688';
  defautHeight = 180;

  constructor(private el: ElementRef) { 
    this.setBorder("#f5f5f5");
    this.setHeight(180);
  }

  // Allow to user of custom border color
  @Input('pkmBorderCard') borderColor: string;

  // Listen when mouse inter in the card
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defautColor);
  }

  // Listen when mouse leave the card
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  // To set height of card.
  private setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  // To set  border color of card.
  private setBorder(color: string){
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}

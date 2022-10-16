import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 
    this.setBorder("#f5f5f5");
    this.setHeight(180);
  }

  // Listen when mouse inter in the card
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder("#009688");
  }

  // Listen when mouse leave the card
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder("#f5f5f5");
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

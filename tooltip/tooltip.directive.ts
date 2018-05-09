import { Directive, HostListener, Input, ElementRef, HostBinding, Version } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  host: {
    '[style.position]': '"relative"',
    }
})
export class TooltipDirective {

  @Input() tooltip;
  $tooltip: Element;
  
  @HostBinding('class.tooltip') className = true;

  @HostListener('mouseover')
  onHover() {
    this.$tooltip = document.createElement('span');
    this.el.nativeElement.appendChild(this.$tooltip);
    this.$tooltip.textContent = this.tooltip;
    this.$tooltip.className = 'tooltip-text';
   this.$tooltip['style']['backgroundColor'] = "black";
   this.$tooltip['style']['color'] = "white";
   this.$tooltip['style']['padding'] = "5px 0";
   this.$tooltip['style']['border-radius'] = "5px";
   this.$tooltip['style']['top'] = "0px";
   this.$tooltip['style']['left'] = "50%";
   this.$tooltip['style']['width'] = "100px";
   this.$tooltip['style']['position'] = "absolute";
   console.log(this.$tooltip)
  }

  @HostListener('mouseleave')
  onLeave() {
    this.el.nativeElement.removeChild(this.$tooltip)
  }

  constructor(private el: ElementRef) { }


}

import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[truncateFade]',
  standalone: true,
})
export class TruncateFadeTextDirective implements AfterViewInit {
  /** Character limit before truncation */
  private readonly limit = 110;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    // Get visible text (ignores hidden text nodes)
    const text = this.el.nativeElement.textContent?.trim() || '';

    if (text.length > this.limit) {
      this.renderer.addClass(this.el.nativeElement, 'truncate-4-lines-fade');
    }
  }
}

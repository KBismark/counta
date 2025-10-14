import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[typo]',
  standalone: true
})
export class TypographyDirective implements OnChanges, OnInit {
  @Input('typo') typo: string = '';

  private previousTypo: string = '';
  private typographyMap: { [key: string]: string } = {
    // Headings
    'h1': 'text-4xl font-bold leading-tight md:text-5xl',
    'h2': 'text-3xl font-bold leading-tight md:text-4xl',
    'h3': 'text-2xl font-bold leading-tight md:text-3xl',
    'h4': 'text-xl font-bold leading-tight md:text-2xl',
    'h5': 'text-lg font-bold leading-tight md:text-xl',
    'h6': 'text-base font-bold leading-tight md:text-lg',

    'h1!': 'text-4xl! font-bold! leading-tight! md:text-5xl!',
    'h2!': 'text-3xl! font-bold! leading-tight! md:text-4xl!',
    'h3!': 'text-2xl! font-bold! leading-tight! md:text-3xl!',
    'h4!': 'text-xl! font-bold! leading-tight! md:text-2xl!',
    'h5!': 'text-lg! font-bold! leading-tight! md:text-xl!',
    'h6!': 'text-base! font-bold! leading-tight! md:text-lg!',

    // Body text
    'body': 'text-base leading-relaxed',
    'body-lg': 'text-lg leading-relaxed md:text-xl',
    'body-sm': 'text-sm leading-relaxed',

    // Sizes
    'xs': 'text-xs leading-tight',
    'sm': 'text-sm leading-relaxed',
    'md': 'text-base leading-relaxed',
    'lg': 'text-lg leading-relaxed',
    'xl': 'text-xl leading-relaxed',
    '2xl': 'text-2xl leading-relaxed',

    // Buttons
    'button': 'text-base! font-bold! pb-2.5! pt-2! px-4! cursor-pointer',
    'button-text': 'text-base! font-bold!',
  };

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.updateClasses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['typo']) {
      this.updateClasses();
    }
  }

  private updateClasses(): void {
    const host = this.elementRef.nativeElement;

    // Remove old classes if switching from a previous typo
    if (this.previousTypo) {
      const oldClasses = this.typographyMap[this.previousTypo]?.split(' ') || [];
      oldClasses.forEach(cls => host.classList.remove(cls));
    }

    // Add new classes
    const newClasses = this.typographyMap[this.typo]?.split(' ') || [];
    newClasses.forEach(cls => host.classList.add(cls));

    this.previousTypo = this.typo;
  }
}
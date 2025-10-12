import { Component, computed, input } from '@angular/core';
import { CategoryCard } from "../category-card/category-card";
import { CommonModule } from '@angular/common';
import { ButtonDirective} from "primeng/button";
import { TypographyDirective } from "@/core/typography";
@Component({
  selector: 'inverted-corner-section',
  imports: [CategoryCard, CommonModule, ButtonDirective, TypographyDirective],
  templateUrl: './inverted-corner-section.html',
  styleUrl: './inverted-corner-section.css'
})
export class InvertedCornerSection{
  public colorClass = input<string>('');
  public title = input<string>('');
  public invertedCorner = input<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top-right');

  protected classNames = computed(() => {
    switch (this.invertedCorner()) {
      case 'top-right':
        return 'pt-4 pb-2 pr-4';
      case 'top-left':
        return 'pt-4 pb-2 pl-4';
      case 'bottom-right':
        return 'pt-2 pb-4 pr-4';
      case 'bottom-left':
        return 'pt-2 pb-4 pl-4';
      default:
        return '';
    }
  });
}

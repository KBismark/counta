import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { CategoryCard } from "../category-card/category-card";
import { CommonModule, SlicePipe } from '@angular/common';
import { ButtonDirective} from "primeng/button";
import { TypographyDirective } from "@/core/typography";
import { HomeSectionType } from '@/interfaces/sections';
import { RouterLink } from "@angular/router";
import { DescriptionSlugifyPipe, SlugifyPipe } from '@/core/slugify-url-pipe';
import { Crypto } from '@/services/crypto';
@Component({
  selector: 'inverted-corner-section',
  imports: [CategoryCard, CommonModule, ButtonDirective, TypographyDirective, RouterLink, SlugifyPipe, SlicePipe],
  providers: [SlugifyPipe],
  templateUrl: './inverted-corner-section.html',
  styleUrl: './inverted-corner-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvertedCornerSection{
  protected crypto = inject(Crypto);
  protected slugify = inject(SlugifyPipe);
  public colorClass = input<string>('');
  public _title = input<string>('');
  public invertedCorner = input<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top-right');
  public data = input.required<HomeSectionType>()
  protected items = computed(()=>this.data().items.slice(0,6));
  protected slug = computed(()=>this.slugify.transform(this.data().name));

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

import { CategoryCardType } from '@/interfaces/cards';
import { CommonModule, SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { TypographyDirective } from "@/core/typography";
import { RouterLink } from '@angular/router';
import { SlugifyPipe } from '@/core/slugify-url-pipe';
import { Crypto } from '@/services/crypto';

@Component({
  selector: 'category-card',
  imports: [CommonModule, TypographyDirective, RouterLink, SlugifyPipe, SlicePipe],
  providers: [SlugifyPipe],
  templateUrl: './category-card.html',
  styleUrl: './category-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryCard {
    public className = input<string>('')
    public data = input.required<CategoryCardType>();
    protected crypto = inject(Crypto);
    protected slugify = inject(SlugifyPipe);
    protected items = computed(()=>this.data().items.slice(0,5));
    protected slug = computed(()=>this.slugify.transform(this.data().name));
    protected sectionGridStyle = computed(() => {
      
      const length = this.data().items.length;
      if (length === 1) {
        return {
          container: 'grid-cols-1',
          item: ['col-span-1']
        };
      } 
      if (length === 2) {
        return {
          container: 'grid-cols-2',
          item: ['col-span-2']
        };
      }
      if (length === 3) {
        return {
          container: 'grid-cols-2',
          item: ['col-span-2', 'col-span-1']
        };
      }
      if (length === 4) {
        return {
          container: 'grid-cols-2',
          item: ['col-span-1']
        };
      }
      return {
        container: 'grid-cols-4',
        item: ['col-span-4 h-[150%]', 'col-span-1 h-[40%] max-md:mt-[130%] mt-[100%]']
      };
    });
}

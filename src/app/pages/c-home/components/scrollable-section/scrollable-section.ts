import { Component, computed, inject, input } from '@angular/core';
import { Carousel } from "primeng/carousel";
import { CategoryCard } from "../category-card/category-card";
import { HomeSectionType } from '@/interfaces/sections';
import { TypographyDirective } from "@/core/typography";
import { ButtonDirective } from "primeng/button";
import { SlugifyPipe } from '@/core/slugify-url-pipe';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Crypto } from '@/services/crypto';

@Component({
  selector: 'scrollable-section',
  imports: [Carousel, CategoryCard, TypographyDirective, ButtonDirective, RouterLink, SlugifyPipe, SlicePipe],
  providers: [SlugifyPipe],
  templateUrl: './scrollable-section.html',
  styleUrl: './scrollable-section.scss'
})
export class ScrollableSection {
  protected crypto = inject(Crypto);
  protected slugify = inject(SlugifyPipe);
  public className = input<string>('');
  public colorClass = input<string>('');
  public numberOfSections = input<1|2>(1);
  public _title = input<string>('');
  public data = input.required<HomeSectionType>();
  protected slug = computed(()=>this.slugify.transform(this.data().name));
  protected sectionedItems = computed(()=>{
    const numberOfSections =  [1,2].includes(this.numberOfSections())?this.numberOfSections():1;
    const items = this.data().items;
    const max = 10;
    const min = 6;
    const itemsPerSection = Math.max(Math.min(Math.ceil(items.length / numberOfSections), max), min);
    const sectionedItems = [];
    for (let i = 0; i < numberOfSections; i++) {
      sectionedItems.push(items.slice(i * itemsPerSection, (i + 1) * itemsPerSection));
    }
    return sectionedItems;
  });

  carouselResponsiveOptions: any[] = [
    {
        breakpoint: '1120px',
        numVisible: 3,
        numScroll: 2
    },
    // {
    //     breakpoint: '768px',
    //     numVisible: 2,
    //     numScroll: 2
    // },
    {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 1,
    }
];
}

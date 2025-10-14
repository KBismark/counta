import { Component, computed, input } from '@angular/core';
import { Carousel } from "primeng/carousel";
import { CategoryCard } from "../category-card/category-card";
import { HomeSectionType } from '@/interfaces/sections';
import { TypographyDirective } from "@/core/typography";
import { ButtonDirective } from "primeng/button";

@Component({
  selector: 'scrollable-section',
  imports: [Carousel, CategoryCard, TypographyDirective, ButtonDirective],
  templateUrl: './scrollable-section.html',
  styleUrl: './scrollable-section.scss'
})
export class ScrollableSection {
  public className = input<string>('');
  public colorClass = input<string>('');
  public numberOfSections = input<1|2>(1);
  public _title = input<string>('');
  public data = input.required<HomeSectionType>();
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

  heroCarouselItems = [
    {
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
      title: 'Hero Carousel Item 1',
      description: 'Hero Carousel Item 1 Description',
      color: 'green',
      class: 'trapezoid-shape h-full!',
    },
    {
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
      title: 'Hero Carousel Item 2',
      description: 'Hero Carousel Item 2 Description',
      color: 'blue',
      class: 'inner-curve-shape mx-4',
    },
    {
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
      title: 'Hero Carousel Item 3',
      description: 'Hero Carousel Item 3 Description',
      color: 'red',
      class: 'rounded-lg mx-4',
    },
    {
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
      title: 'Hero Carousel Item 4',
      description: 'Hero Carousel Item 4 Description',
      color: 'purple',
      class: 'squircle-shape mx-4',
    },
    {
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
      title: 'Hero Carousel Item 5',
      description: 'Hero Carousel Item 5 Description',
      color: 'orange',
      class: 'inverted-radius-shape mx-4',
    },
    {
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg',
      title: 'Hero Carousel Item 6',
      description: 'Hero Carousel Item 6 Description',
      color: 'pink',
      class: 'trapezoid-down-shape h-[calc(100%-80px)] mb-16 -mt-6',
    }
    
  ].map((item,index) => ({...item, index}));

  carouselResponsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 2
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 1,
    }
];
}

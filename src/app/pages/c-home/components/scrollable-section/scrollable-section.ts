import { Component } from '@angular/core';
import { Carousel } from "primeng/carousel";
import { CategoryCard } from "../category-card/category-card";

@Component({
  selector: 'app-scrollable-section',
  imports: [Carousel, CategoryCard],
  templateUrl: './scrollable-section.html',
  styleUrl: './scrollable-section.scss'
})
export class ScrollableSection {
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

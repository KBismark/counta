import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { ScreenContainer } from "@/layout/component/container.layout";
import { Carousel } from "primeng/carousel";
import { CategoryCard } from "./components/category-card/category-card";
import { TypographyDirective } from "@/core/typography";
import { ButtonDirective } from "primeng/button";
import { InvertedCornerSection } from "./components/inverted-corner-section/inverted-corner-section";
import { mockedHomeSection, sneakersSection } from './data/section.mocked';
import { ScrollableSection } from "./components/scrollable-section/scrollable-section";

@Component({
  selector: 'app-c-home',
  imports: [Header, ScreenContainer, Carousel, InvertedCornerSection, ScrollableSection],
  templateUrl: './c-home.html',
  styleUrl: './c-home.css'
})
export class CHome {
  constructor() {
    // Override the onTouchMove prototype to disable swipe
    Carousel.prototype.onTouchMove = (): void => undefined;
  }
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
    }
    
  ].map((item,index) => ({...item, index}));

  carouselResponsiveOptions: any[] = [
    {
        breakpoint: '1024px',
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

  public homeSection = mockedHomeSection;
}

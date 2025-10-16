import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PageLayout } from "@/layout/component/page.layout";
import { Carousel } from "primeng/carousel";
import { ScreenContainer } from "@/layout/component/container.layout";
import { CFilter } from "@/shared/c-filter/c-filter";
import { MOCK_FILTER_GROUPS } from '../c-home/data/filter.mocked';
import { mockedHomeSection } from '../c-home/data/section.mocked';
import { NgClass, SlicePipe } from '@angular/common';
import { SlugifyPipe } from '@/core/slugify-url-pipe';
import { RouterLink } from '@angular/router';
import { TypographyDirective } from '@/core/typography';
import { Crypto } from '@/services/crypto';
import { TruncateFadeTextDirective } from '@/core/clamp-fade-text.directive';
import { ButtonDirective } from 'primeng/button';
@Component({
  selector: 'app-c-group',
  imports: [PageLayout, Carousel, ScreenContainer, CFilter, TypographyDirective, RouterLink, SlugifyPipe, SlicePipe, TruncateFadeTextDirective, ButtonDirective, NgClass],
  providers: [SlugifyPipe],
  templateUrl: './c-group.html',
  styleUrl: './c-group.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CGroup {
  protected slugify = inject(SlugifyPipe);
  public crypto = inject(Crypto);
  protected hideFilterPanelOnMobile = signal(true);
  heroCarouselItems = [
    {
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
      title: 'Hero Carousel Item 2',
      description: 'Hero Carousel Item 2 Description',
      color: '',
      class: 'inner-curve-shape mx-4',
    }

  ].map((item, index) => ({ ...item, index }));

  carouselResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 2,
      numScroll: 1,
    }
  ];
  public filters = MOCK_FILTER_GROUPS;
  public mockedProducts = mockedHomeSection;
  protected slug = signal(this.slugify.transform(this.mockedProducts.name));
}

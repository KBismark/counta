import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from "@/pages/c-home/components/header/header";
import { Footer } from '@/pages/c-home/components/footer/footer';

@Component({
    selector: 'page-layout',
    imports: [CommonModule, Header, Footer],
    template: `
    <app-header class="block max-md:sticky max-md:top-0 z-50" />
    <ng-content></ng-content>
    <app-footer />
  `,
  styles:`:host{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    position: relative;
  }`
})
export class PageLayout {}

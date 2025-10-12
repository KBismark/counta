import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'screen-container',
    imports: [CommonModule],
    template: `<div class="container xs:max-w-full mx-auto xl:w-full! xl:max-w-[1440px]! px-4 xl:px-6 space-y-10">
    <ng-content></ng-content>
  </div>`,
})
export class ScreenContainer {}

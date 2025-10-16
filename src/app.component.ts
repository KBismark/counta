import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Carousel } from 'primeng/carousel';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    onstructor() {
        // Override the onTouchMove prototype to disable swipe
        Carousel.prototype.onTouchMove = (): void => undefined;
      }
}

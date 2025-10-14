import { TypographyDirective } from '@/core/typography';
import { Component, signal } from '@angular/core';
import { ButtonDirective, ButtonIcon, ButtonLabel } from "primeng/button";
import { Popover } from "primeng/popover";

@Component({
  selector: 'app-header',
  imports: [TypographyDirective, ButtonDirective, Popover, ButtonIcon, ButtonLabel],
  templateUrl: './header.html',
})
export class Header {
  protected expolorerItems = [{ label: 'Update', icon: 'pi pi-refresh' }, { label: 'Delete', icon: 'pi pi-times' }, { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' }, { separator: true }, { label: 'Setup', icon: 'pi pi-cog' }];
  protected isAuthenticated = signal(false);
}

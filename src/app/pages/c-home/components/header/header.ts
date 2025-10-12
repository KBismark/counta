import { TypographyDirective } from '@/core/typography';
import { Component } from '@angular/core';
import { Button, ButtonDirective, ButtonIcon, ButtonLabel } from "primeng/button";
import { SplitButton } from "primeng/splitbutton";
import { Popover } from "primeng/popover";

@Component({
  selector: 'app-header',
  imports: [TypographyDirective, ButtonDirective, SplitButton, Popover, ButtonIcon, ButtonLabel],
  templateUrl: './header.html',
})
export class Header {
  expolorerItems = [{ label: 'Update', icon: 'pi pi-refresh' }, { label: 'Delete', icon: 'pi pi-times' }, { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' }, { separator: true }, { label: 'Setup', icon: 'pi pi-cog' }];
}

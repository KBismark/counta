import { FilterGroupType } from '@/interfaces/filters';
import { Component, computed, DestroyRef, effect, inject, input, output, signal } from '@angular/core';
import { Checkbox } from "primeng/checkbox";
import { TypographyDirective } from "@/core/typography";
import { Accordion } from "primeng/accordion";
import { AccordionPanel, AccordionHeader, AccordionContent } from "primeng/accordion";
import { ButtonDirective } from "primeng/button";
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-c-filter',
  imports: [Checkbox, TypographyDirective, Accordion, AccordionPanel, AccordionHeader, AccordionContent, ButtonDirective, NgClass],
  templateUrl: './c-filter.html',
  styleUrl: './c-filter.css'
})
export class CFilter {
  constructor(){
    effect(() => {
      if(!this.hiddenOnMobile()) {
        document.body.style.overflow = 'hidden';
        const timeout = setTimeout(() => {
          this.openFilterPanel();
        }, 100);
        this.destroyRef.onDestroy(() => {
          clearTimeout(timeout);
        });
      } 
      else {
        document.body.style.overflow = 'auto';
      }
    });
  }
  private readonly destroyRef = inject(DestroyRef);
  public filters = input.required<FilterGroupType[]>();

  protected filterGroupsExpansion = signal<Record<string, boolean>>({});

  protected toggleFilterGroupExpansion(groupId: string) {
    this.filterGroupsExpansion.set({
      ...this.filterGroupsExpansion(),
      [groupId]: !this.filterGroupsExpansion()[groupId]
    });
  }

  public hiddenOnMobile = input.required<boolean>();
  public onCloseFilterPanel = output<boolean>();

  protected opened = signal(false);

  protected closeFilterPanel() {
    this.opened.set(false);
    const timeout = setTimeout(() => {
      this.onCloseFilterPanel.emit(true);
    }, 400);
    this.destroyRef.onDestroy(() => {
      clearTimeout(timeout);
    });

  }

  protected openFilterPanel() {
    this.opened.set(true);
  }
}

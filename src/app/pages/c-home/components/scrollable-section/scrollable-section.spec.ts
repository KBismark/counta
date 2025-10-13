import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableSection } from './scrollable-section';

describe('ScrollableSection', () => {
  let component: ScrollableSection;
  let fixture: ComponentFixture<ScrollableSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollableSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollableSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

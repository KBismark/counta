import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertedCornerSection } from './inverted-corner-section';

describe('InvertedCornerSection', () => {
  let component: InvertedCornerSection;
  let fixture: ComponentFixture<InvertedCornerSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvertedCornerSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvertedCornerSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

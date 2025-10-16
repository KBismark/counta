import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFilter } from './c-filter';

describe('CFilter', () => {
  let component: CFilter;
  let fixture: ComponentFixture<CFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

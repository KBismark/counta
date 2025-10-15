import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGroup } from './c-group';

describe('CGroup', () => {
  let component: CGroup;
  let fixture: ComponentFixture<CGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

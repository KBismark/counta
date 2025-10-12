import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHome } from './c-home';

describe('CHome', () => {
  let component: CHome;
  let fixture: ComponentFixture<CHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRegistration } from './main-registration';

describe('MainRegistration', () => {
  let component: MainRegistration;
  let fixture: ComponentFixture<MainRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainRegistration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRegistration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

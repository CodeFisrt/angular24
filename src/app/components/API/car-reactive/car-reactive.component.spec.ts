import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarReactiveComponent } from './car-reactive.component';

describe('CarReactiveComponent', () => {
  let component: CarReactiveComponent;
  let fixture: ComponentFixture<CarReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

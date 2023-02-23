import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekGoalsComponent } from './geek-goals.component';

describe('GeekGoalsComponent', () => {
  let component: GeekGoalsComponent;
  let fixture: ComponentFixture<GeekGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeekGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeekGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

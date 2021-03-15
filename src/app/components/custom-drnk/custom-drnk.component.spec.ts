import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDrnkComponent } from './custom-drnk.component';

describe('CustomDrnkComponent', () => {
  let component: CustomDrnkComponent;
  let fixture: ComponentFixture<CustomDrnkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDrnkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDrnkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

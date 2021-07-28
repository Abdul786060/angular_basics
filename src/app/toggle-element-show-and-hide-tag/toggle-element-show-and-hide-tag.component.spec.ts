import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleElementShowAndHideTagComponent } from './toggle-element-show-and-hide-tag.component';

describe('ToggleElementShowAndHideTagComponent', () => {
  let component: ToggleElementShowAndHideTagComponent;
  let fixture: ComponentFixture<ToggleElementShowAndHideTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleElementShowAndHideTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleElementShowAndHideTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

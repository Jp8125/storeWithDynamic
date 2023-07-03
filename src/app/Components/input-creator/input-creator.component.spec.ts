import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCreatorComponent } from './input-creator.component';

describe('InputCreatorComponent', () => {
  let component: InputCreatorComponent;
  let fixture: ComponentFixture<InputCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

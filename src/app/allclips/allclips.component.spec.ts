import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllclipsComponent } from './allclips.component';

describe('AllclipsComponent', () => {
  let component: AllclipsComponent;
  let fixture: ComponentFixture<AllclipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllclipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllclipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

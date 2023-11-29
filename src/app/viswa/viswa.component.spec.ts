import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViswaComponent } from './viswa.component';

describe('ViswaComponent', () => {
  let component: ViswaComponent;
  let fixture: ComponentFixture<ViswaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViswaComponent]
    });
    fixture = TestBed.createComponent(ViswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

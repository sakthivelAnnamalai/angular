import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirubaComponent } from './kiruba.component';

describe('KirubaComponent', () => {
  let component: KirubaComponent;
  let fixture: ComponentFixture<KirubaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KirubaComponent]
    });
    fixture = TestBed.createComponent(KirubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

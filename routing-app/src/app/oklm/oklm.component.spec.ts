import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OklmComponent } from './oklm.component';

describe('OklmComponent', () => {
  let component: OklmComponent;
  let fixture: ComponentFixture<OklmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OklmComponent]
    });
    fixture = TestBed.createComponent(OklmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

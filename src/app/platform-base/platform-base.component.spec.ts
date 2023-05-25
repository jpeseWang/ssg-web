import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformBaseComponent } from './platform-base.component';

describe('PlatformBaseComponent', () => {
  let component: PlatformBaseComponent;
  let fixture: ComponentFixture<PlatformBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformBaseComponent]
    });
    fixture = TestBed.createComponent(PlatformBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

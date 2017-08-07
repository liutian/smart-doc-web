import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualLayoutComponent } from './manual-layout.component';

describe('ManualLayoutComponent', () => {
  let component: ManualLayoutComponent;
  let fixture: ComponentFixture<ManualLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

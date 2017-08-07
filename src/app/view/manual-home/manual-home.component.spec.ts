import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualHomeComponent } from './manual-home.component';

describe('ManualHomeComponent', () => {
  let component: ManualHomeComponent;
  let fixture: ComponentFixture<ManualHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

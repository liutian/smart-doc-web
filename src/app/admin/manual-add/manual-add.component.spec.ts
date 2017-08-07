import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualAddComponent } from './manual-add.component';

describe('ManualAddComponent', () => {
  let component: ManualAddComponent;
  let fixture: ComponentFixture<ManualAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

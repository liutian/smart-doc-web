import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualListComponent } from './manual-list.component';

describe('ManualListComponent', () => {
  let component: ManualListComponent;
  let fixture: ComponentFixture<ManualListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSaveComponent } from './manual-save.component';

describe('ManualSaveComponent', () => {
  let component: ManualSaveComponent;
  let fixture: ComponentFixture<ManualSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManualSaveComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

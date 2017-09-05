import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSaveComponent } from './site-save.component';

describe('SiteSaveComponent', () => {
  let component: SiteSaveComponent;
  let fixture: ComponentFixture<SiteSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiteSaveComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

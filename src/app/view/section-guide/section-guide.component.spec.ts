import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGuideComponent } from './section-guide.component';

describe('SectionGuideComponent', () => {
  let component: SectionGuideComponent;
  let fixture: ComponentFixture<SectionGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

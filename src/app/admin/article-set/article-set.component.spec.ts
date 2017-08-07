import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSetComponent } from './article-set.component';

describe('ArticleSetComponent', () => {
  let component: ArticleSetComponent;
  let fixture: ComponentFixture<ArticleSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

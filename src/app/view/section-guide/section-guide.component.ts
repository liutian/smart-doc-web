import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-guide',
  templateUrl: './section-guide.component.html',
  styleUrls: ['./section-guide.component.scss']
})
export class SectionGuideComponent {
  @Input() sectionData;
  @Output() onSelect = new EventEmitter();
  @Input() activeIndex;

  select(index) {
    this.activeIndex = index;
    this.onSelect.emit({
      item: this.sectionData[index],
      index: index
    });
  }

}

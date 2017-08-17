import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { ViewService } from 'app/view/view.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public store: ViewService,
    public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd && this.route.snapshot.fragment == 'top-anchor') {
        document.body.scrollTop = 0;
      }
    })
  }

  switchManual(manualId) {
    this.router.navigate(['/view/manual/home'], { queryParams: { manual: manualId } });
  }

}

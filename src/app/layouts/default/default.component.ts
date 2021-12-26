import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../../../../src/environments/environment';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  maintenance: boolean = environment.maintenance;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Detect if the site is under maintenance
    if (this.maintenance) {
      this.router.navigate(['/maintenance']);
    }
    // Detect route change and scroll to top
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

}

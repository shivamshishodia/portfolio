import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../src/environments/environment';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  maintenance: boolean = environment.maintenance;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Detect if the site is not under maintenance
    if (!this.maintenance) {
      this.router.navigate(['/']);
    }
  }

}

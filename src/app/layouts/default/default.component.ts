import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../../../../src/environments/environment';
import { Meta } from '@angular/platform-browser';  

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  maintenance: boolean = environment.maintenance;

  title: string = 'Shivam Shishodia';
  image: string = 'https://avatars.githubusercontent.com/u/21097868?v=4';
  description: string = 'Hello, my name is Shivam Shishodia. I build things for the web. I am a software engineer (by choice) who loves to solve bleeding-edge problems. I specialize in building and designing exceptional digital experiences. Currently, I am focused on building applications for demand and supply space at Dell. My area of focus includes developing Web3 technologies and designing real-time event-driven architectures.';

  constructor(private router: Router, private meta: Meta) {
    this.meta.addTags([
      { name: 'og:title', content: this.title },
      { name: 'description', content: this.description },
      { name: 'og:description', content: this.description },
      { name: 'og:image', content: this.image }
    ]);
  }

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

import { Component, OnInit } from '@angular/core';

export interface Experience {
  position: string;
  company: string;
  organisation: string;
  experience: string;
  breif: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [
    {
      position: "SDE 2",
      company: "Dell",
      experience: "Oct. 2019 - Present",
      organisation: "Demand Planning, MTRC",
      breif: "Developed real-time Spring boot-based microservices to process the high volume of sales records (5k/min). Improved robustness by handling points of failure. Increased data accuracy to 98 percent."
    },
    {
      position: "SDE 1",
      company: "Dell",
      experience: "July 2018 - Sept. 2019",
      organisation: "Demand Planning, MTRC",
      breif: "Developed MR core microservices reducing order process time by 60 percent. Led a two-member development team to migrate the PPCM monolith codebase from legacy servers to the cloud."
    },
    {
      position: "SDE Intern",
      company: "Dell",
      experience: "Jan. 2018 - May 2018",
      organisation: "DCE Content Operation",
      breif: "Designed and developed EOL Audit Automation capable of saving 5,992 man-hours per year. The codebase was deployed as a core application and saved 5,880 man-hours per year processing EOL requests."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

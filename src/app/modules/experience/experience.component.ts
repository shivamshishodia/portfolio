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
      position: "Software Developer 2",
      company: "Oracle",
      experience: "Oct. 2022 - Present",
      organisation: "Logging Analytics (OCI)",
      breif: "Working on on-demand collectors for management agent; shipped to over 700+ customers. Agents are designed to enrich, preprocess, and cumulatively handle over 40 terabytes of data per day."
    },
    {
      position: "Senior Software Engineer",
      company: "Dell",
      experience: "Apr. 2022 - Oct. 2022",
      organisation: "Demand Planning (MTRC)",
      breif: "Developed real-time Spring boot-based microservices to process the high volume of sales records (8k/hour). Improved robustness by handling points of failure. Increased data accuracy to 98 percent."
    },
    {
      position: "Software Engineer 2",
      company: "Dell",
      experience: "Oct. 2019 - Mar. 2022",
      organisation: "Demand Planning (MTRC)",
      breif: "Developed MR core microservices reducing order process time by 60 per cent for Dell's strategic customers. MR is designed to process $10 million worth of large order quotes quarterly."
    },
    {
      position: "Software Engineer 1",
      company: "Dell",
      experience: "July 2018 - Sept. 2019",
      organisation: "Demand Planning (MTRC)",
      breif: "Led a two-member development team to migrate the PPCM monolith codebase from legacy servers to cloud microservices. Enabled zero downtime and  made microservices 12-factor compliant."
    },
    {
      position: "Software Engineer Intern",
      company: "Dell",
      experience: "Jan. 2018 - May 2018",
      organisation: "DCE Content Operations",
      breif: "Designed and developed EOL Audit Automation capable of saving 5,992 man-hours per year. The codebase was deployed as a core application and saved 5,880 man-hours per year processing EOL requests."
    },
    {
      position: "Chapter Officer",
      company: "ACM",
      experience: "Aug. 2016 - Aug. 2017",
      organisation: "Web Development Lead",
      breif: "We lead over 250 university students, training them for competitive programming and industry-level best practices. I served as the office bearer for over 1 year 2 months."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

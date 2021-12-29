import { Component, OnInit } from '@angular/core';

export interface Academics {
  points: string;
  course: string;
  school: string;
}

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent implements OnInit {

  academics: Academics[] = [
    {
      points: "9.21 CGPA",
      course: "Computer Science and Engineering",
      school: "Manipal University Jaipur"
    },
    {
      points: "9.8 CGPA",
      course: "Computer Science with PCM",
      school: "Navy Children School (Goa)"
    },
    {
      points: "90.8 Percent",
      course: "Computer Science with PCM",
      school: "Navy Children School (Goa)"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

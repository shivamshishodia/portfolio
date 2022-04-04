import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { environment } from '../../../../src/environments/environment';

export interface Skillset {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  maintenance: boolean = environment.maintenance;

  skills: Skillset[] = [
    {name: 'Java'},
    {name: 'JavaScript'},
    {name: 'Python'},
    {name: 'SQL'},
    {name: 'Springboot'},
    {name: 'Angular'},
    // {name: 'Flask'},
    {name: 'RabbitMQ'},
    {name: 'Kafka'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Skillset[]>) {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
  }

}

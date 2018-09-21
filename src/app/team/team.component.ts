import { Component, OnInit } from '@angular/core';
import { persons } from '../shared/demo';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  public team  = persons

  constructor(
  ) {}

  ngOnInit() {
  }

}

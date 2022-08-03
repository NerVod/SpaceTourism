import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../services/destination.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  circleHover!: boolean

  constructor(private destinationService : DestinationService ) { }

  ngOnInit(): void {
    this.circleHover = false;
    this.destinationService.warmHeroku().subscribe()
  }

}

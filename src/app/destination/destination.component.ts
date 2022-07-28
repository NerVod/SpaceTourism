import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  survolMoon!: boolean;
  survolMars!: boolean;
  survolEuropa!: boolean;
  survolTitan!: boolean;

  dataPlanet$: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private destinationService: DestinationService,
  ) { }

  ngOnInit(): void {
    const destinationId = this.route.snapshot.params['id'];
    this.dataPlanet$ = this.destinationService.getPlanet('moon').subscribe()
  }

}

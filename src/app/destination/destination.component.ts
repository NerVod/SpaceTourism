import { Component, Input, OnInit } from '@angular/core';
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

  @Input() dataPlanet$: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private destinationService: DestinationService,
  ) { }

  ngOnInit(): void {
    const destinationId = this.route.snapshot.params['id'];
  // this.destinationService.getPlanet('moon').subscribe((data: object) => this.dataPlanet$ = data)
  this.getMoon()
  }

getMoon(): void {
  this.destinationService.getPlanet('moon').subscribe((data: object) => this.dataPlanet$ = data)
}
getMars(): void {
  this.destinationService.getPlanet('mars').subscribe((data: object) => this.dataPlanet$ = data)
}
getEuropa(): void {
  this.destinationService.getPlanet('europa').subscribe((data: object) => this.dataPlanet$ = data)
}
getTitan(): void {
  this.destinationService.getPlanet('titan').subscribe((data: object) => this.dataPlanet$ = data)
}


}

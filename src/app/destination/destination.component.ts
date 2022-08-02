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
  selectMoon! : boolean
  selectMars! : boolean
  selectEuropa! : boolean
  selectTitan! : boolean

  @Input() dataPlanet$: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private destinationService: DestinationService,
  ) { }

  ngOnInit(): void {
    // const destinationId = this.route.snapshot.params['id'];
  // this.destinationService.getPlanet('moon').subscribe((data: object) => this.dataPlanet$ = data)
  this.getMoon();
  this.selectMoon = true
  }

getMoon(): void {
  this.razSelected();
  this.selectMoon = true
  this.destinationService.getPlanet('moon').subscribe((data: object) => this.dataPlanet$ = data)
}
getMars(): void {
  this.razSelected();
  this.selectMars = true;
  this.destinationService.getPlanet('mars').subscribe((data: object) => this.dataPlanet$ = data)
}
getEuropa(): void {
  this.razSelected();
  this.selectEuropa = true;
  this.destinationService.getPlanet('europa').subscribe((data: object) => this.dataPlanet$ = data)
}
getTitan(): void {
  this.razSelected();
  this.selectTitan = true;
  this.destinationService.getPlanet('titan').subscribe((data: object) => this.dataPlanet$ = data)
}
razSelected(){
  this.selectMoon = false;
  this.selectMars = false;
  this.selectEuropa = false;
  this.selectTitan = false
}


}

import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CrewService } from '../services/crew.service';


@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {
  survol1!: boolean;
  survol2!: boolean;
  survol3!: boolean;
  survol4!: boolean;
  select1!: boolean;
  select2!: boolean;
  select3!: boolean;
  select4!: boolean;

  @Input() dataCrew$: any
  public getScreenWidth: any;

  constructor(
    private crewService: CrewService
  ) { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getCommander()
  }

  getCommander() : void {
    this.razSelected();
    this.select1 = true;
    this.crewService.getCrew('commander').subscribe((data: Object) => {
      this.dataCrew$ = data
    })
  }
  getSpecialist() : void {
    this.razSelected();
    this.select2 = true;
    this.crewService.getCrew('specialist').subscribe((data: Object) => {
      this.dataCrew$ = data
    })
  }
  getPilot() : void {
    this.razSelected();
    this.select3 = true;
    this.crewService.getCrew('pilot').subscribe((data: Object) => {
      this.dataCrew$ = data
    })
  }
  getEngeneer() : void {
    this.razSelected();
    this.select4 = true;
    this.crewService.getCrew('engeneer').subscribe((data: Object) => {
      this.dataCrew$ = data
    })
  }

  razSelected() {
    this.select1 = false;
    this.select2 = false;
    this.select3 = false;
    this.select4 = false;
  }


  @HostListener("window:resize", ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth
  }

}

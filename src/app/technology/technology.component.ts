import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechService } from '../services/tech.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  public getScreenWidth: any;

@Input() dataTech$: any

survol1!: boolean;
survol2!: boolean;
survol3!: boolean;
select1!: boolean;
select2!: boolean;
select3!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private techService: TechService,
  ) { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getLaunch();
    this.select1 = true;
  }


  @HostListener("window:resize", ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth
  }

  getLaunch(): void {
    this.razSelected();
    this.select1 = true;
    this.techService.getTech("launch").subscribe((data: object) => this.dataTech$ = data)
  }

  getSpacePort(): void {
    this.razSelected();
    this.select2 = true;
    this.techService.getTech("spaceport").subscribe((data: object) => this.dataTech$ = data)
  }
  getCapsule(): void {
    this.razSelected();
    this.select3 = true;
    this.techService.getTech("capsule").subscribe((data: object) => this.dataTech$ = data)
  }

  razSelected() {
    this.select1 = false;
    this.select2 = false;
    this.select3 = false;
  }



}

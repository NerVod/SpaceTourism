import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public getScreenWidth: any;
  navmodal!: boolean;
  survol1!: boolean;
  survol2!: boolean;
  survol3!: boolean;
  survol4!: boolean;

  constructor(
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.navmodal = false
  }

  @HostListener("window:resize", ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth
  }

  showModal() {
    this.navmodal = !this.navmodal
  }

}

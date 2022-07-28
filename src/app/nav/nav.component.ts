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

  constructor(
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth
  }

  @HostListener("window:resize", ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth
  }

}

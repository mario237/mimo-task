import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _NavbarService:NavbarService) { }

  ngOnInit(): void {
    this._NavbarService.changeNavbarOnScroll('#000');

  }

}

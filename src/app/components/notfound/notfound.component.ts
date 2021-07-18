import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private _NavbarService: NavbarService) { }

  ngOnInit(): void {
    this._NavbarService.changeNavbarOnScroll('#fff');
    this._NavbarService.addNavbarOnComponent();
  }

  ngOnDestroy(): void {
    this._NavbarService.removeNavbarOnComponent();
  }


}

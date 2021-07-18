import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
declare let $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _NavbarService:NavbarService) { }

  ngOnInit(): void {
    this._NavbarService.changeNavbarOnScroll('#fff');
    this._NavbarService.addNavbarOnComponent();
  }

  ngOnDestroy(): void {
    this._NavbarService.removeNavbarOnComponent();
  }

  openSidebar(){
    $('.sidebar-mobile .header').css("display","none");
    $('#close_sidebar').css("display","block");
    $('.sidebar-mobile ul').css("display","grid");
  }

  closeSidebar(){
    $('.sidebar-mobile .header').css("display","flex");
    $('#close_sidebar').css("display","none");
    $('.sidebar-mobile ul').css("display","none");
  }

}

import { Injectable } from '@angular/core';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  
  changeHeaderBackground() {
    $(window).on('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.navbar-container').css('background', '#000')
      } else {
        $('.navbar-container').css('background', 'transparent')
      }
    })
  }
}

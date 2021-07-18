import { Injectable } from '@angular/core';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }


  changeNavbarOnScroll(color:string) {
    $(window).on('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.navbar').css('background', `${color}`)
      } else {
        $('.navbar').css('background', 'transparent')
      }
    })
  }

  addNavbarOnComponent() {

    $('.navbar').addClass('component');
  }

  removeNavbarOnComponent() {
    $('.navbar').removeClass('component');
  }
}

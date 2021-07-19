import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(private _NavbarService: NavbarService) { }

  products: any[] = [
    { title: 'DEVELOPER PACKAGE', description: 'We’ve partnered with NVIDIA to offer a "Lander5" built around the Jetson AGX Xavier: a fast, efficient computing device, ideal for robotics development. The JETSON developer package takes advantage of NVIDIA’s standard hardware interfaces and graphics processing capabilities. Built around a powerful and compact GPU, the Jetson is the preferred computing platform for VSLAM, 3D imaging and machine learning applications.', price: '19,999', imagePath: 'assets/images/products/trex wireframe.png' },
    { title: 'EXPLORER PACKAGE', description: 'The Lander5 Explorer Package is designed for basic autonomous operation in both indoor and outdoor environments. Applications range from GPS waypoint navigation with laser-based collision avoidance, to indoor mapping and path planning. A powerful Mini-ITX computer system comes pre-installed with Linux and ROS; all component ROS drivers are installed and pre-configured.', price: '24,999', imagePath: 'assets/images/products/503.png' },
    { title: 'VISION PACKAGE', description: 'The Lander5 Vision Package includes two front-facing FLIR Blackfly cameras for stereo vision, an upgraded GPU graphics card and a high performance computer. This package comes with a pre-installed CUDA toolkit, and is fully supported with ROS, RViz (visualization), and Gazebo (simulator).', price: '29,999', imagePath: 'assets/images/products/602.png' }

  ];

  selectedIndex: number = 0;

  selectedProduct: any = this.products[this.selectedIndex];


  setProductType(eventInfo: any, index: number) {

    let clickedElement = eventInfo.target;


    if (clickedElement.className.baseVal == 'toggle-icon' || clickedElement.className == '')
      clickedElement = clickedElement.parentNode.className;
    else
      clickedElement = clickedElement.className;


    if (clickedElement != "show") {

      for (let i = 0; i < 3; i++) {

        if (i == index) {
          let selectedType = $('.product-container .choose-product-type button')[i]
          selectedType.classList.replace('hide', 'show');
        } else {
          let unSelectedType = $('.product-container .choose-product-type button')[i]
          unSelectedType.classList.replace('show', 'hide');
        }
      }


      this.selectedProduct = this.products[index];

      this.changeProductAnimation();


      this.scrollToProductTopOffset();

    }



  }


  changeProductAnimation() {

    $('.product-item').addClass('zoom-in-animation');

    setTimeout(() => {
      $('.product-item').removeClass('zoom-in-animation')
    }, 1000);
  }

  scrollToProductTopOffset(): void {
    let productTopOffset = $('.product-container .product-item').offset().top - 100;

    if (productTopOffset > 500) {
      $('html , body').animate({
        scrollTop: productTopOffset
      }, 1000);
    }
  }





  ngOnInit(): void {
    this._NavbarService.changeNavbarOnScroll('#fff');
    this._NavbarService.addNavbarOnComponent();
    this.changeProductAnimation();
  }

  ngOnDestroy(): void {
    this._NavbarService.removeNavbarOnComponent();
  }

}

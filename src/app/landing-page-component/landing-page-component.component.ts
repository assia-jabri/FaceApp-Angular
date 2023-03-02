import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.scss']
})


export class LandingPageComponentComponent {

  constructor(private router: Router) { }
  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

}

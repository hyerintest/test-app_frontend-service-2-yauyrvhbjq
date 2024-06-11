import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-no-content',
  templateUrl: 'no-content.component.html',
  styleUrls: ['no-content.component.scss']
})
export class NoContentComponent {

  constructor(
    private router: Router
  ) {
  }

  routeToMain(){
    this.router.navigate([environment.defaultPath]);
  }
}

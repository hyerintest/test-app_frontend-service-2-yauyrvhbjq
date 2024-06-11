import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})

export class MainComponent {
  mainMenu: MenuItem[] = [];
  items: MenuItem[] = [];
  activeItem: MenuItem;

  constructor() {   
  }

  ngOnInit() {
    this.items = [
      {label: 'Overview', icon: 'pi pi-fw pi-home'},
      {label: 'Members', icon: 'pi pi-fw pi-users'},
      {label: 'Jobs', icon: 'pi pi-fw pi-search'},
      {label: 'Profile', icon: 'pi pi-fw pi-user'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    this.mainMenu= [
      {label: 'Home', icon: 'pi-home'},
      {label: 'Customers', icon: 'pi-users', expanded: true},
      {label: 'Calendar', icon: 'pi-calendar'},
      {label: 'Stats', icon: 'pi-chart-line'},
    ]
    this.activeItem = this.items[0];
}  
}

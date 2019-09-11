import { Component, OnInit } from '@angular/core';
import { Menu } from '../reference-data/Menu';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  environmentColor = environment.color;

  menuItems: Menu [] = [
    {name: 'Login', url: '/login'},
    {name: 'Login Reactive', url: '/login-reactive'},
    {name: 'Home', url: ''},
    {name: 'Reference Data', url: '/reference-data', version: '0.1'},
    {name: 'Position Data', url: '/position-data'},
    {name: 'Reports', url: '/reports'},
    {name: 'System', url: '/system'}
  ];

  ngOnInit() {
  }

  getPixel() {
    return '10px';
  }

  getEnvironmentColor() {
    return this.environmentColor;
  }


}

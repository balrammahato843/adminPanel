import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
invertebrates: any;
fish: any;
amphibians: any;
reptiles: any;

  constructor() { }

  ngOnInit(): void {
  }

}

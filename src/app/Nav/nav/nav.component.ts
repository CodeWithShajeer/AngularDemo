import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  tittle : string='this is Demoo!!!';
  toggle:boolean=false;
  twowayBind!: string;


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  keyPress()
  {
    console.log(this.twowayBind)
  }

}

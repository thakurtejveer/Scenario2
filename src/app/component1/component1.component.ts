import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  public data="";
   public data1="";
  constructor() { }

  ngOnInit() {
  }

  show(vari) {
    this.data1=vari;
    console.log(this.data1);
  }

}

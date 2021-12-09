import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  hasBackButton: boolean = false

  constructor(
    private active: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(this.active.snapshot?.url.length > 0){
      this.hasBackButton = true
    }
    console.log(this.hasBackButton)
  }

}

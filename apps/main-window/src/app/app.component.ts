import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trader-desktop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'main-window';

  ngOnInit(): void {

    console.log('Child Component Created : ', Date.now());

  }



}

import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers: [AppService]
})

export class AppComponent implements OnInit {

  private id: string;
  private pricelist: Object;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getPriceList().subscribe(d => {
      this.pricelist = d['pricelist'];
    });
  }

  setId(id: string) {
    this.id = id;
  }
}

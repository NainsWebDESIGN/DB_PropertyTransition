import { Component, OnInit } from '@angular/core';
import { AppService } from '@service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  constructor(public lang: AppService) { }
  changeLang(_Lang: string) {
    this.lang.getLang(_Lang);
  }
  ngOnInit() {

  }
}

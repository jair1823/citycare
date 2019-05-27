import { Component, OnInit } from '@angular/core';

export var filtrado: boolean;
@Component({
  selector: 'app-inicio-with-tabs',
  templateUrl: './inicio-with-tabs.page.html',
  styleUrls: ['./inicio-with-tabs.page.scss'],
})
export class InicioWithTabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    filtrado = false;
  }

}

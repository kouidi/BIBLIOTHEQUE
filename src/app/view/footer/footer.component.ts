import { Component, OnInit } from '@angular/core';
import {MyListGeneriqueObject} from "../../my-list-generique-object";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year= new Date().getFullYear();
  categorie = MyListGeneriqueObject.arrayCategorie;
  constructor() {
  }

  ngOnInit(): void {
  }

}

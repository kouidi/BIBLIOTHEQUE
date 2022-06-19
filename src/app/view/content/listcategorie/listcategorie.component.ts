import { Component, OnInit } from '@angular/core';
import {MyListGeneriqueObject} from "../../../my-list-generique-object";

@Component({
  selector: 'app-listcategorie',
  templateUrl: './listcategorie.component.html',
  styleUrls: ['./listcategorie.component.css']
})
export class ListcategorieComponent implements OnInit {

  constructor() { }
  categorie = MyListGeneriqueObject.arrayCategorie;
  ngOnInit(): void {
  }
  deleteCategorieFromList(id:number){
    MyListGeneriqueObject.deleteCategorieById(id);
    this.categorie = MyListGeneriqueObject.arrayCategorie;
  }

}

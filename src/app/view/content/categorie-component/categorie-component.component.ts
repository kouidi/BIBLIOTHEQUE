import { Component, OnInit } from '@angular/core';
import {Categorie} from "../../../categorie";
import {MyListGeneriqueObject} from "../../../my-list-generique-object";
import {ActivatedRoute,Router} from "@angular/router";
import {FooterComponent} from "../../footer/footer.component";

@Component({
  selector: 'app-categorie-component',
  templateUrl: './categorie-component.component.html',
  styleUrls: ['./categorie-component.component.css']
})
export class CategorieComponentComponent implements OnInit {
  nomCat: string='';
  id:number=0;
  constructor(private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>{
      if(data.get("id")!=null){
        let cat:Categorie|null = MyListGeneriqueObject.getCategorieByid(parseInt(<string>data.get("id")));
        this.nomCat =cat?.nom;
        this.id = <number>cat?.num;
      }


    })
  }
  addCategorie():Categorie{
    let cat_tmp:Categorie = new Categorie(this.nomCat)
    MyListGeneriqueObject.arrayCategorie.push(cat_tmp)
    this.nomCat = '';
    return cat_tmp;
  }

  updateCategorie(id:number){
    MyListGeneriqueObject.updateCategorie(id,this.nomCat);
    this.router.navigate(['/listCategorie']);
  }

}

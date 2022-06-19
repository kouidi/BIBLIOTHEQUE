import {Categorie} from "./categorie";

export class MyListGeneriqueObject {
  public static nbr_id = 0;
  public static arrayCategorie:Array<Categorie> = [];

  public static deleteCategorieById(id:number){
    let tmp_array:Array<Categorie> = [];
    for (let i = 0;i<this.arrayCategorie.length;i++) {
      if (this.arrayCategorie[i].num != id){
        tmp_array.push(this.arrayCategorie[i])
      }
    }
    this.arrayCategorie = tmp_array;
  }

  public static getCategorieByid(id:number):Categorie|null{
    for(let i =0; i<this.arrayCategorie.length;i++){
      if(this.arrayCategorie[i].num==id)
        return this.arrayCategorie[i];
    }
    return null;
  }

  static updateCategorie(id: number, nomCat: string) {
    for(let i =0; i<this.arrayCategorie.length;i++){
      if(this.arrayCategorie[i].num==id)
        this.arrayCategorie[i].nom = nomCat;
    }
  }
}

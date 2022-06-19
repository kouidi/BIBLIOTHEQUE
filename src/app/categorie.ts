import {MyListGeneriqueObject} from "./my-list-generique-object";

export class Categorie {
  private _nom:any;
  private _num:number;
  private _is_deleted:boolean;

  constructor(nom: any) {
    MyListGeneriqueObject.nbr_id = MyListGeneriqueObject.nbr_id+1;
    this._nom = nom;
    this._num = MyListGeneriqueObject.nbr_id;
    this._is_deleted=false;
  }


  get num(): number {
    return this._num;
  }

  set num(value: number) {
    this._num = value;
  }

  get nom(): any {
    return this._nom;
  }

  set nom(value: any) {
    this._nom = value;
  }

  get is_deleted(): boolean {
    return this._is_deleted;
  }

  set is_deleted(value: boolean) {
    this._is_deleted = value;
  }
}

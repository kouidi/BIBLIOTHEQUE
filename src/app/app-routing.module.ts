import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategorieComponentComponent} from "./view/content/categorie-component/categorie-component.component";
import {ListcategorieComponent} from "./view/content/listcategorie/listcategorie.component";

const routes: Routes = [
  {path : 'addCategorie',component:CategorieComponentComponent},
  {path :'getCategirie/:id', component:CategorieComponentComponent},
  {path:'listCategorie',component : ListcategorieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

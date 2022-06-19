import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './view/menu/menu.component';
import { FooterComponent } from './view/footer/footer.component';
import { ContentComponent } from './view/content/content.component';
import { CategorieComponentComponent } from './view/content/categorie-component/categorie-component.component';
import {FormsModule} from "@angular/forms";
import { ListcategorieComponent } from './view/content/listcategorie/listcategorie.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    CategorieComponentComponent,
    ListcategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ACompoComponent } from "./a-compo/a-compo.component";
import { BCompoComponent } from "./b-compo/b-compo.component";
import { CCompoComponent } from './c-compo/c-compo.component';

@NgModule({
  declarations: [AppComponent, ACompoComponent, BCompoComponent, CCompoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

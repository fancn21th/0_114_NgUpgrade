import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { GraphictoolboxComponent } from "./graphictoolbox/graphictoolbox.component";
import { DemoMaterialModule } from "./material.module";
@NgModule({
  declarations: [AppComponent, GraphictoolboxComponent],
  imports: [BrowserModule, BrowserAnimationsModule, DemoMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

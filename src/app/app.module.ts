import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HccaModule} from "./hcca/hcca.module";
import {RouterModule} from "@angular/router";
import {HccaComponent} from "./hcca/hcca.component";
import {AuthComponent} from "./hcca/auth.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HccaModule,
    RouterModule.forRoot([
      {
        path: "main", component: HccaComponent,
      },
      {
        path: "auth", component: AuthComponent,
      },
      { path: "**", redirectTo: "auth" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

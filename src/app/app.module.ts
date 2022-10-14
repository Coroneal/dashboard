import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from "./common/components/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule, Routes } from "@angular/router";
import { ToolsComponent } from './tools/tools.component';
import { HomeComponent } from './home/home.component';
import { InspirationsComponent } from './inspirations/inspirations.component';
import { MatGridListModule } from "@angular/material/grid-list";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'inspirations', component: InspirationsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolsComponent,
    HomeComponent,
    InspirationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

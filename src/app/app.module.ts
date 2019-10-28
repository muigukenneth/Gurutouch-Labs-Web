import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LandingComponent } from './landing/landing.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,MatToolbarModule,AngularFontAwesomeModule,MatCardModule,MatButtonModule,MatGridListModule,MatListModule,FlexLayoutModule,MatTabsModule ],
  declarations: [ AppComponent, HelloComponent, LandingComponent, TopToolbarComponent, PortfolioComponent, MenuToolbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

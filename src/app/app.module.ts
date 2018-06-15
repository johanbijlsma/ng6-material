import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SitenavComponent,
    SitedashComponent,
    SitetableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatIconModule} from '@angular/material';
import {MatListModule, MatGridListModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { SitenavComponent } from './sitenav/sitenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SitedashComponent } from './sitedash/sitedash.component';
import { SitetableComponent } from './sitetable/sitetable.component';



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollLogoComponent } from './scroll-logo/scroll-logo.component';
import { ScrollStudentwellbeingLogoComponent } from './scroll-studentwellbeing-logo/scroll-studentwellbeing-logo.component';
import { ScrollStaffwellbeingLogoComponent } from './scroll-staffwellbeing-logo/scroll-staffwellbeing-logo.component';
import { ScrollLogoAnimationComponent } from './scroll-logo-animation/scroll-logo-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollLogoComponent,
    ScrollStudentwellbeingLogoComponent,
    ScrollStaffwellbeingLogoComponent,
    ScrollLogoAnimationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

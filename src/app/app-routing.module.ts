import { ScrollLogoAnimationComponent } from './scroll-logo-animation/scroll-logo-animation.component';
import { ScrollStudentwellbeingLogoComponent } from './scroll-studentwellbeing-logo/scroll-studentwellbeing-logo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollStaffwellbeingLogoComponent } from './scroll-staffwellbeing-logo/scroll-staffwellbeing-logo.component';
import { ScrollLogoComponent } from './scroll-logo/scroll-logo.component';


const routes: Routes = [
  {
    path: '',
    component: ScrollLogoComponent
  },
  {
    path: 'scrolllogoanimation',
    component: ScrollLogoAnimationComponent
  },
  {
    path: 'studentwellbeing',
    component: ScrollStudentwellbeingLogoComponent
  },
  {
    path: 'staffwellbeing',
    component: ScrollStaffwellbeingLogoComponent
  },
  {
    path: '**',
    redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes, RouterModule } from '@angular/router';

import { YoloItemListComponent } from './item/yolo-item-list.component';
import { YoloItemFormComponent } from './item/yolo-item-form.component';
import { YoloRegistrationComponent } from './registration/yolo-registration.component';
import { YoloLoginComponent } from './login/yolo-login.component';

const appRoutes: Routes = [
  { path: 'form', component: YoloItemFormComponent },
  { path: 'list', component: YoloItemListComponent },
  { path: 'register', component: YoloRegistrationComponent },
  { path: 'login', component: YoloLoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' }
];

export const routing = RouterModule.forRoot(appRoutes);
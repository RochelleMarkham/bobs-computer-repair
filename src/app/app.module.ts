import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServicesPerformedComponent } from './services-performed/services-performed.component';
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { ServiceSummaryComponent } from './service-summary/service-summary.component';
import { PartsAndServicesChargesComponent } from './parts-and-services-charges/parts-and-services-charges.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { shareService } from './share.service';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes : Routes = [
{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: '',
      component: CustomerInformationComponent
    },
    {
      path: '',
      component: PartsAndServicesChargesComponent
    },
    {
      path: '',
      component: ServiceSummaryComponent
    },
    {
      path: '',
      component: ServicesPerformedComponent
    }
  ]
}
];

@NgModule({
  declarations: [
    AppComponent,
    ServicesPerformedComponent,
    CustomerInformationComponent,
    ServiceSummaryComponent,
    PartsAndServicesChargesComponent,
    HomeComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatDialogModule
  ],
  providers: [shareService],
  bootstrap: [AppComponent]
})
export class AppModule { }

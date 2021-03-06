import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HomeComponent } from './home/home.component';
import { FormAndFormArrayComponent } from './form/components/form-and-form-array/form-and-form-array.component';
import { FormValidationsComponent } from './form/components/form-validations/form-validations.component';
import { SimpleFormComponent } from './form/components/simple-form/simple-form.component';
import { HeaderComponent } from './commom/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './commom/components/info/info.component';
import { SimpleTableComponent } from './table/components/simple-table/simple-table.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        TableComponent,
        DropdownComponent,
        HomeComponent,
        FormAndFormArrayComponent,
        FormValidationsComponent,
        SimpleFormComponent,
        HeaderComponent,
        InfoComponent,
        SimpleTableComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

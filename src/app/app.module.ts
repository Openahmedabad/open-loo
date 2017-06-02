/**
 * Root module for Open Loo Application
 * It defines the supporting mechanism and modules to bootup the application.
 * Other user defined modules should be loaded asynchronously. We are using built-in lazy loading mechanism provided by Angular.
 * @author ndkcha
 * @since 0.1.0
 * @version 0.2.0
 */

// import built-in and third party modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from 'angularfire2';
import { AgmCoreModule } from "@agm/core";
import "hammerjs";

// import in-app components
import { AppComponent } from './app.component';
import { ChooserComponent } from "./chooser/chooser.component";

// import routes
import { AppRoutes } from './app.routes';

// import in-app constants
import { FIREBASE } from './shared/app.constants';

@NgModule({
	declarations: [
		AppComponent,
		ChooserComponent
	],
	imports: [
		BrowserModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyCY8SMlQLM5zwr5cm_I-7kdu7Q2bNuGWAc'
		}),
		FormsModule,
		BrowserAnimationsModule,
		HttpModule,
		MaterialModule.forRoot(),
		AngularFireModule.initializeApp(FIREBASE),
		AppRoutes
	],
	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }

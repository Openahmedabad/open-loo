/**
 * Root module for Open Loo Application
 * It defines the supporting mechanism and modules to bootup the application.
 * Other user defined modules should be loaded asynchronously. We are using built-in lazy loading mechanism provided by Angular.
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

// import built-in and third party modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import "hammerjs";

// import in-app components
import { AppComponent } from './app.component';

// import routes
import { AppRoutes } from './app.routes';

// import in-app constants
import { FIREBASE } from './shared/app.constants';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot(),
		AngularFireModule.initializeApp(FIREBASE),
		AppRoutes
	],
	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }

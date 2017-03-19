/**
 * UI controller for application's root component.
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

// import build-in and third party modules
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss', './app.component.phone.scss']
})
export class AppComponent {
	/* mainly used for dependency injections */
	/**
	 * It initializes dependencies.
	 */
	constructor() {

	}
}

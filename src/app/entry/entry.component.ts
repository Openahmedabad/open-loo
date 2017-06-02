/**
 * UI controller for the main page of Entry module
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

// import built-in and third party modules
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: "ol-entry",
    templateUrl: "./entry.component.html",
    styleUrls: ['./entry.component.scss', "./entry.component.phone.scss"]
})
export class EntryComponent {
    /* mainly used for dependency injection */
    /**
     * It initializes dependencies.
     * @param {Router} router Provides the navigation and url manipulation capabilities
     */
    constructor(private router: Router) { }

    /** Go to homepage */
    goToHome(): void {
        this.router.navigate(["/"]);
    }
}
/**
 * UI controller of the page for making new entries.
 * @author ndkcha
 * @since 0.1.0
 * @version 0.2.0
 */

// import built-in and third party modules
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { Subscription } from "rxjs/Subscription";

// import in-app services
import { EntryService } from './../entry.service';

// import in-app interfaces
import { Loo } from './../../shared/data.interface';

// import constants
import { GLOBAL } from "./../../shared/app.constants";

@Component({
    selector: "ol-entry-add",
    templateUrl: "./add.component.html",
    styleUrls: ["./add.component.scss", "./add.component.phone.scss"]
})
export class AddComponent implements AfterViewInit, OnDestroy {
    /**
     * Loo details.
     * It is an object to maintain Loo details in bidirectional binding to UI.
     */
    looDetails: Loo = <Loo>{};
    /** Error message */
    error: string = "";
    /** Display status of save operation. */
    isSaveInProgress: boolean = false;
    /** Collection of subscribed variables */
    subscriptions: Subscription[] = [];

    /* mainly used for dependency injections */
    /**
     * It initializes dependencies
     * @param {EntryService} entryService Handles data communications in entry module
     * @param {MdSnackBar} snackBar Service to dispatch Material Design snack bar messages
     * @param {ActivatedRoute} activatedRoute Contains the information about a route associated with a component loaded
     * @param {Title} titleService A service that can be used to get and set the title of a current HTML document
     * @param {Router} router Provides the navigation and url manipulation capabilities
     */
    constructor(private entryService: EntryService, private snackBar: MdSnackBar, private activatedRoute: ActivatedRoute, private titleService: Title, private router: Router) { }

    /* called when component is initiated */
    ngAfterViewInit() {
        // get location from browser
        this.getLocation();

        /** Handler to observe changes in route data */
        let chData: Subscription = this.activatedRoute.data.subscribe(
            (data: any): void => {
                /** Title of the page */
                let title: string = data['title'];
                this.titleService.setTitle(title + GLOBAL.PAGE_TITLE);
            }
        );
        this.subscriptions.push(chData);
    }

    /** Fetches location from browser's navigator module */
    private getLocation(): void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: Position): void => {
                this.looDetails.latitude = position.coords.latitude;
                this.looDetails.longitude = position.coords.longitude;
            }, (failure: PositionError): void => {
                console.error("location", failure.message);
            }, {
                enableHighAccuracy: true
            });
        }
    }

    /** Discard an entry and go to main */
    discard(): void {
        this.router.navigate(["/"]);
    }

    /** Save the entry to firebase */
    save(): void {
        this.isSaveInProgress = true;
        this.error = "";
        if (((this.looDetails.latitude == undefined) || (this.looDetails.latitude == null) || (this.looDetails.longitude == undefined) || (this.looDetails.longitude == null)) && ((this.looDetails.address == undefined) || (this.looDetails.address == ""))) {
            this.error = "You either have to specify Lat, Long or the physicall address.";
            this.snackBar.open("We could not process the form!", null, {
                duration: 3000
            });
            this.isSaveInProgress = false;
            return;
        }
        if ((this.looDetails.fees == undefined) || (this.looDetails.fees == null)) {
            this.looDetails.fees = 0;
            this.snackBar.open("Please check the fees!", null, {
                duration: 3000
            });
            this.isSaveInProgress = false;
            return;
        }
        this.entryService.addLoo(this.looDetails).then((code: number) => {
            this.snackBar.open("Successfully added. Thank you!", null, {
                duration: 3000
            });
            this.isSaveInProgress = false;
            this.looDetails = <Loo>{};
            // get location from browser
            this.getLocation();
        }, (error: number): void => {
            this.snackBar.open("Failed to make an entry. Please try again!", null, {
                duration: 3000
            });
            this.isSaveInProgress = false;
        });
    }

    /** called when component is destroyed */
    ngOnDestroy() {
        for (let subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }
}
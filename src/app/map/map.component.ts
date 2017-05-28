/**
 * UI controller for Map module
 * @since 0.2.0
 * @version 0.2.0
 */

// import build-in and third party modules by Node.js
import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

// import in-app services
import { MapService } from "./map.service";

// import in-app interfaces
import { Loo } from './../shared/data.interface';

// import constants
import { GLOBAL } from "./../shared/app.constants";

@Component({
    selector: "ol-map",
    templateUrl: "./map.component.html",
    styleUrls: ["./map.component.scss", "./map.component.phone.scss"]
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
    /** List of the public loo */
    looList: Loo[] = [];
    /** Latitude in focus */
    latitude: number = 23.0225;
    /** Longitude in focus */
    longitude: number = 72.5714;
    /** Collection of subscribed variables */
    subscriptions: Subscription[] = [];
    /** Flag for loading data */
    isLoading: boolean = false;

    /* mainly used for dependency injection */
    /**
     * It initializes dependencies.
     * @param {ActivatedRoute} activatedRoute Contains the information about a route associated with a component loaded
     * @param {Title} titleService A service that can be used to get and set the title of a current HTML document
     * @param {MapService} mapService Handles data communications in map module
     * @param {Router} router Provides the navigation and url manipulation capabilities
     */
    constructor(private activatedRoute: ActivatedRoute, private titleService: Title, private mapService: MapService, private router: Router) { }

    /* called when component is being initaited */
    ngOnInit() {

    }

    /** called when component is initiaited */
    ngAfterViewInit() {
        // fetch current location of the device
        this.getLocation();
        /** Handler to observe changes in router data */
        let chData: Subscription = this.activatedRoute.data.subscribe((data: any): void => {
            /** Title of the page */
            let title: string = data['title'];
            this.titleService.setTitle(title + GLOBAL.PAGE_TITLE);
        });
        this.subscriptions.push(chData);
        // fetch list of devices
        if (this.looList.length < 1) {
            this.isLoading = true;
            this.mapService.fetchList();
        }
        /** Handler to observe changes from firebase data */
        let chLoo: Subscription = this.mapService.looList$.subscribe((code: number): void => {
            this.looList = this.mapService.looList;
            this.isLoading = false;
        });
    }

    /** Go to homepage */
    goToHome(): void {
        this.router.navigate(["/"]);
    }

    /** Fetches location from browser's navigator module */
    private getLocation(): void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: Position): void => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
            }, (failure: PositionError): void => {
                console.error("location", failure.message);
            }, {
                enableHighAccuracy: true
            });
        }
    }

    /** called when component is being destroyed */
    ngOnDestroy() {
        for (let subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

    /** Style array for Google Maps */
    mapStyle: any[] = [
        {
            stylers: [
                {
                    hue: "#4fc9e8"
                }, {
                    saturation: -20
                }
            ]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {
                    lightness: 100
                }, {
                    visibility: "simplified"
                }
            ]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        }
    ];
}
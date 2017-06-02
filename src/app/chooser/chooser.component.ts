/**
 * UI controller for main page of the application.
 * It will help user choose amongst several options including making new entry and plotting them into a map.
 * @author ndkcha
 * @since 0.2.0
 * @version 0.2.0
 */

// import built-in and third party modules by Node.js
import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { Subscription } from "rxjs/Subscription";

// import constants
import { GLOBAL } from "./../shared/app.constants";

@Component({
    selector: "ol-chooser",
    templateUrl: "./chooser.component.html",
    styleUrls: ["./chooser.component.scss"]
})
export class ChooserComponent implements OnInit, AfterViewInit, OnDestroy {
    /** Collection of subscribed variables */
    subscriptions: Subscription[] = [];

    /* mainly used for dependency injections */
    /**
     * It initializes dependencies.
     * @param {ActivatedRoute} activatedRoute Contains the information about a route associated with a component loaded
     * @param {Title} titleService A service that can be used to get and set the title of a current HTML document
     * @param {Router} router Provides the navigation and url manipulation capabilities
     */
    constructor(private activatedRoute: ActivatedRoute, private titleService: Title, private router: Router) { }

    /* called when component is being initiated */
    ngOnInit() {

    }

    /* called when component is initiated */
    ngAfterViewInit() {
        /** Handler to observe changes in route data */
        let chData: Subscription = this.activatedRoute.data.subscribe((data: any): void => {
            /** Title of the document */
            let title: String = data['title'];
            this.titleService.setTitle(title + GLOBAL.PAGE_TITLE);
        });
        this.subscriptions.push(chData);
    }

    goToAdd(): void {
        this.router.navigate(['/entry']);
    }

    goToMap(): void {
        this.router.navigate(['/map']);
    }

    /* called when component is destroyed */
    ngOnDestroy() {
        for (let subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }
}
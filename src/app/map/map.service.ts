/**
 * Angular service for map module.
 * Initiate the communication requests (such as API calls, websocket connections and callbacks, etc) from here.
 * @author ndkcha
 * @since 0.2.0
 * @version 0.2.0
 */

import { Injectable } from "@angular/core";
import { AngularFire } from 'angularfire2';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

// import in-app interfaces
import { Loo } from './../shared/data.interface';

// import constants
import { GLOBAL } from "./../shared/app.constants";

@Injectable()
export class MapService {
    /** Subject for loo */
    private subjectLoo: Subject<number> = new Subject<number>();
    /** Event handler for Loo subject */
    looList$: Observable<number> = this.subjectLoo.asObservable();
    /** List of the public loo */
    looList: Loo[] = [];

    /* mainly used for dependency injections */
	/**
	 * It initializes dependencies.
     * @param {AngularFire} firebaseService An angualr service to interact with firebase database
	 */
	constructor(private firebaseService: AngularFire) { }

    fetchList(): void {
        let data: Subscription = this.firebaseService.database.list("/loo").subscribe((loo: Loo[]): void => {
            this.looList = loo;
            for (let i = 0; i < this.looList.length; i++) {
                this.looList[i].latitude = parseFloat(this.looList[i].latitude.toString());
                this.looList[i].longitude = parseFloat(this.looList[i].longitude.toString());
            }
            this.subjectLoo.next(GLOBAL.STATUS.SUCCESS);
            data.unsubscribe();
        });
    }
}
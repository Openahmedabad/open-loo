/**
 * Angular service for Entry module.
 * Initiate the communication requests (such as API calls, websocket connections and callbacks, etc) from here.
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

// import built-in and third party modules
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

// import in-app interfaces
import { Loo } from './../shared/data.interface';

@Injectable()
export class EntryService {
    /* mainly used for dependency injections */
	/**
	 * It initializes dependencies.
     * @param {AngularFire} firebaseService An angualr service to interact with firebase database
	 */
	constructor(private firebaseService: AngularFire) { }

    /**
     * Store data on the cloud.
     * @param {Loo} entry Data about the loo wrapped in JSON object
     * @returns {PromiseLike<number>} A promise to handle the callbacks for making an entry to firebase
     */
    private addLoo(entry: Loo): PromiseLike<number> {
        let operation: PromiseLike<number> = new Promise<number>(
            (resolve: (code: number) => void, reject: (code: number) => void) => {
                // start a push operation and push the object against the id generated from UUID in "loo" namespace
                this.firebaseService.database.list("loo/" + this.generateUUID()).push(entry).then((res: any) => {
                    // thai gayu!!!!!
                    console.info(res);
                    resolve(200);
                }).catch((err: Error) => {
                    // naa thayu :'(
                    console.error(err);
                    reject(400);
                });
            }
        );
        return operation;
    }

    /**
     * It generates UUID for preparing primary index of the data
     * @returns {string} UUID as string
     */
    private generateUUID(): string {
        let d: number = new Date().getTime();
        let uid: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d/16);
            return (c == 'x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uid;
    }
}
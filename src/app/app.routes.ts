/**
 * Routing module for Application Root.
 * @author ndkcha
 * @since 0.1.0
 * @version 0.2.0
 */

// import built-in and third party modules
import { Routes, RouterModule } from '@angular/router';

// import in-app components
import { AppComponent } from './app.component';
import { ChooserComponent } from "./chooser/chooser.component";

/** Routes for root URL components */
const routes: Routes = [
    {
        path: "",
        component: ChooserComponent,
        data: {
            title: "What do you want to do ?"
        }
    }, {
        path: "entry",
        loadChildren: "./entry/entry.module#EntryModule"
    }, {
        path: "map",
        loadChildren: "./map/map.module#MapModule"
    }
];

/** Router module for root URL component */
export const AppRoutes = RouterModule.forRoot(routes, {
    useHash: true
});
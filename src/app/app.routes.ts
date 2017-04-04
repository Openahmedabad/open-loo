/**
 * Routing module for Application Root.
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

// import built-in and third party modules
import { Routes, RouterModule } from '@angular/router';

// import in-app components
import { AppComponent } from './app.component';

/** Routes for root URL components */
const routes: Routes = [
    {
        path: "",
        redirectTo: "entry",
        pathMatch: "full"
    }, {
        path: "entry",
        loadChildren: "./entry/entry.module#EntryModule"
    }
];

/** Router module for root URL component */
export const AppRoutes = RouterModule.forRoot(routes, {
    useHash: true
});
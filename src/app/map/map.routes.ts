/**
 * Router module for Map module.
 * @author ndkcha
 * @since 0.2.0
 * @version 0.2.0
 */

// import build-in and third party modules by Node.js
import { Routes, RouterModule } from "@angular/router";

// import in-app component
import { MapComponent } from "./map.component";

/** Routes for URL components of Map module */
const routes: Routes = [
    {
        path: "",
        component: MapComponent,
        data: {
            title: "Map"
        }
    }
];

/** Router module for Map URL component  */
export const MapRoutes = RouterModule.forChild(routes);
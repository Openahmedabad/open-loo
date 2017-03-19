/**
 * Routing module for Entry module
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

// import built-in and third party modules
import { Routes, RouterModule } from '@angular/router';

// import in-app components
import { EntryComponent } from './entry.component';
import { AddComponent } from './add/add.component';

/** Routes for URL components of Entry module */
const routes: Routes = [
    {
        path: "",
        component: EntryComponent,
        children: [
            {
                path: "",
                component: AddComponent
            }
        ]
    }
];

/** Router module for entry URL component  */
export const EntryRoutes = RouterModule.forChild(routes);
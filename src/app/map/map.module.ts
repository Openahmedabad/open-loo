/**
 * Map module.
 * This module provides functionality to view the entries in map
 * @author ndkcha
 * @since 0.2.0
 * @version 0.2.0
 */

// import built-in and in-app modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from "@agm/core";

// import in-app components
import { MapComponent } from './map.component';

// import in-app providers
import { MapService } from './map.service';

// import routes
import { MapRoutes } from './map.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        MapRoutes,
        AgmCoreModule
    ],
    declarations: [
        MapComponent
    ],
    providers: [MapService]
})
export class MapModule { }
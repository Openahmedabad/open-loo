/**
 * Entry module.
 * This module provides functionality to add/update entries in Open Loo database.
 * @author ndkcha
 * @since 0.1.0
 * @version 0.1.0
 */

// import built-in and in-app modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

// import in-app components
import { EntryComponent } from './entry.component';
import { AddComponent } from './add/add.component';

// import in-app providers
import { EntryService } from './entry.service';

// import routes
import { EntryRoutes } from './entry.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        EntryRoutes
    ],
    declarations: [
        EntryComponent,
        AddComponent
    ],
    providers: [EntryService]
})
export class EntryModule { }
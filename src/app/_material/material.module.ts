import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';

//Angular Material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
    imports: [ CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatCardModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatGridListModule
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatCardModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatGridListModule
    ],
    providers: [],
})
export class MaterialModule {}

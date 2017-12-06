import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorretorTableComponent } from './corretor/corretor-table/corretor-table.component';

const APP_ROUTES: Routes = [
    { path: '', component: CorretorTableComponent }
    //{ path: '**', component: DashComponent } 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
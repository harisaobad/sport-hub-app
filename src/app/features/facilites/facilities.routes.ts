import { Routes } from '@angular/router';
import { FacilitiesOverviewPageComponent } from './pages/facilities-overview-page/facilities-overview-page.component';
import { FacilityDetailsPageComponent } from './pages/facility-details-page/facility-details-page.component';

export const FACILITIES_ROUTES: Routes = [
	{
		path: '',
		component: FacilitiesOverviewPageComponent,
	},
	{
		path: ':id',
		component: FacilityDetailsPageComponent,
	},
];

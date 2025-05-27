import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const APP_ROUTES: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: 'facilities',
				loadChildren: () => import('../../features/facilites/facilities.routes').then((m) => m.FACILITIES_ROUTES),
			},
		],
	},
];

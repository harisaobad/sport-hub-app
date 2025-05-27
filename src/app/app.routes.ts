import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('../app/core/layout/routes').then((m) => m.APP_ROUTES),
	},
];

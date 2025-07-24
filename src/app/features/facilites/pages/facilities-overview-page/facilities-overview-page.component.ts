import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { GetFacilitiesEndpointResponse } from '../../../../modules/shared/endpoints/facilities/get-facilities.endpoint';
import {
	FacilitiesFilter,
	FacilitiesFilterFormComponent,
} from '../../components/facilities-filter-form/facilities-filter-form.component';
import { FacilityCardComponent } from '../../components/facility-card/facility-card.component';
import { FacilitiesService } from '../../services/facilities.service';

@Component({
	selector: 'app-facilities-overview-page',
	standalone: true,
	imports: [FacilityCardComponent, FacilitiesFilterFormComponent, AsyncPipe],
	templateUrl: './facilities-overview-page.component.html',
	styleUrl: './facilities-overview-page.component.scss',
})
export class FacilitiesOverviewPageComponent implements OnInit {
	private _facilitiesService: FacilitiesService = inject(FacilitiesService);
	private _destroyRef: DestroyRef = inject(DestroyRef);
	public facilities: GetFacilitiesEndpointResponse[] = [];
	private _refresh$: BehaviorSubject<FacilitiesFilter> = new BehaviorSubject<FacilitiesFilter>({
		name: null,
		city: null,
	});
	public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
	public hasError: boolean = false;

	public ngOnInit(): void {
		this._refresh$
			.pipe(
				tap(() => this.loading$.next(true)),
				switchMap((filter: FacilitiesFilter) => this._facilitiesService.getList(filter.name, filter.city)),
				takeUntilDestroyed(this._destroyRef),
			)
			.subscribe({
				next: (res: GetFacilitiesEndpointResponse[]) => {
					this.facilities = res;
					this.hasError = false;
					this.loading$.next(false);
				},
				error: (err) => {
					console.log(err);
					this.facilities = [];
					this.hasError = true;
					this.loading$.next(false);
				},
			});
	}
	public handleFilterChange(filter: FacilitiesFilter): void {
		this._refresh$.next(filter);
	}
}

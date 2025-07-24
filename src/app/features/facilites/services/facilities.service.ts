import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
	GetFacilitiesEndpoint,
	GetFacilitiesEndpointResponse,
} from '../../../modules/shared/endpoints/facilities/get-facilities.endpoint';
import {
	GetFacilityByIdEndpoint,
	GetFacilityByIdEndpointResponse,
} from '../../../modules/shared/endpoints/facilities/get-facility-by-id.endpoint';

@Injectable({
	providedIn: 'root',
})
export class FacilitiesService {
	private _getFacilitiesEndpoint: GetFacilitiesEndpoint = inject(GetFacilitiesEndpoint);
	private _getFacilityByIdEndpoint: GetFacilityByIdEndpoint = inject(GetFacilityByIdEndpoint);

	public getList(name?: string, city?: string): Observable<GetFacilitiesEndpointResponse[]> {
		return this._getFacilitiesEndpoint.handle(name, city);
	}
	public getById(id: string): Observable<GetFacilityByIdEndpointResponse> {
		return this._getFacilityByIdEndpoint.handle(id);
	}
}

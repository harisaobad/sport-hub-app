import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.dev';

@Injectable({ providedIn: 'root' })
export class GetFacilityByIdEndpoint {
	private http: HttpClient = inject(HttpClient);

	public handle(id: string): Observable<GetFacilityByIdEndpointResponse> {
		return this.http.get<GetFacilityByIdEndpointResponse>(`${environment.apiUrl}/facilities/${id}`);
	}
}

export interface GetFacilityByIdEndpointResponse {
	id: string;
	name: string;
	imageUrl: string;
}

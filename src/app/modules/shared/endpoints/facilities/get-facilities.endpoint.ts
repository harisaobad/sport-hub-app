import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.dev';

@Injectable({ providedIn: 'root' })
export class GetFacilitiesEndpoint {
	private http: HttpClient = inject(HttpClient);

	public handle(name?: string, city?: string): Observable<GetFacilitiesEndpointResponse[]> {
		let params = new HttpParams();
		if (name) {
			params = params.append('name', name);
		}
		if (city) {
			params = params.append('city', city);
		}
		return this.http.get<GetFacilitiesEndpointResponse[]>(`${environment.apiUrl}/facilities`, { params: params });
	}
}

export interface GetFacilitiesEndpointResponse {
	id: string;
	name: string;
	imageUrl: string;
	city: string;
}

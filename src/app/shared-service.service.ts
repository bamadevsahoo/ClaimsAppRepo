import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Claims} from "./model/claims";
import {Observable} from 'node_modules/rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http: HttpClient) { }
  
  baseUrl: string = 'https://insuranceclaimsapi.azurewebsites.net/api/AutoClaimsAPI/';
  //baseUrl: string = 'http://localhost:64439/api/AutoClaimsAPI/';
 

  getAllClaims() {
    return this.http.get<Claims[]>(this.baseUrl +  'AllClaims');
  }

  getClaim(claimNumber:string) {
    return this.http.get<Claims>(this.baseUrl +  'GetClaims/'+claimNumber);
  }

  createclaims(claimItem: Claims):Observable<Claims> {
    return this.http.post<Claims>(this.baseUrl + "CreateClaim", claimItem).pipe(map(x=>x));
  }
}



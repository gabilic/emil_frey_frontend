import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private http: HttpClient) { }

  getLeads() {
    return this.http.get('http://localhost:8080/EmilFreyProject/leads');
  }
}

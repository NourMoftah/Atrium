import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse, Rider } from '../models/rider';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://api.makook.com';
  register(riderData: Partial<Rider>): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/riders/register`, riderData);
  }

  login(credentials: { phone: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/riders/login`, credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem('makook_token', token);
  }}
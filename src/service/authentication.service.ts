import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    public errors: string = '';
    private loginURL = 'api/login.json';
    
    constructor(private http: HttpClient,
        private router: Router) {

    }

    login(username: string, password: string) { 
        return this.http.get<any>(this.loginURL)
        .subscribe((data) => {debugger;
            if (data.username === username && data.password === password) { 
                localStorage.setItem('user', JSON.stringify(data));
                this.router.navigate(['/home'])
            } else {
                if(!localStorage.getItem('user')) {
                    localStorage.removeItem('user')
                }
                this.router.navigate(['/login'])
            }
        });
    }
}

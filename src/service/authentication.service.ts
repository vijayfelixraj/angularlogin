import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { ILogin } from './login';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private loginURL = 'api/login.json';
    
    constructor(private http: HttpClient) {

    }

    login(username: string, password: string) { 
        debugger;
        return this.http.get(this.loginURL)
        .pipe(
            map (
                data => {
                    console.log(JSON.stringify(data), 'return api result')
                    debugger;
                }),
            catchError(this.handError)
        );
    }
    private handError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occure: ${ err.error.message }`;
        } else {
            errorMessage = `Server returned code ${err.status}, and the error message is ${err.message }`;
        }
        return throwError(errorMessage);
    }

}
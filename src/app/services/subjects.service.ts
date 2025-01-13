import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SubjectsService {

    constructor(private readonly _http: HttpClient) {}
    getSubjectsList(): Observable<any> {
        return this._http.get<any>("data.json");
    }
}
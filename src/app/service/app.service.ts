import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    Language: string = 'en-us';
    private LangSubject: BehaviorSubject<string> = new BehaviorSubject(this.Language);
    Lang$: Observable<string> = this.LangSubject.asObservable();
    LangObj = {};
    constructor(private http: HttpClient) { }
    getLang(_Lang: string) {
        this.Language = _Lang;
        this.LangSubject.next(this.Language);
        this.getLanguage();
    }
    private getLanguage() {
        this.http.get('assets/fill/' + this.Language + '.json').subscribe(json => {
            this.LangObj = json
        })
    }
}
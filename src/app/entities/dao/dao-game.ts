import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
export class DaoGame {
    url = ;
    constructor(private http: HttpClient){
    }

    getAll() {
        return this.http.get(this.url)
    }

    getById(id) {
        return this.http.get(`${this.url}/${id}`)
    }
}

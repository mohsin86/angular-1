import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import * as _ from 'lodash';

@Injectable()
export class ServerServices {
    constructor(private http: HttpClient) {
    }
     dbUrl = 'https://my-angular-2e160.firebaseio.com/dat.json';

    storeServer(server: any[]): Observable<any> {
       return this.http.post(this.dbUrl, server);
    }
    getServer(): Observable<any> {
        return this.http.get(this.dbUrl).map(data => _.values(data));
    }
}

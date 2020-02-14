import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostPayload} from "./post-payload";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddAnnounceService {
  private url = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  addAnnounce(postPayload: PostPayload): Observable<any>{
    console.log(postPayload);
    return this.httpClient.post(this.url + 'posts/',postPayload);
  }
}

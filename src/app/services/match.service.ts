import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { apiRoutes } from '../utils/constants/apiRoutes';
import { Subject } from 'rxjs';
import { IMatch } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(
    private httpClientService: HttpClientService,
  ) { }

  getUserMatches() {
    var subject = new Subject<IMatch[]>();
    this.httpClientService
      .get<IMatch[]>(apiRoutes.match.list)
      .subscribe(data => subject.next(data as any))

    return subject.asObservable();
  }

}

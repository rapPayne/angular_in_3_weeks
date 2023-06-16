import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people: WritableSignal<any> = signal([]);

  constructor(private _httpClient: HttpClient) { }

  fetchPeople(numberOfPeople: number = 10) {
    const url = `https://randomuser.me/api/?results=${numberOfPeople}`
    this._httpClient.get(url).subscribe({
      next: (res: any) => this.people.set(res.results),
      error: (err) => console.error("Problem fetching", err)
    })
  }

}

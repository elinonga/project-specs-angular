import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddSpec: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddSpec(): void {
    this.showAddSpec = !this.showAddSpec;
    this.subject.next(this.showAddSpec);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
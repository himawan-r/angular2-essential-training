import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PopupService {
    content: Subject<string> = new Subject();
    show: Subject<boolean> = new Subject();

    close() {
      this.show.next(true);
    }
}
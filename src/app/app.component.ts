import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'note-app-angular';
  notes: Observable<any[]>;
  note_title: string;
  note_body: 'some notes body !!!';

  constructor(private db: AngularFireDatabase) {
    this.notes = db.list('Notes').valueChanges();
  }

  onSubmit() {
    this.db.list('Notes').push({
      title: this.note_title || '',
      body: this.note_body || ''
    });
  }
}

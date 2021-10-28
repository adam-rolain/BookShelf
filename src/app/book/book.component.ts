import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book?: Book;
  @Output() deleted: EventEmitter<Book> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteBook() {
    this.deleted.emit(this.book);
  }

}

import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  newBook: Book = {
    title: '',
    author: '',
    publicationYear: 0
  };

  constructor(private bookService: BookService) { 
    this.books = this.bookService.getBooks();
  }

  ngOnInit(): void {
  }

  addBook() {
    this.books.push(this.newBook);
  }

}

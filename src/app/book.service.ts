import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', publicationYear: 2003 },
    { title: 'Moby-Dick', author: 'Herman Melville', publicationYear: 1851 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', publicationYear: 1813 }
  ];

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }
}

import { Books } from './books.model';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PaginationBooks } from './pagination-books.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BooksService {
    baseUrl = environment.baseUrl;

    private booksLista: Books[] = [];

    bookSubject = new Subject<Books>();

    bookPagination: PaginationBooks;
    bookPaginationSubject = new Subject<PaginationBooks>();

    constructor(private http: HttpClient) {}

    obtenerLibros(
        libroPorPagina: number,
        paginaActual: number,
        sort: string,
        sortDirection: string,
        filterValue: any
    ): void {
        const request = {
            pageSize: libroPorPagina,
            page: paginaActual,
            sort,
            sortDirection,
            filterValue,
        };

        this.http
            .post<PaginationBooks>(this.baseUrl + 'api/Libro/Pagination', request)
            .subscribe((response) => {
                this.bookPagination = response;
                this.bookPaginationSubject.next(this.bookPagination);
            });
    }

    obtenerActualListener(): any {
        return this.bookPaginationSubject.asObservable();
    }

    guardarLibro(book: Books): void {
        this.http.post(this.baseUrl + 'api/libro', book).subscribe((response) => {
            this.bookSubject.next(book);
        });
    }

    guardarLibroListener(): any {
        return this.bookSubject.asObservable();
    }
}

import { Books } from './books.model';
import { Subject } from 'rxjs';

export class BooksService {
    private booksLista: Books[] = [
        { libroId: 1, titulo: 'Algoritmos', descripcion: 'Libro básico', precio: 18, autor: 'Leticia Rodríguez'},
        { libroId: 2, titulo: 'Angular', descripcion: 'Libro intermedio', precio: 25, autor: 'Isabel Bazó'},
        { libroId: 3, titulo: 'Laravel', descripcion: 'Libro avanzado', precio: 30, autor: 'María Bazó'},
        { libroId: 4, titulo: 'Node.js', descripcion: 'Todos los niveles', precio: 99, autor: 'Rebeca Bazó'},
    ];

    bookSubject = new Subject<Books>();

    obtenerLibros() {
        return this.booksLista.slice();
    }

    guardarLibro(book: Books){
        this.booksLista.push(book);
        this.bookSubject.next(book);
    }
}

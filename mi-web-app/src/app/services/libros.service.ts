import { Subject } from 'rxjs';

export class LibrosService {
    librosSubject = new Subject();

    private libros = ['Para salvarte', 'Los 7 hábitos', 'Como ganar amigos'];

    agregarLibro(libroNombre: string){
        this.libros.push(libroNombre);
        //this.librosSubject.next();  /* Esta instrucción parece estar desactualizada */
        this.librosSubject.next(1);
    }

    eliminarLibro(libroNombre: string){
      this.libros = this.libros.filter(p => p !== libroNombre);
      //this.librosSubject.next();  /* Esta instrucción parece estar desactualizada */
      this.librosSubject.next(1);
    }

    obtenerLibros(){
        return [...this.libros];
    }
}

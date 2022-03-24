import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-libros',
    templateUrl: './libros.component.html',
})

export class LibrosComponent implements OnInit, OnDestroy {
    /* libros = ['Harry Potter', 'El Señor de los Anillos', 'Narnia']; */
    libros = [];
    constructor(private librosService: LibrosService){}
    private libroSubscription: Subscription;
    eliminarLibro(libro: string){
        //this.libros = this.libros.filter(p => p !== libro);
    }
    guardarLibro(f){
        if(f.valid){
            //this.libros.push(f.value.nombreLibro)
            this.librosService.agregarLibro(f.value.nombreLibro);
            this.libroSubscription = this.librosService.librosSubject.subscribe(() => {
                this.libros = this.librosService.obtenerLibros();
            });
        }
    }

    ngOnInit() {
        this.libros = this.librosService.obtenerLibros();
    }

    ngOnDestroy(){
        this.libroSubscription.unsubscribe();
    }
}

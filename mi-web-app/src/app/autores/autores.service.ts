import { Injectable } from "@angular/core";
import { Autor } from "./autor.model";

@Injectable({
    providedIn: 'root'
})
export class AutoresService {
    private autoresLista: Autor[] = [
        { autorId: 1, nombre: 'Leticia', apellido: 'Rodríguez', gradoAcademico: 'Licenciada en Educación' },
        { autorId: 2, nombre: 'Isabel', apellido: 'Bazó', gradoAcademico: 'Cineasta' },
        { autorId: 3, nombre: 'María', apellido: 'Canelón', gradoAcademico: 'Ingeniero Informático' },
        { autorId: 4, nombre: 'Rebeca', apellido: 'Robles', gradoAcademico: 'Licenciada en Computación' }
    ];

    obtenerAutores(){
        return this.autoresLista.slice();
    }
}

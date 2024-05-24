export class Pais {
  id: number;
  nombre: string;
  anioFormacion: number;
  idiomaOficial: string;
  capital: string;
  descripcion: string;
  bandera: string;

  constructor(
    id: number,
    nombre: string,
    anioFormacion: number,
    idiomaOficial: string,
    capital: string,
    descripcion: string,
    bandera: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.anioFormacion = anioFormacion;
    this.idiomaOficial = idiomaOficial;
    this.capital = capital;
    this.descripcion = descripcion;
    this.bandera = bandera;
  }
}




class Usuario2{
    constructor(nombre, apellido, mascotas, libros){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        `${this.nombre} ${this.apellido}`
    };
    getMascotas(){
        if(this.mascotas < 1){
            console.log('Aún no hay mascotas');
        }
        return this.mascotas.length;
    }
    getBooks(){
        if(this.libros < 1){
            console.log('No hay libros');
        } else{
            let titulosLibros = [];
            this.libros.forEach((libros) => {
                titulosLibros.push(libros.nombre);
            });
            return titulosLibros;
        }
    }
    addMascotas(mascotas){
        if(!mascotas) return;
        this.mascotas.push(mascotas);
    }
    addBook(libros, autor){
        if(!libros || !autor) return;
        this.libros.push({nombre: libros, autor: autor});
    }
}

let usuario2 = new Usuario2(
    'Tatiana', 'Soifer',
    ['perro', 'gato', 'pez'], 
    [
        {
            'titulo': 'Mi planta de naranja Lima', 
            'autor': 'José Mauro de Vasconcelos'
        }, 
        {
            'titulo': 'El duelo',
            'autor': 'Gabriel Rolon'
        }
    ]
);

let usuario44 = new Usuario2("Juan", "Perez", ["pez", "gato"], [{nombre: "El Hobbit", autor: "Tolkien" }])

console.log(usuario2);
console.log(usuario44);
function Usuario (nombre, apellido, mascotas, libros){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
}
Usuario.prototype.getFullName = function (){
    return `${this.nombre} ${this.apellido}`;
}
Usuario.prototype.addMascotas = function(mascotas){
    if (!mascotas) return;
    this.mascotas.push(mascotas);
}
Usuario.prototype.getMascotas = function(){
    if (this.mascotas < 1){
        console.log('Aún no hay mascotas');
    }
    return this.mascotas.length;
};
Usuario.prototype.addBook = function(libro, autor){
    if (!libro || !autor) return;
    this.libros.push({nombre: libro, autor: autor});
};
Usuario.prototype.getBooks = function(){
    if (this.libros < 1){
        console.log('No hay libros');
    } else{
        let titulosLibros = [];
        this.libros.forEach((libro) => {
            titulosLibros.push(libro.nombre);
        });
        return titulosLibros;
    }
};

let usuario1 = new Usuario(
    'Tatiana', 'Soifer',
    ['perro', 'gato', 'pez'], 
    [
        {
            'nombre': 'Mi planta de naranja Lima', 
            'autor': 'José Mauro de Vasconcelos'
        }, 
        {
            'nombre': 'El duelo',
            'autor': 'Gabriel Rolon'
        }
    ]
);
console.log(usuario1);
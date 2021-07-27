let operacion = async (a: number, b: number, operations: string) =>{
    switch (operations){
        case 'suma':
            let {suma} = await import('./suma');
            let sumar = new suma(a, b);
            return sumar.show();
        case 'resta':
            let {resta} = await import ('./resta');
            let restar = new resta(a, b);
            return restar.show();
        default:
            break;
    }
}

let operaciones = () =>{
    operacion (2,3, 'suma').then(result => console.log(result))
    operacion (2,3, 'resta').then(result => console.log(result))
}

operaciones();
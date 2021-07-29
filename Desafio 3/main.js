const show = async (text, callback, time = 1000) => {
    let array = text.split(' ');
    let i = 0;
    let largo = array.length;
    for (i; i < array.length; i++) {
        await timeOut(time);
        console.log(array[i]);
    }
    callback(`Proceso completo, en total hay: ${largo} palabras`);
};

const timeOut = (time) => {
    return new Promise((res, rej) => {
    setTimeout(() => {
        res();
    }, time);
    });
};

async function showAll(){
    const texto1 = 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico';
    const texto2 = 'En demostraciones de tipografías o de borradores de diseño para probar el diseño visual';
    const texto3 = 'Antes de insertar el texto final.';
    try{
    await show(texto1, (word) => {
        console.log(word);
    });
    await show(
        texto2,
        (word) => {
            console.log(word);
        },
        2000
    );
    await show(
        texto3,
        (word) => {
            console.log(word);
        },
        3000
    );
    } catch (e){
        console.log(e);
    }
}

showAll();  
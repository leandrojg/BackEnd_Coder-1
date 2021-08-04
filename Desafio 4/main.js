const { Observable, fromEvent } = rxjs;
const { tap } = rxjs.operators;
const input = document.getElementById('inputText');
const targetScreen = document.querySelector('.target');

const observable = new Observable((suscriptor) => {
    try {
        const emitter = fromEvent(input, 'keyup').pipe(
            tap((e) => {
            const targetValue = e.target.value;
            if (targetValue === 'error') suscriptor.error('Error ingresado');
            if (targetValue === 'complete') suscriptor.complete();
            })
        );
        emitter.subscribe(suscriptor);
        setTimeout(() => {
            suscriptor.complete();
        }, 30000);
    } catch (error) {
        suscriptor.error(error);
    };
});
observable.subscribe({
    next(e) {
    const targetArr = e.target.value.split('');
        targetScreen.textContent = targetArr.reverse().join('');
    },
    complete() {
        stop();
        console.log("completado!");
    },
    error(error) {
        console.error(error);
    },
});
const stop = () => {
    input.value = '';
    input.disabled = true;
    targetScreen.textContent = '';
};


    const { Observable, fromEvent } = rxjs;
    const { tap } = rxjs.operators;
    const input = document.getElementById("inputText");
    const targetScreen = document.querySelector(".target");

    const observable = new Observable((subscriber) => {
      try {
        const emitter = fromEvent(input, "keyup").pipe(
          tap((e) => {
            const targetValue = e.target.value;
            if (targetValue === "error") subscriber.error("Error ingresado");
            if (targetValue === "complete") subscriber.complete();
          })
        );
        emitter.subscribe(subscriber);

        setTimeout(() => {
          subscriber.complete();
        }, 30000);
      } catch (error) {
        subscriber.error(error);
      }
    });

    observable.subscribe({
      next(e) {
        const targetArr = e.target.value.split("");
        targetScreen.textContent = targetArr.reverse().join("");
      },
      complete() {
        stopProcesses();
        console.log("completado!");
      },
      error(error) {
        console.error(error);
      },
    });

    const stopProcesses = () => {
      input.value = "";
      input.disabled = true;
      targetScreen.textContent = "";
    };


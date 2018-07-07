 'use strict';

//stałej nie da się nadpisać, chyba, że przy obiekcie wejdziemy w środek i będziemy chcieli coś zmienić (const ma zasięg blokowy) np;
const STALA = {
    foo: 10,
    bar: "string",
}
STALA.foo = "Nowa wartość";

console.log(STALA);


//----------------------------------------

//domyślne parametry funkcji

function show(imie = "Adam", nazwisko= "Nowacki") {
    console.log(imie, nazwisko);
}
show();
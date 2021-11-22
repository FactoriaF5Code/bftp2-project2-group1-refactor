class WheelOfDoom {
    constructor(coders){
        this.coders = coders;
        // slice sirve para copiar los datos de un array a otro
        this.codersOriginales = coders.slice();
    }

    codersQueQuedan() {
        return this.coders;
    }

    elegirCoder() {
        let position = Math.floor(Math.random()*this.coders.length);
        // splice sirve para "sacar" un elemento del array
        let elegida = this.coders.splice(position,1)[0];
        if (this.coders.length === 0) {
            this.reiniciar();
        }
        return elegida;
    }

    reiniciar() {
        this.coders = this.codersOriginales.slice();
    }

}


class WheelOfDoomTramposa {
    constructor(coders){
        this.coders = coders;
        // slice sirve para copiar los datos de un array a otro
        this.codersOriginales = coders.slice();
    }

    codersQueQuedan() {
        return this.coders;
    }

    elegirCoder() {
        return "Rosa";
    }

    reiniciar() {
        this.coders = this.codersOriginales.slice();
    }

}

module app.components.contabilita {
    export interface IStore {
        Operazione: string;
        Tipo: string;
        Data: Date;
        Importo: number;
       
    }

    export class Contabilita implements IStore {
        constructor(
            public Operazione: string,
            public Tipo: string,
            public Data: Date,
            public Importo: number
           ) {
        }
    }
}

//module app.components.contabilita {
    interface IStoreContabilitaController {
        title: string;
        stores: any[];
        
    }

    /* export class ContabilitaController {
         constructor() {
             console.log('ContabilitaController');
         }
     }
     angular.module('app').controller('ContabilitaController', ContabilitaController);*/

    class ContabilitaController implements IStoreContabilitaController {
        title: string;
        total: number;
        stores: any[];
        Importo: any;
        

        constructor() {
            this.title = "Lista Operazioni";
            this.stores = [
                {
                    "Operazione": "Spese Autostrada",
                    "Tipo":"Uscita",
                    "Data": "12-11-2018",
                    "Importo": 6,

                },

                {
                    "Operazione": "Spese Carburante",
                    "Tipo": "Uscita",
                    "Data": "12-11-2018",
                    "Importo": 10,

                },

                {
                    "Operazione": "Spese Pranzo",
                    "Tipo": "Uscita",
                    "Data": "12-11-2018",
                    "Importo": 10,

                },

                {
                    "Operazione": "Stipendio Marzo",
                    "Tipo": "Entrata",
                    "Data": "12-11-2018",
                    "Importo": 50,

                },
            ];
        }

        // METODI 


        totale_uscite(): any {
            var numbers = new Array();
            this.stores.forEach(function (value) {
                if (value.Tipo == "Uscita") {

                    //console.log(value.Importo);
                    length = numbers.push(value.Importo);
                      
                }
            });
           
            let somma = (container, current) => container + current;
            console.log(numbers.reduce(somma));
            let uscite = numbers.reduce(somma)

            return uscite
        }

        totale_entrate(): any {
            var numbers = new Array();
            this.stores.forEach(function (value) {
                if (value.Tipo == "Entrata") {

                    //console.log(value.Importo);
                    length = numbers.push(value.Importo);

                }
            });

            let somma = (container, current) => container + current;
            console.log(numbers.reduce(somma));
            let entrate = numbers.reduce(somma)

            return entrate
        }

        utile(): number {
            let utile = this.totale_entrate() - this.totale_uscite();
            return utile
        }
   
    }

    angular.module("app").controller("ContabilitaController", ContabilitaController as any);

//}
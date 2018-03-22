/* export class ContabilitaController {
     constructor() {
         console.log('ContabilitaController');
     }
 }
 angular.module('app').controller('ContabilitaController', ContabilitaController);*/
var ContabilitaController = /** @class */ (function () {
    function ContabilitaController() {
        this.title = "Lista Operazioni";
        this.stores = [
            {
                "Operazione": "Spese Autostrada",
                "Tipo": "Uscita",
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
    ContabilitaController.prototype.totale_uscite = function () {
        var numbers = new Array();
        this.stores.forEach(function (value) {
            if (value.Tipo == "Uscita") {
                //console.log(value.Importo);
                length = numbers.push(value.Importo);
            }
        });
        var somma = function (container, current) { return container + current; };
        console.log(numbers.reduce(somma));
        var uscite = numbers.reduce(somma);
        return uscite;
    };
    ContabilitaController.prototype.totale_entrate = function () {
        var numbers = new Array();
        this.stores.forEach(function (value) {
            if (value.Tipo == "Entrata") {
                //console.log(value.Importo);
                length = numbers.push(value.Importo);
            }
        });
        var somma = function (container, current) { return container + current; };
        console.log(numbers.reduce(somma));
        var entrate = numbers.reduce(somma);
        return entrate;
    };
    ContabilitaController.prototype.utile = function () {
        var utile = this.totale_entrate() - this.totale_uscite();
        return utile;
    };
    return ContabilitaController;
}());
angular.module("app").controller("ContabilitaController", ContabilitaController);
//} 
//# sourceMappingURL=ContabilitaController.js.map
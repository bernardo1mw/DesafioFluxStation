"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelEnum = void 0;
var FuelEnum;
(function (FuelEnum) {
    let Fuels;
    (function (Fuels) {
        Fuels[Fuels["Gasolina_Comum"] = 5] = "Gasolina_Comum";
        Fuels[Fuels["Gasolina_Aditivada"] = 6] = "Gasolina_Aditivada";
        Fuels[Fuels["Etanol"] = 3] = "Etanol";
        Fuels[Fuels["Etanol_aditivado"] = 4] = "Etanol_aditivado";
        Fuels[Fuels["GNV"] = 5.5] = "GNV";
        Fuels[Fuels["Diesel"] = 4.2] = "Diesel";
    })(Fuels = FuelEnum.Fuels || (FuelEnum.Fuels = {}));
})(FuelEnum || (exports.FuelEnum = FuelEnum = {}));
//# sourceMappingURL=fuel.enum.js.map
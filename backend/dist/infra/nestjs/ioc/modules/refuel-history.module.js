"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefuelHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const refuel_history_1 = require("../providers/refuel-history");
const controllers_1 = require("../../controllers");
let RefuelHistoryModule = class RefuelHistoryModule {
};
exports.RefuelHistoryModule = RefuelHistoryModule;
exports.RefuelHistoryModule = RefuelHistoryModule = __decorate([
    (0, common_1.Module)({
        controllers: [controllers_1.RefuelHistoryController],
        providers: [...refuel_history_1.refuelHistoryProviders],
        exports: [...refuel_history_1.refuelHistoryExports],
    })
], RefuelHistoryModule);
//# sourceMappingURL=refuel-history.module.js.map
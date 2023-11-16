"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelEntity = void 0;
const typeorm_1 = require("typeorm");
const refuelHistory_1 = require("./refuelHistory");
let FuelEntity = class FuelEntity {
};
exports.FuelEntity = FuelEntity;
__decorate([
    (0, typeorm_1.Column)('character varying', { primary: true, name: 'name' }),
    __metadata("design:type", String)
], FuelEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { name: 'price' }),
    __metadata("design:type", String)
], FuelEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { name: 'stock', unique: true }),
    __metadata("design:type", String)
], FuelEntity.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => refuelHistory_1.RefuelHistoryEntity, (refuelHistory) => refuelHistory.fuel),
    __metadata("design:type", Array)
], FuelEntity.prototype, "refuelHistories", void 0);
exports.FuelEntity = FuelEntity = __decorate([
    (0, typeorm_1.Index)('UQ_115c94d4c5103c2aafbefb2208b', ['stock'], { unique: true }),
    (0, typeorm_1.Entity)('fuel', { schema: 'public' })
], FuelEntity);
//# sourceMappingURL=fuel.js.map
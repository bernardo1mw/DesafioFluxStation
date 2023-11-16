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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefuelHistoryController = void 0;
const common_1 = require("@nestjs/common");
const guards_1 = require("../../guards");
const constants_1 = require("../ioc/providers/constants");
const RegisterRefuelUsecase_1 = require("../../../application/usecase/RegisterRefuelUsecase");
const GetRefuelHistoryUsecase_1 = require("../../../application/usecase/GetRefuelHistoryUsecase");
let RefuelHistoryController = class RefuelHistoryController {
    constructor(registerRefuelUsecase, getRefuelHistoryUsecase) {
        this.registerRefuelUsecase = registerRefuelUsecase;
        this.getRefuelHistoryUsecase = getRefuelHistoryUsecase;
    }
    async getAll(req) {
        return this.getRefuelHistoryUsecase.execute({
            document: req.user.document,
        });
    }
    async registerRefuel(req, { licensePlate, fuel, refuelDate, quantity, }) {
        return this.registerRefuelUsecase.execute({
            document: req.user.document,
            licensePlate,
            fuel,
            refuelDate,
            quantity,
        });
    }
};
exports.RefuelHistoryController = RefuelHistoryController;
__decorate([
    (0, common_1.Get)('history'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RefuelHistoryController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RefuelHistoryController.prototype, "registerRefuel", null);
exports.RefuelHistoryController = RefuelHistoryController = __decorate([
    (0, common_1.Controller)('refuel'),
    (0, common_1.UseGuards)(guards_1.AuthGuard),
    __param(0, (0, common_1.Inject)(constants_1.RefuelHistoryProviderEnum.RegisterRefuelUsecase)),
    __param(1, (0, common_1.Inject)(constants_1.RefuelHistoryProviderEnum.GetRefuelHistoryUsecase)),
    __metadata("design:paramtypes", [RegisterRefuelUsecase_1.default,
        GetRefuelHistoryUsecase_1.default])
], RefuelHistoryController);
//# sourceMappingURL=refuel-history.controller.js.map
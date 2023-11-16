"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDAdapter = void 0;
const uuid_1 = require("uuid");
class UUIDAdapter {
    generate() {
        return (0, uuid_1.v4)();
    }
}
exports.UUIDAdapter = UUIDAdapter;
//# sourceMappingURL=uuid.adapter.js.map
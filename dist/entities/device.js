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
var typeorm_1 = require("typeorm");
var user_1 = require("./user");
var device = /** @class */ (function () {
    function device() {
    }
    __decorate([
        typeorm_1.Column("integer", {
            generated: true,
            nullable: false,
            primary: true,
            name: "id"
        }),
        __metadata("design:type", Number)
    ], device.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("text", {
            nullable: true,
            name: "platform"
        }),
        __metadata("design:type", String)
    ], device.prototype, "platform", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_1.user; }, function (user) { return user.devices; }),
        typeorm_1.JoinColumn({ name: 'user_id' }),
        __metadata("design:type", user_1.user)
    ], device.prototype, "user", void 0);
    device = __decorate([
        typeorm_1.Entity("val_user_device", { schema: "public" })
    ], device);
    return device;
}());
exports.device = device;
//# sourceMappingURL=device.js.map
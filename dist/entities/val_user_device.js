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
const typeorm_1 = require("typeorm");
const val_user_1 = require("./val_user");
let val_user_device = class val_user_device {
};
__decorate([
    typeorm_1.Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], val_user_device.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "platform"
    }),
    __metadata("design:type", String)
], val_user_device.prototype, "platform", void 0);
__decorate([
    typeorm_1.ManyToOne(type => val_user_1.val_user, user_id => user_id.val_user_devices),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", val_user_1.val_user)
], val_user_device.prototype, "user_id", void 0);
val_user_device = __decorate([
    typeorm_1.Entity("val_user_device", { schema: "public" })
], val_user_device);
exports.val_user_device = val_user_device;
//# sourceMappingURL=val_user_device.js.map
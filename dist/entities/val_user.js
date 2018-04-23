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
const val_user_device_1 = require("./val_user_device");
const individual_1 = require("./individual");
const notification_1 = require("./notification");
const val_role_1 = require("./val_role");
let val_user = class val_user {
};
__decorate([
    typeorm_1.Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], val_user.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: false,
        name: "name"
    }),
    __metadata("design:type", String)
], val_user.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToMany(type => val_role_1.val_role),
    typeorm_1.JoinTable({
        name: "val_user_val_roles_val_role",
        joinColumn: { name: "val_user_id" },
        inverseJoinColumn: { name: "val_role_id" }
    }),
    __metadata("design:type", Array)
], val_user.prototype, "val_roles", void 0);
__decorate([
    typeorm_1.OneToMany(type => val_user_device_1.val_user_device, val_user_devices => val_user_devices.user_id),
    __metadata("design:type", Array)
], val_user.prototype, "val_user_devices", void 0);
__decorate([
    typeorm_1.OneToMany(type => individual_1.individual, individuals => individuals.user_id),
    __metadata("design:type", Array)
], val_user.prototype, "individuals", void 0);
__decorate([
    typeorm_1.OneToMany(type => notification_1.notification, notifications => notifications.user_id),
    __metadata("design:type", Array)
], val_user.prototype, "notifications", void 0);
val_user = __decorate([
    typeorm_1.Entity("val_user", { schema: "public" })
], val_user);
exports.val_user = val_user;
//# sourceMappingURL=val_user.js.map
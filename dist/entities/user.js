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
const device_1 = require("./device");
const individual_1 = require("./individual");
const notification_1 = require("./notification");
const role_1 = require("./role");
let user = class user {
};
__decorate([
    typeorm_1.Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], user.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: false,
        name: "name"
    }),
    __metadata("design:type", String)
], user.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToMany(type => role_1.role),
    typeorm_1.JoinTable({
        name: "val_user_val_roles_val_role",
        joinColumn: { name: "val_user_id" },
        inverseJoinColumn: { name: "val_role_id" }
    }),
    __metadata("design:type", Array)
], user.prototype, "roles", void 0);
__decorate([
    typeorm_1.OneToMany(type => device_1.device, devices => devices.user),
    __metadata("design:type", Array)
], user.prototype, "devices", void 0);
__decorate([
    typeorm_1.OneToMany(type => individual_1.individual, individuals => individuals.user_id),
    __metadata("design:type", Array)
], user.prototype, "individuals", void 0);
__decorate([
    typeorm_1.OneToMany(type => notification_1.notification, notifications => notifications.user_id),
    __metadata("design:type", Array)
], user.prototype, "notifications", void 0);
user = __decorate([
    typeorm_1.Entity("val_user", { schema: "public" })
], user);
exports.user = user;
//# sourceMappingURL=user.js.map
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
var device_1 = require("./device");
var individual_1 = require("./individual");
var notification_1 = require("./notification");
var role_1 = require("./role");
var user = /** @class */ (function () {
    function user() {
    }
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
        typeorm_1.ManyToMany(function (type) { return role_1.role; }),
        typeorm_1.JoinTable({
            name: "val_user_val_roles_val_role",
            joinColumn: { name: "val_user_id" },
            inverseJoinColumn: { name: "val_role_id" }
        }),
        __metadata("design:type", Array)
    ], user.prototype, "roles", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return device_1.device; }, function (devices) { return devices.user; }),
        __metadata("design:type", Array)
    ], user.prototype, "devices", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return individual_1.individual; }, function (individuals) { return individuals.user_id; }),
        __metadata("design:type", Array)
    ], user.prototype, "individuals", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return notification_1.notification; }, function (notifications) { return notifications.user_id; }),
        __metadata("design:type", Array)
    ], user.prototype, "notifications", void 0);
    user = __decorate([
        typeorm_1.Entity("val_user", { schema: "public" })
    ], user);
    return user;
}());
exports.user = user;
//# sourceMappingURL=user.js.map
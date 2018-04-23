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
const user_1 = require("./user");
let notification = class notification {
};
__decorate([
    typeorm_1.Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], notification.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.user, user => user.notifications),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", user_1.user)
], notification.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "title"
    }),
    __metadata("design:type", String)
], notification.prototype, "title", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "text"
    }),
    __metadata("design:type", String)
], notification.prototype, "text", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "date"
    }),
    __metadata("design:type", String)
], notification.prototype, "date", void 0);
notification = __decorate([
    typeorm_1.Entity("notification", { schema: "public" }),
    typeorm_1.Index("fki_notification_user_id_fkey", ["user_id",])
], notification);
exports.notification = notification;
//# sourceMappingURL=notification.js.map
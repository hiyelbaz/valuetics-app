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
let role = class role {
};
__decorate([
    typeorm_1.Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], role.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "name"
    }),
    __metadata("design:type", String)
], role.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToMany(type => user_1.user, user => user.roles),
    typeorm_1.JoinTable({
        name: "val_user_val_roles_val_role",
        joinColumn: { name: "val_role_id" },
        inverseJoinColumn: { name: "val_user_id" }
    }),
    __metadata("design:type", Array)
], role.prototype, "users", void 0);
role = __decorate([
    typeorm_1.Entity("val_role", { schema: "public" })
], role);
exports.role = role;
//# sourceMappingURL=role.js.map
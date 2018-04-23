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
const individual_1 = require("./individual");
let individual_photo = class individual_photo {
};
__decorate([
    typeorm_1.Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], individual_photo.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: false,
        name: "address"
    }),
    __metadata("design:type", String)
], individual_photo.prototype, "address", void 0);
__decorate([
    typeorm_1.ManyToOne(type => individual_1.individual, individual_id => individual_id.individual_photos),
    typeorm_1.JoinColumn({ name: 'individual_id' }),
    __metadata("design:type", individual_1.individual)
], individual_photo.prototype, "individual_id", void 0);
individual_photo = __decorate([
    typeorm_1.Entity("individual_photo", { schema: "public" }),
    typeorm_1.Index("fki_individual_id_fkey", ["individual_id",])
], individual_photo);
exports.individual_photo = individual_photo;
//# sourceMappingURL=individual_photo.js.map
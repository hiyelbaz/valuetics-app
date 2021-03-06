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
var species_1 = require("./species");
var species_photo = /** @class */ (function () {
    function species_photo() {
    }
    __decorate([
        typeorm_1.Column("integer", {
            generated: true,
            nullable: false,
            primary: true,
            name: "id"
        }),
        __metadata("design:type", Number)
    ], species_photo.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("text", {
            nullable: true,
            name: "address"
        }),
        __metadata("design:type", String)
    ], species_photo.prototype, "address", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return species_1.species; }, function (species_id) { return species_id.species_photos; }),
        typeorm_1.JoinColumn({ name: 'species_id' }),
        __metadata("design:type", species_1.species)
    ], species_photo.prototype, "species_id", void 0);
    species_photo = __decorate([
        typeorm_1.Entity("species_photo", { schema: "public" }),
        typeorm_1.Index("fki_species_photo_species_id_fkey", ["species_id",])
    ], species_photo);
    return species_photo;
}());
exports.species_photo = species_photo;
//# sourceMappingURL=species_photo.js.map
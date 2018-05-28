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
var plant_functional_type_1 = require("./plant_functional_type");
var individual_1 = require("./individual");
var species_photo_1 = require("./species_photo");
var species = /** @class */ (function () {
    function species() {
    }
    __decorate([
        typeorm_1.Column("integer", {
            generated: true,
            nullable: false,
            primary: true,
            name: "id"
        }),
        __metadata("design:type", Number)
    ], species.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("jsonb", {
            nullable: true,
            name: "name"
        }),
        __metadata("design:type", Object)
    ], species.prototype, "name", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return plant_functional_type_1.plant_functional_type; }, function (plant_functional_type_id) { return plant_functional_type_id.speciess; }),
        typeorm_1.JoinColumn({ name: 'plant_functional_type_id' }),
        __metadata("design:type", plant_functional_type_1.plant_functional_type)
    ], species.prototype, "plant_functional_type_id", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return individual_1.individual; }, function (individuals) { return individuals.species_id; }),
        __metadata("design:type", Array)
    ], species.prototype, "individuals", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return species_photo_1.species_photo; }, function (species_photos) { return species_photos.species_id; }),
        __metadata("design:type", Array)
    ], species.prototype, "species_photos", void 0);
    species = __decorate([
        typeorm_1.Entity("species", { schema: "public" }),
        typeorm_1.Index("species_fki_plant_functional_type_fkey", ["plant_functional_type_id",])
    ], species);
    return species;
}());
exports.species = species;
//# sourceMappingURL=species.js.map
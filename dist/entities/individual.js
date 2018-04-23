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
const species_1 = require("./species");
const user_1 = require("./user");
const site_1 = require("./site");
const individual_photo_1 = require("./individual_photo");
const observation_1 = require("./observation");
let individual = class individual {
};
__decorate([
    typeorm_1.Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], individual.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "name"
    }),
    __metadata("design:type", String)
], individual.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "language"
    }),
    __metadata("design:type", String)
], individual.prototype, "language", void 0);
__decorate([
    typeorm_1.ManyToOne(type => species_1.species, species => species.individuals),
    typeorm_1.JoinColumn({ name: 'species_id' }),
    __metadata("design:type", species_1.species)
], individual.prototype, "species_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.user, user => user.individuals),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", user_1.user)
], individual.prototype, "user_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => site_1.site, site => site.individuals),
    typeorm_1.JoinColumn({ name: 'site_id' }),
    __metadata("design:type", site_1.site)
], individual.prototype, "site_id", void 0);
__decorate([
    typeorm_1.OneToMany(type => individual_photo_1.individual_photo, individual_photos => individual_photos.individual_id),
    __metadata("design:type", Array)
], individual.prototype, "individual_photos", void 0);
__decorate([
    typeorm_1.OneToMany(type => observation_1.observation, observations => observations.individual_id),
    __metadata("design:type", Array)
], individual.prototype, "observations", void 0);
individual = __decorate([
    typeorm_1.Entity("individual", { schema: "public" }),
    typeorm_1.Index("fki_individual_site_id_fkey", ["site_id",]),
    typeorm_1.Index("fki_individual_species_id_fkey", ["species_id",]),
    typeorm_1.Index("fki_individual_user_id_fkey", ["user_id",])
], individual);
exports.individual = individual;
//# sourceMappingURL=individual.js.map
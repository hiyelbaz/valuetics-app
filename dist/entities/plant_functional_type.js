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
const question_1 = require("./question");
const species_1 = require("./species");
let plant_functional_type = class plant_functional_type {
};
__decorate([
    typeorm_1.Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], plant_functional_type.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "scientific_name"
    }),
    __metadata("design:type", String)
], plant_functional_type.prototype, "scientific_name", void 0);
__decorate([
    typeorm_1.Column("jsonb", {
        nullable: true,
        name: "common_name"
    }),
    __metadata("design:type", Object)
], plant_functional_type.prototype, "common_name", void 0);
__decorate([
    typeorm_1.OneToMany(type => question_1.question, questions => questions.plant_functional_type_id),
    __metadata("design:type", Array)
], plant_functional_type.prototype, "questions", void 0);
__decorate([
    typeorm_1.OneToMany(type => species_1.species, speciess => speciess.plant_functional_type_id),
    __metadata("design:type", Array)
], plant_functional_type.prototype, "speciess", void 0);
plant_functional_type = __decorate([
    typeorm_1.Entity("plant_functional_type", { schema: "public" })
], plant_functional_type);
exports.plant_functional_type = plant_functional_type;
//# sourceMappingURL=plant_functional_type.js.map
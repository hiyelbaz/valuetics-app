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
var individual_1 = require("./individual");
var answer_1 = require("./answer");
var observation = /** @class */ (function () {
    function observation() {
    }
    __decorate([
        typeorm_1.Column("integer", {
            generated: true,
            nullable: false,
            primary: true,
            name: "id"
        }),
        __metadata("design:type", Number)
    ], observation.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("date", {
            nullable: true,
            name: "date"
        }),
        __metadata("design:type", String)
    ], observation.prototype, "date", void 0);
    __decorate([
        typeorm_1.Column("integer", {
            nullable: true,
            name: "user_id"
        }),
        __metadata("design:type", Number)
    ], observation.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return individual_1.individual; }, function (individual_id) { return individual_id.observations; }),
        typeorm_1.JoinColumn({ name: 'individual_id' }),
        __metadata("design:type", individual_1.individual)
    ], observation.prototype, "individual_id", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return answer_1.answer; }, function (answers) { return answers.observation_id; }),
        __metadata("design:type", Array)
    ], observation.prototype, "answers", void 0);
    observation = __decorate([
        typeorm_1.Entity("observation", { schema: "public" }),
        typeorm_1.Index("fki_observation_individual_id_fkey", ["individual_id",])
    ], observation);
    return observation;
}());
exports.observation = observation;
//# sourceMappingURL=observation.js.map
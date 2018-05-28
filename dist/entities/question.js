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
var answer_1 = require("./answer");
var question = /** @class */ (function () {
    function question() {
    }
    __decorate([
        typeorm_1.Column("integer", {
            generated: true,
            nullable: false,
            primary: true,
            name: "id"
        }),
        __metadata("design:type", Number)
    ], question.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("text", {
            nullable: true,
            name: "text"
        }),
        __metadata("design:type", String)
    ], question.prototype, "text", void 0);
    __decorate([
        typeorm_1.Column("simple-array", {
            nullable: true,
            name: "options"
        }),
        __metadata("design:type", Array)
    ], question.prototype, "options", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return plant_functional_type_1.plant_functional_type; }, function (plant_functional_type_id) { return plant_functional_type_id.questions; }),
        typeorm_1.JoinColumn({ name: 'plant_functional_type_id' }),
        __metadata("design:type", plant_functional_type_1.plant_functional_type)
    ], question.prototype, "plant_functional_type_id", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return answer_1.answer; }, function (answers) { return answers.question_id; }),
        __metadata("design:type", Array)
    ], question.prototype, "answers", void 0);
    question = __decorate([
        typeorm_1.Entity("question", { schema: "public" }),
        typeorm_1.Index("fki_question_plant_functional_type_id_fkey", ["plant_functional_type_id",])
    ], question);
    return question;
}());
exports.question = question;
//# sourceMappingURL=question.js.map
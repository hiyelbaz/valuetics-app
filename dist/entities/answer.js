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
var question_1 = require("./question");
var observation_1 = require("./observation");
var answer = /** @class */ (function () {
    function answer() {
    }
    __decorate([
        typeorm_1.Column("integer", {
            generated: true,
            nullable: false,
            primary: true,
            name: "id"
        }),
        __metadata("design:type", Number)
    ], answer.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("simple-array", {
            nullable: true,
            name: "chosen_options"
        }),
        __metadata("design:type", Array)
    ], answer.prototype, "chosen_options", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return question_1.question; }, function (question_id) { return question_id.answers; }),
        typeorm_1.JoinColumn({ name: 'question_id' }),
        __metadata("design:type", question_1.question)
    ], answer.prototype, "question_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return observation_1.observation; }, function (observation_id) { return observation_id.answers; }),
        typeorm_1.JoinColumn({ name: 'observation_id' }),
        __metadata("design:type", observation_1.observation)
    ], answer.prototype, "observation_id", void 0);
    answer = __decorate([
        typeorm_1.Entity("answer", { schema: "public" }),
        typeorm_1.Index("fki_answer_observation_id_fkey", ["observation_id",]),
        typeorm_1.Index("fki_answer_question_id_fkey", ["question_id",])
    ], answer);
    return answer;
}());
exports.answer = answer;
//# sourceMappingURL=answer.js.map
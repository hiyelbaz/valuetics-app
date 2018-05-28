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
var site = /** @class */ (function () {
    function site() {
    }
    __decorate([
        typeorm_1.Column("integer", {
            generated: true,
            nullable: false,
            primary: true,
            name: "id"
        }),
        __metadata("design:type", Number)
    ], site.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("jsonb", {
            nullable: true,
            name: "name"
        }),
        __metadata("design:type", Object)
    ], site.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column("jsonb", {
            nullable: true,
            name: "description"
        }),
        __metadata("design:type", Object)
    ], site.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column("point", {
            nullable: true,
            name: "location"
        }),
        __metadata("design:type", Object)
    ], site.prototype, "location", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return individual_1.individual; }, function (individuals) { return individuals.site_id; }),
        __metadata("design:type", Array)
    ], site.prototype, "individuals", void 0);
    site = __decorate([
        typeorm_1.Entity("site", { schema: "public" })
    ], site);
    return site;
}());
exports.site = site;
//# sourceMappingURL=site.js.map
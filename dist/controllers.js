"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var answer_1 = require("./entities/answer");
var individual_1 = require("./entities/individual");
var individual_photo_1 = require("./entities/individual_photo");
var notification_1 = require("./entities/notification");
var observation_1 = require("./entities/observation");
var plant_functional_type_1 = require("./entities/plant_functional_type");
var question_1 = require("./entities/question");
var site_1 = require("./entities/site");
var species_1 = require("./entities/species");
var species_photo_1 = require("./entities/species_photo");
var role_1 = require("./entities/role");
var user_1 = require("./entities/user");
var device_1 = require("./entities/device");
var basecontroller_1 = require("./framework/basecontroller");
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super.call(this, user_1.user) || this;
    }
    return Users;
}(basecontroller_1.BaseController));
exports.Users = Users;
var Roles = /** @class */ (function (_super) {
    __extends(Roles, _super);
    function Roles() {
        return _super.call(this, role_1.role) || this;
    }
    Roles.prototype.get = function (req, res) {
        return _super.prototype.get.call(this, req, res);
    };
    return Roles;
}(basecontroller_1.BaseController));
exports.Roles = Roles;
var Devices = /** @class */ (function (_super) {
    __extends(Devices, _super);
    function Devices() {
        return _super.call(this, device_1.device) || this;
    }
    return Devices;
}(basecontroller_1.BaseController));
exports.Devices = Devices;
var Answers = /** @class */ (function (_super) {
    __extends(Answers, _super);
    function Answers() {
        return _super.call(this, answer_1.answer) || this;
    }
    return Answers;
}(basecontroller_1.BaseController));
exports.Answers = Answers;
var Individuals = /** @class */ (function (_super) {
    __extends(Individuals, _super);
    function Individuals() {
        return _super.call(this, individual_1.individual) || this;
    }
    return Individuals;
}(basecontroller_1.BaseController));
exports.Individuals = Individuals;
var IndividualPhotos = /** @class */ (function (_super) {
    __extends(IndividualPhotos, _super);
    function IndividualPhotos() {
        return _super.call(this, individual_photo_1.individual_photo) || this;
    }
    return IndividualPhotos;
}(basecontroller_1.BaseController));
exports.IndividualPhotos = IndividualPhotos;
var Notifications = /** @class */ (function (_super) {
    __extends(Notifications, _super);
    function Notifications() {
        return _super.call(this, notification_1.notification) || this;
    }
    return Notifications;
}(basecontroller_1.BaseController));
exports.Notifications = Notifications;
var Observation = /** @class */ (function (_super) {
    __extends(Observation, _super);
    function Observation() {
        return _super.call(this, observation_1.observation) || this;
    }
    return Observation;
}(basecontroller_1.BaseController));
exports.Observation = Observation;
var PlantFunctionalTypes = /** @class */ (function (_super) {
    __extends(PlantFunctionalTypes, _super);
    function PlantFunctionalTypes() {
        return _super.call(this, plant_functional_type_1.plant_functional_type) || this;
    }
    return PlantFunctionalTypes;
}(basecontroller_1.BaseController));
exports.PlantFunctionalTypes = PlantFunctionalTypes;
var Questions = /** @class */ (function (_super) {
    __extends(Questions, _super);
    function Questions() {
        return _super.call(this, question_1.question) || this;
    }
    return Questions;
}(basecontroller_1.BaseController));
exports.Questions = Questions;
var Sites = /** @class */ (function (_super) {
    __extends(Sites, _super);
    function Sites() {
        return _super.call(this, site_1.site) || this;
    }
    return Sites;
}(basecontroller_1.BaseController));
exports.Sites = Sites;
var SpeciesPhotos = /** @class */ (function (_super) {
    __extends(SpeciesPhotos, _super);
    function SpeciesPhotos() {
        return _super.call(this, species_photo_1.species_photo) || this;
    }
    return SpeciesPhotos;
}(basecontroller_1.BaseController));
exports.SpeciesPhotos = SpeciesPhotos;
var Species = /** @class */ (function (_super) {
    __extends(Species, _super);
    function Species() {
        return _super.call(this, species_1.species) || this;
    }
    return Species;
}(basecontroller_1.BaseController));
exports.Species = Species;
// export class Test{
//     async getBurak(req,res,next) {
//         res.send(await getConnection("readonly").createQueryBuilder(user,"user2")
//         .select(["user2.name","role2.name"])
//         .leftJoin("user2.roles","role2")
//         .getMany())
//         // return { name: "Burak Büyükatlı" }
//     }
//     getA(req,res,next){
//         res.send("A")
//     }
// }
//# sourceMappingURL=controllers.js.map
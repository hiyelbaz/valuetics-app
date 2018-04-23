"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const answer_1 = require("./entities/answer");
const individual_1 = require("./entities/individual");
const individual_photo_1 = require("./entities/individual_photo");
const notification_1 = require("./entities/notification");
const observation_1 = require("./entities/observation");
const plant_functional_type_1 = require("./entities/plant_functional_type");
const question_1 = require("./entities/question");
const site_1 = require("./entities/site");
const species_1 = require("./entities/species");
const species_photo_1 = require("./entities/species_photo");
const role_1 = require("./entities/role");
const user_1 = require("./entities/user");
const device_1 = require("./entities/device");
const basecontroller_1 = require("./basecontroller");
class Users extends basecontroller_1.BaseController {
    constructor() {
        super(user_1.user);
    }
}
exports.Users = Users;
class Roles extends basecontroller_1.BaseController {
    constructor() {
        super(role_1.role);
    }
}
exports.Roles = Roles;
class Devices extends basecontroller_1.BaseController {
    constructor() {
        super(device_1.device);
    }
}
exports.Devices = Devices;
class Answers extends basecontroller_1.BaseController {
    constructor() {
        super(answer_1.answer);
    }
}
exports.Answers = Answers;
class Individuals extends basecontroller_1.BaseController {
    constructor() {
        super(individual_1.individual);
    }
}
exports.Individuals = Individuals;
class IndividualPhotos extends basecontroller_1.BaseController {
    constructor() {
        super(individual_photo_1.individual_photo);
    }
}
exports.IndividualPhotos = IndividualPhotos;
class Notifications extends basecontroller_1.BaseController {
    constructor() {
        super(notification_1.notification);
    }
}
exports.Notifications = Notifications;
class Observation extends basecontroller_1.BaseController {
    constructor() {
        super(observation_1.observation);
    }
}
exports.Observation = Observation;
class PlantFunctionalTypes extends basecontroller_1.BaseController {
    constructor() {
        super(plant_functional_type_1.plant_functional_type);
    }
}
exports.PlantFunctionalTypes = PlantFunctionalTypes;
class Questions extends basecontroller_1.BaseController {
    constructor() {
        super(question_1.question);
    }
}
exports.Questions = Questions;
class Sites extends basecontroller_1.BaseController {
    constructor() {
        super(site_1.site);
    }
}
exports.Sites = Sites;
class SpeciesPhotos extends basecontroller_1.BaseController {
    constructor() {
        super(species_photo_1.species_photo);
    }
}
exports.SpeciesPhotos = SpeciesPhotos;
class Species extends basecontroller_1.BaseController {
    constructor() {
        super(species_1.species);
    }
}
exports.Species = Species;
//# sourceMappingURL=controllers.js.map
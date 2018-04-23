"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_linq_repository_1 = require("typeorm-linq-repository");
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
class Users extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(user_1.user);
    }
}
exports.Users = Users;
class Roles extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(role_1.role);
    }
}
exports.Roles = Roles;
class Devices extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(device_1.device);
    }
}
exports.Devices = Devices;
class Answers extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(answer_1.answer);
    }
}
exports.Answers = Answers;
class Individuals extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(individual_1.individual);
    }
}
exports.Individuals = Individuals;
class IndividualPhotos extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(individual_photo_1.individual_photo);
    }
}
exports.IndividualPhotos = IndividualPhotos;
class Notifications extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(notification_1.notification);
    }
}
exports.Notifications = Notifications;
class Observation extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(observation_1.observation);
    }
}
exports.Observation = Observation;
class PlantFunctionalTypes extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(plant_functional_type_1.plant_functional_type);
    }
}
exports.PlantFunctionalTypes = PlantFunctionalTypes;
class Questions extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(question_1.question);
    }
}
exports.Questions = Questions;
class Sites extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(site_1.site);
    }
}
exports.Sites = Sites;
class SpeciesPhotos extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(species_photo_1.species_photo);
    }
}
exports.SpeciesPhotos = SpeciesPhotos;
class Species extends typeorm_linq_repository_1.RepositoryBase {
    constructor() {
        super(species_1.species);
    }
}
exports.Species = Species;
//# sourceMappingURL=repositories.js.map
// import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, JoinTableOptions } from "typeorm";
// @Entity("val_role", { schema: "public" })
// export class val_role {
//     @Column("integer", {
//         generated: true,
//         nullable: false,
//         primary: true,
//         name: "id"
//     })
//     id: number;
//     @Column("text", {
//         nullable: true,
//         name: "name"
//     })
//     name: string;
//     @ManyToMany(type => val_user, user => user.val_roles)
//     @JoinTable({
//         name:"val_user_val_roles_val_role",
//         joinColumn:{name:"val_role_id"},
//         inverseJoinColumn:{name:"val_user_id"}
//     })
//     val_users: val_user[];
// }
// @Entity("val_user", { schema: "public" })
// export class val_user {
//     @Column("integer", {
//         generated: true,
//         nullable: false,
//         primary: true,
//         name: "id"
//     })
//     id: number;
//     @Column("text", {
//         nullable: false,
//         name: "name"
//     })
//     name: string;
//     @ManyToMany(type => val_role)
//     @JoinTable({
//         name:"val_user_val_roles_val_role",
//         joinColumn:{name:"val_user_id"},
//         inverseJoinColumn:{name:"val_role_id"}
//     })
//     val_roles: val_role[]
//     @OneToMany(type => val_user_device, val_user_devices => val_user_devices.user_id)
//     val_user_devices: val_user_device[];
//     @OneToMany(type => individual, individuals => individuals.user_id)
//     individuals: individual[];
//     @OneToMany(type => notification, notifications => notifications.user_id)
//     notifications: notification[];
// }
// @Entity("val_user_device", { schema: "public" })
// export class val_user_device {
//     @Column("integer", {
//         generated: true,
//         nullable: false,
//         primary: true,
//         name: "id"
//     })
//     id: number;
//     @Column("text", {
//         nullable: true,
//         name: "platform"
//     })
//     platform: string;
//     @ManyToOne(type => val_user, user => user.val_user_devices)
//     @JoinColumn({ name: 'user_id' })
//     user_id: val_user;
// }
// // APP ENTITIES
// @Entity("question", { schema: "public" })
// @Index("fki_question_plant_functional_type_id_fkey", ["plant_functional_type_id",])
// export class question {
//     @Column("integer", {
//         generated: true,
//         nullable: false,
//         primary: true,
//         name: "id"
//     })
//     id: number;
//     @Column("text", {
//         nullable: true,
//         name: "text"
//     })
//     text: string;
//     @Column("simple-array", {
//         nullable: true,
//         name: "options"
//     })
//     options: number[];
//     @ManyToOne(type => plant_functional_type, plant_functional_type_id => plant_functional_type_id.questions)
//     @JoinColumn({ name: 'plant_functional_type_id' })
//     plant_functional_type_id: plant_functional_type;
//     @OneToMany(type => answer, answers => answers.question_id)
//     answers: answer[];
// }
// @Entity("plant_functional_type",{schema:"public"})
// export class plant_functional_type {
//     @Column("integer",{ 
//         generated:true,
//         nullable:false,
//         primary:true,
//         name:"id"
//         })
//     id:number;
//     @Column("text",{ 
//         nullable:true,
//         name:"scientific_name"
//         })
//     scientific_name:string;
//     @Column("jsonb",{ 
//         nullable:true,
//         name:"common_name"
//         })
//     common_name:Object;
//     @OneToMany(type=>question, questions=>questions.plant_functional_type_id)
//     questions:question[];
//     @OneToMany(type=>species, speciess=>speciess.plant_functional_type_id)
//     speciess:species[];
// }
// @Entity("answer", { schema: "public" })
// @Index("fki_answer_observation_id_fkey", ["observation_id",])
// @Index("fki_answer_question_id_fkey", ["question_id",])
// export class answer {
//     @Column("integer", {
//         generated: true,
//         nullable: false,
//         primary: true,
//         name: "id"
//     })
//     id: number;
//     @Column("simple-array", {
//         nullable: true,
//         name: "chosen_options"
//     })
//     chosen_options: number[];
//     @ManyToOne(type => question, question_id => question_id.answers)
//     @JoinColumn({ name: 'question_id' })
//     question_id: question;
//     @ManyToOne(type => observation, observation_id => observation_id.answers)
//     @JoinColumn({ name: 'observation_id' })
//     observation_id: observation;
// }
// @Entity("individual_photo", { schema: "public" })
// @Index("fki_individual_id_fkey", ["individual_id",])
// export class individual_photo {
//     @Column("integer", {
//         generated: true,
//         nullable: false,
//         primary: true,
//         name: "id"
//     })
//     id: number;
//     @Column("text", {
//         nullable: false,
//         name: "address"
//     })
//     address: string;
//     @ManyToOne(type => individual, individual_id => individual_id.individual_photos)
//     @JoinColumn({ name: 'individual_id' })
//     individual_id: individual;
// }
// @Entity("individual", { schema: "public" })
// @Index("fki_individual_site_id_fkey", ["site_id",])
// @Index("fki_individual_species_id_fkey", ["species_id",])
// @Index("fki_individual_user_id_fkey", ["user_id",])
// export class individual {
//     @Column("integer", {
//         generated: true,
//         nullable: false,
//         primary: true,
//         name: "id"
//     })
//     id: number;
//     @Column("text", {
//         nullable: true,
//         name: "name"
//     })
//     name: string;
//     @Column("text", {
//         nullable: true,
//         name: "language"
//     })
//     language: string;
//     @ManyToOne(type => species, species_id => species_id.individuals)
//     @JoinColumn({ name: 'species_id' })
//     species_id: species;
//     @ManyToOne(type => val_user, user_id => user_id.individuals)
//     @JoinColumn({ name: 'user_id' })
//     user_id: val_user;
//     @ManyToOne(type => site, site_id => site_id.individuals)
//     @JoinColumn({ name: 'site_id' })
//     site_id: site;
//     @OneToMany(type => individual_photo, individual_photos => individual_photos.individual_id)
//     individual_photos: individual_photo[];
//     @OneToMany(type => observation, observations => observations.individual_id)
//     observations: observation[];
// }
// @Entity("notification", { schema: "public" })
// @Index("fki_notification_user_id_fkey", ["user_id",])
// export class notification {
//     @Column("integer", {
//         generated: true,
//         nullable: false,
//         primary: true,
//         name: "id"
//     })
//     id: number;
//     @ManyToOne(type => val_user, user_id => user_id.notifications)
//     @JoinColumn({ name: 'user_id' })
//     user_id: val_user;
//     @Column("text", {
//         nullable: true,
//         name: "title"
//     })
//     title: string;
//     @Column("text", {
//         nullable: true,
//         name: "text"
//     })
//     text: string;
//     @Column("date", {
//         nullable: true,
//         name: "date"
//     })
//     date: string;
// }
// @Entity("observation", { schema: "public" })
// @Index("fki_observation_individual_id_fkey", ["individual_id",])
// export class observation {
//     @Column("integer", {
//         generated: true,
//         nullable: false,
//         primary: true,
//         name: "id"
//     })
//     id: number;
//     @Column("date", {
//         nullable: true,
//         name: "date"
//     })
//     date: string;
//     @Column("integer", {
//         nullable: true,
//         name: "user_id"
//     })
//     user_id: number;
//     @ManyToOne(type => individual, individual_id => individual_id.observations)
//     @JoinColumn({ name: 'individual_id' })
//     individual_id: individual;
//     @OneToMany(type => answer, answers => answers.observation_id)
//     answers: answer[];
// }
// @Entity("site", { schema: "public" })
// export class site {
//     @Column("integer", {
//         generated: true,
//         nullable: false,
//         primary: true,
//         name: "id"
//     })
//     id: number;
//     @Column("jsonb", {
//         nullable: true,
//         name: "name"
//     })
//     name: Object;
//     @Column("jsonb", {
//         nullable: true,
//         name: "description"
//     })
//     description: Object;
//     @Column("point", {
//         nullable: true,
//         name: "location"
//     })
//     location: string | Object;
//     @OneToMany(type => individual, individuals => individuals.site_id)
//     individuals: individual[];
// }
// @Entity("species_photo", { schema: "public" })
// @Index("fki_species_photo_species_id_fkey", ["species_id",])
// export class species_photo {
//     @Column("integer", {
//         generated: true,
//         nullable: false,
//         primary: true,
//         name: "id"
//     })
//     id: number;
//     @Column("text", {
//         nullable: true,
//         name: "address"
//     })
//     address: string;
//     @ManyToOne(type => species, species_id => species_id.species_photos)
//     @JoinColumn({ name: 'species_id' })
//     species_id: species;
// }
// @Entity("species", { schema: "public" })
// @Index("species_fki_plant_functional_type_fkey", ["plant_functional_type_id",])
// export class species {
//     @Column("integer", {
//         generated: true,
//         nullable: false,
//         primary: true,
//         name: "id"
//     })
//     id: number;
//     @Column("jsonb", {
//         nullable: true,
//         name: "name"
//     })
//     name: Object;
//     @ManyToOne(type => plant_functional_type, plant_functional_type_id => plant_functional_type_id.speciess)
//     @JoinColumn({ name: 'plant_functional_type_id' })
//     plant_functional_type_id: plant_functional_type;
//     @OneToMany(type => individual, individuals => individuals.species_id)
//     individuals: individual[];
//     @OneToMany(type => species_photo, species_photos => species_photos.species_id)
//     species_photos: species_photo[];
// }
//# sourceMappingURL=entities.js.map
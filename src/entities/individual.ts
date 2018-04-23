import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { species } from "./species";
import { user } from "./user";
import { site } from "./site";
import { individual_photo } from "./individual_photo";
import { observation } from "./observation";


@Entity("individual", { schema: "public" })
@Index("fki_individual_site_id_fkey", ["site_id",])
@Index("fki_individual_species_id_fkey", ["species_id",])
@Index("fki_individual_user_id_fkey", ["user_id",])
export class individual {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id: number;

    @Column("text", {
        nullable: true,
        name: "name"
    })
    name: string;

    @Column("text", {
        nullable: true,
        name: "language"
    })
    language: string;

    @ManyToOne(type => species, species => species.individuals)
    @JoinColumn({ name: 'species_id' })
    species_id: species;

    @ManyToOne(type => user, user => user.individuals)
    @JoinColumn({ name: 'user_id' })
    user_id: user;

    @ManyToOne(type => site, site => site.individuals)
    @JoinColumn({ name: 'site_id' })
    site_id: site;

    @OneToMany(type => individual_photo, individual_photos => individual_photos.individual_id)
    individual_photos: individual_photo[];

    @OneToMany(type => observation, observations => observations.individual_id)
    observations: observation[];

}

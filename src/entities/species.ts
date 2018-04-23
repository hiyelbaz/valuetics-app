import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { plant_functional_type } from "./plant_functional_type";
import { individual } from "./individual";
import { species_photo } from "./species_photo";


@Entity("species", { schema: "public" })
@Index("species_fki_plant_functional_type_fkey", ["plant_functional_type_id",])
export class species {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id: number;

    @Column("jsonb", {
        nullable: true,
        name: "name"
    })
    name: Object;

    @ManyToOne(type => plant_functional_type, plant_functional_type_id => plant_functional_type_id.speciess)
    @JoinColumn({ name: 'plant_functional_type_id' })
    plant_functional_type_id: plant_functional_type;

    @OneToMany(type => individual, individuals => individuals.species_id)
    individuals: individual[];

    @OneToMany(type => species_photo, species_photos => species_photos.species_id)
    species_photos: species_photo[];

}

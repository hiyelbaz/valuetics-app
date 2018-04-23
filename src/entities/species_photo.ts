import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { species } from "./species";


@Entity("species_photo", { schema: "public" })
@Index("fki_species_photo_species_id_fkey", ["species_id",])
export class species_photo {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id: number;

    @Column("text", {
        nullable: true,
        name: "address"
    })
    address: string;

    @ManyToOne(type => species, species_id => species_id.species_photos)
    @JoinColumn({ name: 'species_id' })
    species_id: species;

}

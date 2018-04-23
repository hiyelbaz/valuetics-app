import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { individual } from "./individual";


@Entity("individual_photo", { schema: "public" })
@Index("fki_individual_id_fkey", ["individual_id",])
export class individual_photo {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id: number;

    @Column("text", {
        nullable: false,
        name: "address"
    })
    address: string;

    @ManyToOne(type => individual, individual_id => individual_id.individual_photos)
    @JoinColumn({ name: 'individual_id' })
    individual_id: individual;

}

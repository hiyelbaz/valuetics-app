import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { individual } from "./individual";
import { answer } from "./answer";


@Entity("observation", { schema: "public" })
@Index("fki_observation_individual_id_fkey", ["individual_id",])
export class observation {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id: number;

    @Column("date", {
        nullable: true,
        name: "date"
    })
    date: string;

    @Column("integer", {
        nullable: true,
        name: "user_id"
    })
    user_id: number;

    @ManyToOne(type => individual, individual_id => individual_id.observations)
    @JoinColumn({ name: 'individual_id' })
    individual_id: individual;

    @OneToMany(type => answer, answers => answers.observation_id)
    answers: answer[];

}

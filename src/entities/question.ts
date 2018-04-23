import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { plant_functional_type } from "./plant_functional_type";
import { answer } from "./answer";


@Entity("question", { schema: "public" })
@Index("fki_question_plant_functional_type_id_fkey", ["plant_functional_type_id",])
export class question {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id: number;

    @Column("text", {
        nullable: true,
        name: "text"
    })
    text: string;

    @Column("simple-array", {
        nullable: true,
        name: "options"
    })
    options: number[];

    @ManyToOne(type => plant_functional_type, plant_functional_type_id => plant_functional_type_id.questions)
    @JoinColumn({ name: 'plant_functional_type_id' })
    plant_functional_type_id: plant_functional_type;

    @OneToMany(type => answer, answers => answers.question_id)
    answers: answer[];

}

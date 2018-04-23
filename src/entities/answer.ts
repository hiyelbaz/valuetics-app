import { Index, Entity, Column,  ManyToOne, JoinColumn } from "typeorm";
import { question } from "./question";
import { observation } from "./observation";

@Entity("answer", { schema: "public" })
@Index("fki_answer_observation_id_fkey", ["observation_id",])
@Index("fki_answer_question_id_fkey", ["question_id",])
export class answer {

    @Column("integer", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id: number;

    @Column("simple-array", {
        nullable: true,
        name: "chosen_options"
    })
    chosen_options: number[];

    @ManyToOne(type => question, question_id => question_id.answers)
    @JoinColumn({ name: 'question_id' })
    question_id: question;

    @ManyToOne(type => observation, observation_id => observation_id.answers)
    @JoinColumn({ name: 'observation_id' })
    observation_id: observation;

}

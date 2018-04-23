import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {question} from "./question";
import {species} from "./species";


@Entity("plant_functional_type",{schema:"public"})
export class plant_functional_type {

    @Column("integer",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        
    @Column("text",{ 
        nullable:true,
        name:"scientific_name"
        })
    scientific_name:string;
        

    @Column("jsonb",{ 
        nullable:true,
        name:"common_name"
        })
    common_name:Object;
           
    @OneToMany(type=>question, questions=>questions.plant_functional_type_id)
    questions:question[];
       
    @OneToMany(type=>species, speciess=>speciess.plant_functional_type_id)
    speciess:species[];
    
}

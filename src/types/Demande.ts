import { Child } from "./Child"
import { Company } from "./Company"
import { Profile } from "./Profile"

export type Demande ={
    id : string | number,
    picture :string,
    comment :string,
    status :string,
    registered : string,
    company : Company,
    owner : Child,
    demandeur : Profile
}
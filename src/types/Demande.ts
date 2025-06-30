import { Child } from "./Child"
import { Compagny } from "./Compagny"
import { Profile } from "./Profile"

export type Demande ={
    id : string | number,
    picture :string,
    comment :string,
    status :string,
    registred : string,
    compagny : Compagny,
    owner : Child,
    demandeur : Profile
}
import { Compagny } from "./Compagny"
import { Profile } from "./Profile"

export type Request ={
    id : string | number,
    picture :string,
    comment :string,
    status :string,
    registred : string,
    compagny : Compagny,
    child : Profile,
    parent : Profile
}
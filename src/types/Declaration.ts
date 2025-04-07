import { Compagny } from "./Compagny"
import { Profile } from "./Profile"

export type Declaration ={
    id : string | number,
    picture :string,
    comment :string,
    status :string,
    registred : string,
    compagny : Compagny,
    child : Profile,
    firstParent : Profile,
    secondParent : Profile
}
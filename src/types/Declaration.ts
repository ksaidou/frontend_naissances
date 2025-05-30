import { Child } from "./Child"
import { Compagny } from "./Compagny"
import { Profile } from "./Profile"

export type Declaration ={
    id? : string | number,
    picture? : string,
    comment : string,
    status : string,
    registred : string,
    compagny : Compagny,
    child : Child,
    firstParent : Profile,
    secondParent : Profile
}
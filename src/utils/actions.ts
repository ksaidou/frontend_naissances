
//const STATUS = ["NEW","ON_GOING","VALIDATED","REJECTED"];

const getStatusColors = (status:string) =>{
    switch(status){
        case "NEW":
            return "bg-blue-100 text-blue-600 text-center";
        case "ON_GOING":
            return "bg-amber-100 text-blue-600 text-center";
        case "VALIDATED":
            return "bg-green-100 text-blue-600 text-center";
        case "REJECTED":
            return "bg-red-100 text-blue-600 text-center";
        case "DELETE":
            return "bg-red-100 text-blue-600 text-center";
        default:
            break;
    }
}

const getStatusLabel = (status:string) =>{
    switch(status){
        case "NEW":
            return "Nouveau";
        case "ON_GOING":
            return "En cours";
        case "VALIDATED":
            return "Validée";
        case "REJECTED":
            return "Rejetée";
        case "DELETE":
            return "Supprimée";
        default:
            break;
    }
}

const STATUS ={
    "AGENT" :["NEW","ON_GOING","VALIDATED","REJECTED"],
    "ADMINISTRATOR" :["NEW","DELETE"],
    "PUBLIC" :["NEW","DELETE"],
};

export {getStatusColors,getStatusLabel,STATUS};
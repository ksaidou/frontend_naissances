import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";
import { getStatusLabel, STATUS } from "@/utils";
import { useContext } from "react";

type Props ={
    id: string;
    classes : string;
    children?: React.ReactElement;
    action : (data:{id:string, status:string}) => void;
}
function ActionButton({id, classes, action}: Props) {
  
  const { 
    state : {
      user: {role =""} ={},
    },
  } = useContext(GlobalApplicationContext);

  return (
    <div className={`${classes}`}>
    <select  onChange={(event: any) =>{ 
      const status = event.target.value;
      //console.log(status);
      action({id:id,status});
      //console.log(action);
      //console.log(id);
      //console.log(status);
      }}>
      <option value="">Selectionner</option>
      {STATUS[role as "PUBLIC" ||"AGENT" || "ADMINISTRATOR"].map((item:string) =>(
        <option value={item} key={`${id}-${item}`}>{getStatusLabel(item)}</option>
      ))};
    </select>
    </div>    
  );
}

export default ActionButton
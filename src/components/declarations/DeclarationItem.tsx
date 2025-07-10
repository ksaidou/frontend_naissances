import { formatDate } from '@/utils'
import ActionButton from '../shared/ActionButton'
import StatusBadge from '../shared/StatusBadge'
import { Declaration } from '@/types/Declaration'

type Props ={
  declaration: Declaration,
  index : number,
  action : (data:{id:string, status:string}) => void;
};

function DeclarationItem({declaration:item, index, action}: Props) {
  return (
    <>
    <article 
          className={`grid grid-cols-12 border-t border-gray-300 col-span-2 items-center 
          ${index % 2 === 0 ? "bg-gray-100" : null}`}>
            <span className="pl-2">{formatDate(item.registered)}</span>
            <span className="col-span-2 flex flex-col pl-5">
              <span>{item.child.firstName}</span>
              <span className="uppercase">{item.child.lastName}</span>
            </span>
            <span>{item?.child?.birthDate ? formatDate(item.child.birthDate) : null}</span>
            <span>
              <span className="p-2">{item.company.name}</span>
            </span>
            <span className="col-span-2 flex flex-col pl-6">
              <span >{item.firstParent.firstName}</span>
              <span className="uppercase">{item.firstParent.lastName}</span>
            </span>
            <span className="col-span-2 flex flex-col pl-2">
              <span>{item.secondParent.firstName}</span>
              <span className="uppercase">{item.secondParent.lastName}</span>
            </span>
            <StatusBadge status={item.status}/>
            <ActionButton classes="col-span-2 mx-3" label="Action" action={action} id={`${item.id}`}/>
        </article>
    </>
  )
}

export default DeclarationItem
import { formatDate, getStatusColors, getStatusLabel } from '@/utils'

function DeclarationItem({declaration:item, index}: any) {
  return (
    <>
    <article 
          key={item.id} 
          className={`grid grid-cols-12 border-t border-gray-300 col-span-2 items-center 
          ${index % 2 === 0 ? "bg-gray-100" : null}`}>
            <span className="pl-2">{formatDate(item.registred)}</span>
            <span className="col-span-2 flex flex-col pl-5">
              <span>{item.child.firstname}</span>
              <span className="uppercase">{item.child.lastname}</span>
            </span>
            <span>{item?.child?.birthdate ? formatDate(item.child.birthdate) : null}</span>
            <span>
              <span className="p-2">{item.compagny.name}</span>
            </span>
            <span className="col-span-2 flex flex-col pl-6">
              <span >{item.firstParent.firstname}</span>
              <span className="uppercase">{item.firstParent.lastname}</span>
            </span>
            <span className="col-span-2 flex flex-col pl-2">
              <span>{item.secondParent.firstname}</span>
              <span className="uppercase">{item.secondParent.lastname}</span>
            </span>
            <span className={`${getStatusColors(item.status)}`}>{getStatusLabel(item.status)}</span>
            <span className="col-span-2 pl-6">ACTION</span>
        </article>
    </>
  )
}

export default DeclarationItem
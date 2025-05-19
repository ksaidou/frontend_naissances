import { getStatusColors, getStatusLabel } from "@/utils"

function StatusBadge({status}:{status:string}) {
  return (
    <span className={`${getStatusColors(status)}`}>{getStatusLabel(status)}</span>
  )
}

export default StatusBadge
import InventoryCell from 'src/components/Inventory/InventoryCell'

type InventoryPageProps = {
  id: number
}

const InventoryPage = ({ id }: InventoryPageProps) => {
  return <InventoryCell id={id} />
}

export default InventoryPage

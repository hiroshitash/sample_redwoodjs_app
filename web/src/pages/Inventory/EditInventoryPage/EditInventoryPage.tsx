import EditInventoryCell from 'src/components/Inventory/EditInventoryCell'

type InventoryPageProps = {
  id: number
}

const EditInventoryPage = ({ id }: InventoryPageProps) => {
  return <EditInventoryCell id={id} />
}

export default EditInventoryPage

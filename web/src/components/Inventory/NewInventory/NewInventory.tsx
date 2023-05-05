import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InventoryForm from 'src/components/Inventory/InventoryForm'

import type { CreateInventoryInput } from 'types/graphql'

const CREATE_INVENTORY_MUTATION = gql`
  mutation CreateInventoryMutation($input: CreateInventoryInput!) {
    createInventory(input: $input) {
      id
    }
  }
`

const NewInventory = () => {
  const [createInventory, { loading, error }] = useMutation(
    CREATE_INVENTORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Inventory created')
        navigate(routes.inventories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateInventoryInput) => {
    createInventory({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Inventory</h2>
      </header>
      <div className="rw-segment-main">
        <InventoryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewInventory

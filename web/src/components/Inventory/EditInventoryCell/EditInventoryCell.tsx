import type { EditInventoryById, UpdateInventoryInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InventoryForm from 'src/components/Inventory/InventoryForm'

export const QUERY = gql`
  query EditInventoryById($id: Int!) {
    inventory: inventory(id: $id) {
      id
      productId
      quantity
    }
  }
`
const UPDATE_INVENTORY_MUTATION = gql`
  mutation UpdateInventoryMutation($id: Int!, $input: UpdateInventoryInput!) {
    updateInventory(id: $id, input: $input) {
      id
      productId
      quantity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ inventory }: CellSuccessProps<EditInventoryById>) => {
  const [updateInventory, { loading, error }] = useMutation(
    UPDATE_INVENTORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Inventory updated')
        navigate(routes.inventories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateInventoryInput,
    id: EditInventoryById['inventory']['id']
  ) => {
    updateInventory({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Inventory {inventory?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <InventoryForm
          inventory={inventory}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}

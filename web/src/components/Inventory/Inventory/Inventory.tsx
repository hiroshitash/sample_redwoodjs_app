import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteInventoryMutationVariables,
  FindInventoryById,
} from 'types/graphql'

const DELETE_INVENTORY_MUTATION = gql`
  mutation DeleteInventoryMutation($id: Int!) {
    deleteInventory(id: $id) {
      id
    }
  }
`

interface Props {
  inventory: NonNullable<FindInventoryById['inventory']>
}

const Inventory = ({ inventory }: Props) => {
  const [deleteInventory] = useMutation(DELETE_INVENTORY_MUTATION, {
    onCompleted: () => {
      toast.success('Inventory deleted')
      navigate(routes.inventories())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteInventoryMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete inventory ' + id + '?')) {
      deleteInventory({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Inventory {inventory.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{inventory.id}</td>
            </tr>
            <tr>
              <th>Product id</th>
              <td>{inventory.productId}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>{inventory.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editInventory({ id: inventory.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(inventory.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Inventory

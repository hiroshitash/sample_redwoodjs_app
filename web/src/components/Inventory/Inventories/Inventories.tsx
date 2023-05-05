import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Inventory/InventoriesCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeleteInventoryMutationVariables,
  FindInventories,
} from 'types/graphql'

const DELETE_INVENTORY_MUTATION = gql`
  mutation DeleteInventoryMutation($id: Int!) {
    deleteInventory(id: $id) {
      id
    }
  }
`

const InventoriesList = ({ inventories }: FindInventories) => {
  const [deleteInventory] = useMutation(DELETE_INVENTORY_MUTATION, {
    onCompleted: () => {
      toast.success('Inventory deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteInventoryMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete inventory ' + id + '?')) {
      deleteInventory({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Product id</th>
            <th>Quantity</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inventory) => (
            <tr key={inventory.id}>
              <td>{truncate(inventory.id)}</td>
              <td>{truncate(inventory.productId)}</td>
              <td>{truncate(inventory.quantity)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.inventory({ id: inventory.id })}
                    title={'Show inventory ' + inventory.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editInventory({ id: inventory.id })}
                    title={'Edit inventory ' + inventory.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete inventory ' + inventory.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(inventory.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InventoriesList

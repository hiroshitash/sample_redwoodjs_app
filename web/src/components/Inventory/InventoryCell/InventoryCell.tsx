import type { FindInventoryById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Inventory from 'src/components/Inventory/Inventory'

export const QUERY = gql`
  query FindInventoryById($id: Int!) {
    inventory: inventory(id: $id) {
      id
      productId
      quantity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Inventory not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ inventory }: CellSuccessProps<FindInventoryById>) => {
  return <Inventory inventory={inventory} />
}

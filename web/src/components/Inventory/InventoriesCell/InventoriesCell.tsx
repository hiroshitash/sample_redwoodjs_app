import type { FindInventories } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Inventories from 'src/components/Inventory/Inventories'

export const QUERY = gql`
  query FindInventories {
    inventories {
      id
      productId
      quantity
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No inventories yet. '}
      <Link to={routes.newInventory()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ inventories }: CellSuccessProps<FindInventories>) => {
  return <Inventories inventories={inventories} />
}

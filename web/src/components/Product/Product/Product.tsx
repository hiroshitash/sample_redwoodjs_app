import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteProductMutationVariables,
  FindProductById,
} from 'types/graphql'

const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($id: Int!) {
    deleteProduct(id: $id) {
      id
    }
  }
`

interface Props {
  product: NonNullable<FindProductById['product']>
}

const Product = ({ product }: Props) => {
  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION, {
    onCompleted: () => {
      toast.success('Product deleted')
      navigate(routes.products())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteProductMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete product ' + id + '?')) {
      deleteProduct({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Product {product.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{product.id}</td>
            </tr>
            <tr>
              <th>Sku</th>
              <td>{product.sku}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{product.title}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{product.type}</td>
            </tr>
            <tr>
              <th>Length</th>
              <td>{product.length}</td>
            </tr>
            <tr>
              <th>Material</th>
              <td>{product.material}</td>
            </tr>
            <tr>
              <th>Grade</th>
              <td>{product.grade}</td>
            </tr>
            <tr>
              <th>Finish</th>
              <td>{product.finish}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td>
                <img
                  src={product.image}
                  alt={product.image}
                  style={{ maxWidth: '50px' }}
                />
              </td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>{product.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProduct({ id: product.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(product.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Product

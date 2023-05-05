import type { EditProductById, UpdateProductInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormProduct = NonNullable<EditProductById['product']>

interface ProductFormProps {
  product?: EditProductById['product']
  onSave: (data: UpdateProductInput, id?: FormProduct['id']) => void
  error: RWGqlError
  loading: boolean
}

const ProductForm = (props: ProductFormProps) => {
  const onSubmit = (data: FormProduct) => {
    props.onSave(data, props?.product?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormProduct> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="sku"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sku
        </Label>

        <TextField
          name="sku"
          defaultValue={props.product?.sku}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sku" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.product?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <TextField
          name="type"
          defaultValue={props.product?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="length"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Length
        </Label>

        <TextField
          name="length"
          defaultValue={props.product?.length}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="length" className="rw-field-error" />

        <Label
          name="material"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Material
        </Label>

        <TextField
          name="material"
          defaultValue={props.product?.material}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="material" className="rw-field-error" />

        <Label
          name="grade"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Grade
        </Label>

        <TextField
          name="grade"
          defaultValue={props.product?.grade}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="grade" className="rw-field-error" />

        <Label
          name="finish"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Finish
        </Label>

        <TextField
          name="finish"
          defaultValue={props.product?.finish}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="finish" className="rw-field-error" />

        <Label
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image Url
        </Label>

        <TextField
          name="image"
          defaultValue={props.product?.image}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: true,
            pattern: {
              value:
                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
              message: 'Please enter a valid url',
            },
          }}
        />

        <FieldError name="image" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProductForm

import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditInventoryById, UpdateInventoryInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormInventory = NonNullable<EditInventoryById['inventory']>

interface InventoryFormProps {
  inventory?: EditInventoryById['inventory']
  onSave: (data: UpdateInventoryInput, id?: FormInventory['id']) => void
  error: RWGqlError
  loading: boolean
}

const InventoryForm = (props: InventoryFormProps) => {
  const onSubmit = (data: FormInventory) => {
    props.onSave(data, props?.inventory?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormInventory> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="productId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product id
        </Label>

        <NumberField
          name="productId"
          defaultValue={props.inventory?.productId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="productId" className="rw-field-error" />

        <Label
          name="quantity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantity
        </Label>

        <NumberField
          name="quantity"
          defaultValue={props.inventory?.quantity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="quantity" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default InventoryForm

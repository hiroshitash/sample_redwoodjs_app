import type { Product } from '@prisma/client'

import {
  products,
  product,
  createProduct,
  updateProduct,
  deleteProduct,
} from './products'
import type { StandardScenario } from './products.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('products', () => {
  scenario('returns all products', async (scenario: StandardScenario) => {
    const result = await products()

    expect(result.length).toEqual(Object.keys(scenario.product).length)
  })

  scenario('returns a single product', async (scenario: StandardScenario) => {
    const result = await product({ id: scenario.product.one.id })

    expect(result).toEqual(scenario.product.one)
  })

  scenario('creates a product', async () => {
    const result = await createProduct({
      input: {
        sku: 'String3281053',
        title: 'String',
        type: 'String',
        length: 'String',
        material: 'String',
        grade: 'String',
        finish: 'String',
        image: 'String',
      },
    })

    expect(result.sku).toEqual('String3281053')
    expect(result.title).toEqual('String')
    expect(result.type).toEqual('String')
    expect(result.length).toEqual('String')
    expect(result.material).toEqual('String')
    expect(result.grade).toEqual('String')
    expect(result.finish).toEqual('String')
    expect(result.image).toEqual('String')
  })

  scenario('updates a product', async (scenario: StandardScenario) => {
    const original = (await product({ id: scenario.product.one.id })) as Product
    const result = await updateProduct({
      id: original.id,
      input: { sku: 'String88393062' },
    })

    expect(result.sku).toEqual('String88393062')
  })

  scenario('deletes a product', async (scenario: StandardScenario) => {
    const original = (await deleteProduct({
      id: scenario.product.one.id,
    })) as Product
    const result = await product({ id: original.id })

    expect(result).toEqual(null)
  })
})

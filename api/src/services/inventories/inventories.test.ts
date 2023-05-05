import type { Inventory } from '@prisma/client'

import {
  inventories,
  inventory,
  createInventory,
  updateInventory,
  deleteInventory,
} from './inventories'
import type { StandardScenario } from './inventories.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('inventories', () => {
  scenario('returns all inventories', async (scenario: StandardScenario) => {
    const result = await inventories()

    expect(result.length).toEqual(Object.keys(scenario.inventory).length)
  })

  scenario('returns a single inventory', async (scenario: StandardScenario) => {
    const result = await inventory({ id: scenario.inventory.one.id })

    expect(result).toEqual(scenario.inventory.one)
  })

  scenario('creates a inventory', async (scenario: StandardScenario) => {
    const result = await createInventory({
      input: { productId: scenario.inventory.two.productId, quantity: 3455661 },
    })

    expect(result.productId).toEqual(scenario.inventory.two.productId)
    expect(result.quantity).toEqual(3455661)
  })

  scenario('updates a inventory', async (scenario: StandardScenario) => {
    const original = (await inventory({
      id: scenario.inventory.one.id,
    })) as Inventory
    const result = await updateInventory({
      id: original.id,
      input: { quantity: 660424 },
    })

    expect(result.quantity).toEqual(660424)
  })

  scenario('deletes a inventory', async (scenario: StandardScenario) => {
    const original = (await deleteInventory({
      id: scenario.inventory.one.id,
    })) as Inventory
    const result = await inventory({ id: original.id })

    expect(result).toEqual(null)
  })
})

import type { Prisma, Inventory } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InventoryCreateArgs>({
  inventory: {
    one: {
      data: {
        quantity: 2937627,
        product: {
          create: {
            sku: 'String5006513',
            title: 'String',
            type: 'String',
            length: 'String',
            material: 'String',
            grade: 'String',
            finish: 'String',
            image: 'String',
          },
        },
      },
    },
    two: {
      data: {
        quantity: 1771697,
        product: {
          create: {
            sku: 'String5297674',
            title: 'String',
            type: 'String',
            length: 'String',
            material: 'String',
            grade: 'String',
            finish: 'String',
            image: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Inventory, 'inventory'>

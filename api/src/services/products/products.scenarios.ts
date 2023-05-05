import type { Prisma, Product } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductCreateArgs>({
  product: {
    one: {
      data: {
        sku: 'String5881528',
        title: 'String',
        type: 'String',
        length: 'String',
        material: 'String',
        grade: 'String',
        finish: 'String',
        image: 'String',
        quantity: 2856506,
      },
    },
    two: {
      data: {
        sku: 'String1560650',
        title: 'String',
        type: 'String',
        length: 'String',
        material: 'String',
        grade: 'String',
        finish: 'String',
        image: 'String',
        quantity: 8366039,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Product, 'product'>

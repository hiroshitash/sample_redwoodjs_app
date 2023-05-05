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
      },
    },
  },
})

export type StandardScenario = ScenarioData<Product, 'product'>

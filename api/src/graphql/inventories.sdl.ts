export const schema = gql`
  type Inventory {
    id: Int!
    product: Product!
    productId: Int!
    quantity: Int!
  }

  type Query {
    inventories: [Inventory!]! @requireAuth
    inventory(id: Int!): Inventory @requireAuth
  }

  input CreateInventoryInput {
    productId: Int!
    quantity: Int!
  }

  input UpdateInventoryInput {
    productId: Int
    quantity: Int
  }

  type Mutation {
    createInventory(input: CreateInventoryInput!): Inventory! @requireAuth
    updateInventory(id: Int!, input: UpdateInventoryInput!): Inventory!
      @requireAuth
    deleteInventory(id: Int!): Inventory! @requireAuth
  }
`

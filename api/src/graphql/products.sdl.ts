export const schema = gql`
  type Product {
    id: Int!
    sku: String!
    title: String!
    type: String!
    length: String!
    material: String!
    grade: String!
    finish: String!
    image: String!
    quantity: Int!
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: Int!): Product @requireAuth
  }

  input CreateProductInput {
    sku: String!
    title: String!
    type: String!
    length: String!
    material: String!
    grade: String!
    finish: String!
    image: String!
    quantity: Int!
  }

  input UpdateProductInput {
    sku: String
    title: String
    type: String
    length: String
    material: String
    grade: String
    finish: String
    image: String
    quantity: Int
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @requireAuth
    deleteProduct(id: Int!): Product! @requireAuth
  }
`

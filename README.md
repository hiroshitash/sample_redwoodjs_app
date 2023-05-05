# README

Welcome to [RedwoodJS](https://redwoodjs.com)!

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (>=18.x) and [Yarn](https://yarnpkg.com/) (>=1.15)
> - Are you on Windows? For best results, follow our [Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

Start by installing dependencies:

```
yarn install
```

Then change into that directory and start the development server:

```
cd hiroshi-tashiro-boltwise
yarn redwood dev
```

Your browser should automatically open to http://localhost:8910 where you'll see the Welcome Page, which links to many great resources.


## Database Schema
`Product` table contains sku, title, image url and attributes. `Inventory` table contains a refernce to `Product` and quantity.

```
model Product {
  id          Int         @id @default(autoincrement())
  sku         String      @unique
  inventories Inventory[]
  title       String
  type        String
  length      String
  material    String
  grade       String
  finish      String
  image       String
}
```

```
model Inventory {
  id        Int     @id @default(autoincrement())
  product   Product @relation(fields: [productId], references: [id])
  productId Int
  quantity  Int
}
```

## TODO
- Scaffolds for `Product` and `Inventory` are created. However, navigation between two scaffolds are not user friendly. We would want to:
  - Replace productId or inventoryId with Links
  - Add a logic to select a product in `InventoryForm`
  - Add `Component/Inventory/Inventries` on `ProductsPage`
- (Potentially) Add companyId, location info in table `Inventory`

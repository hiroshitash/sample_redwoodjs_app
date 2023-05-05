// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Inventories" titleTo="inventories" buttonLabel="New Inventory" buttonTo="newInventory">
        <Route path="/inventories/new" page={InventoryNewInventoryPage} name="newInventory" />
        <Route path="/inventories/{id:Int}/edit" page={InventoryEditInventoryPage} name="editInventory" />
        <Route path="/inventories/{id:Int}" page={InventoryInventoryPage} name="inventory" />
        <Route path="/inventories" page={InventoryInventoriesPage} name="inventories" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Products" titleTo="products" buttonLabel="New Product" buttonTo="newProduct">
        <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
        <Route path="/products/{id:Int}/edit" page={ProductEditProductPage} name="editProduct" />
        <Route path="/products/{id:Int}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

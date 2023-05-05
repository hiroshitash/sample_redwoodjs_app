import type {
  QueryResolvers,
  MutationResolvers,
  InventoryRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const inventories: QueryResolvers['inventories'] = () => {
  return db.inventory.findMany()
}

export const inventory: QueryResolvers['inventory'] = ({ id }) => {
  return db.inventory.findUnique({
    where: { id },
  })
}

export const createInventory: MutationResolvers['createInventory'] = ({
  input,
}) => {
  return db.inventory.create({
    data: input,
  })
}

export const updateInventory: MutationResolvers['updateInventory'] = ({
  id,
  input,
}) => {
  return db.inventory.update({
    data: input,
    where: { id },
  })
}

export const deleteInventory: MutationResolvers['deleteInventory'] = ({
  id,
}) => {
  return db.inventory.delete({
    where: { id },
  })
}

export const Inventory: InventoryRelationResolvers = {
  product: (_obj, { root }) => {
    return db.inventory.findUnique({ where: { id: root?.id } }).product()
  },
}

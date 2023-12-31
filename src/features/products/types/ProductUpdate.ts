export interface ProductUpdate {
    title?: string
    price?: number
    description?: string
    categoryId?: number
}

export type UpdateParams = {
    id: number,
    update: ProductUpdate
}
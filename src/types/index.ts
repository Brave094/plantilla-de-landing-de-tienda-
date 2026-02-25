export type Category = 
  | 'bebidas'
  | 'lacteos'
  | 'snacks'
  | 'aseo'
  | 'granos'

export interface Product {
  id: string
  name: string
  emoji: string
  price: number
  category: Category
  featured?: boolean
}

export interface CartItem extends Product {
  quantity: number
}

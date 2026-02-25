import type { Product } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatCOP } from '@/data/products'
import { useCartStore } from '@/store/cart'
import { Plus } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem(product)
  }

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-200 border-gray-200">
      <CardContent className="p-0">
        <div className="relative bg-gray-50 p-6 flex items-center justify-center h-40">
          <span className="text-6xl group-hover:scale-110 transition-transform duration-200">
            {product.emoji}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-gray-900 text-sm line-clamp-2 mb-2 min-h-[2.5rem]">
            {product.name}
          </h3>
          <p className="text-xl font-bold text-primary mb-3">
            {formatCOP(product.price)}
          </p>
          <Button
            className="w-full bg-primary hover:bg-primary-dark transition-colors"
            size="sm"
            onClick={handleAddToCart}
          >
            <Plus className="h-4 w-4 mr-1" />
            Agregar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

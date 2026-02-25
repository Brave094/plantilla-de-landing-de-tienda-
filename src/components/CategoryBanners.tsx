import { categories } from '@/data/products'
import { cn } from '@/lib/utils'

interface CategoryBannersProps {
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

const categoryImages: Record<string, string> = {
  bebidas: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=200&fit=crop',
  lacteos: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=200&fit=crop',
  snacks: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400&h=200&fit=crop',
  aseo: 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=400&h=200&fit=crop',
  granos: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=200&fit=crop',
}

const categoryColors: Record<string, string> = {
  bebidas: 'from-blue-600/80 to-blue-800/80',
  lacteos: 'from-orange-500/80 to-orange-700/80',
  snacks: 'from-red-500/80 to-red-700/80',
  aseo: 'from-teal-500/80 to-teal-700/80',
  granos: 'from-amber-600/80 to-amber-800/80',
}

export function CategoryBanners({
  selectedCategory,
  onSelectCategory,
}: CategoryBannersProps) {
  return (
    <section className="py-6 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={cn(
                'relative h-24 md:h-32 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02]',
                selectedCategory === category.id ? 'ring-2 ring-primary ring-offset-2' : ''
              )}
            >
              <img
                src={categoryImages[category.id]}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className={cn(
                'absolute inset-0 bg-gradient-to-br flex items-center justify-center',
                categoryColors[category.id]
              )}>
                <span className="text-white font-semibold text-lg md:text-xl drop-shadow-lg">
                  {category.emoji} {category.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

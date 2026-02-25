import { Link } from 'react-router-dom'
import { Search, ShoppingCart, Menu, X, Info, Phone } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { Badge } from '@/components/ui/badge'
import { useState, useMemo } from 'react'

interface HeaderProps {
  onSearch?: (query: string) => void
}

export function Header({ onSearch }: HeaderProps) {
  const { openCart } = useCartStore()
  const items = useCartStore((state) => state.items)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const itemCount = useMemo(() => 
    items.reduce((count, item) => count + item.quantity, 0),
    [items]
  )

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSearch?.(searchQuery)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg" 
            aria-label="Menú"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
          
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl">🏪</span>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary leading-tight">
                Tienda Doña Gloria
              </h1>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 mx-4">
            <Link to="/" className="text-gray-600 hover:text-primary font-medium">
              Inicio
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary font-medium flex items-center gap-1">
              <Info className="h-4 w-4" /> Nosotros
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary font-medium flex items-center gap-1">
              <Phone className="h-4 w-4" /> Contacto
            </Link>
          </nav>

          <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>
          </form>

          <button
            onClick={openCart}
            className="relative p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Carrito de compras"
          >
            <ShoppingCart className="h-6 w-6 text-gray-700" />
            {itemCount > 0 && (
              <Badge
                variant="default"
                className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center p-0 text-xs font-bold"
              >
                {itemCount}
              </Badge>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t mt-2">
            <Link 
              to="/" 
              className="block py-2 text-gray-600 hover:text-primary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-600 hover:text-primary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-600 hover:text-primary font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

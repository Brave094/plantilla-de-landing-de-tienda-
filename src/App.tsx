import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { CategoryBanners } from '@/components/CategoryBanners'
import { ProductGrid } from '@/components/ProductGrid'
import { CartSheet } from '@/components/CartSheet'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { TrustBadges } from '@/components/TrustBadges'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { products, categories } from '@/data/products'
import type { Category } from '@/types'

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  const categoryName = selectedCategory
    ? categories.find((c) => c.id === selectedCategory)?.name || 'Productos'
    : 'Todos los Productos'

  return (
    <>
      <Hero />
      <CategoryBanners
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat as Category | null)
        }}
      />
      <ProductGrid
        products={filteredProducts}
        title={categoryName}
      />
      <TrustBadges />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <CartSheet />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}

export default App

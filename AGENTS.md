# AGENTS.md - Tienda Doña Gloria

## Project Overview

A mobile-first React + TypeScript e-commerce web app for "Tienda Doña Gloria", a Colombian neighborhood store. The app features product catalog, shopping cart with WhatsApp checkout, and multiple pages (Home, About, Contact).

**Tech Stack:**
- React 19 + TypeScript + Vite
- Tailwind CSS v4
- shadcn/ui components (Button, Card, Sheet, Badge)
- Zustand for state management
- React Router v7 for routing
- lucide-react for icons

---

## Build / Lint / Test Commands

### Development
```bash
npm run dev              # Start development server
npm run preview          # Preview production build locally
```

### Building
```bash
npm run build            # Build for production (TypeScript + Vite)
npm run build:fast      # Build without type checking (not available)
```

### Linting
```bash
npm run lint            # Run ESLint on entire project
npm run lint -- --fix   # Run ESLint with auto-fix
```

### Type Checking
```bash
npx tsc --noEmit       # Type check without emitting files
npx tsc -b             # Build TypeScript project references
```

---

## Code Style Guidelines

### 1. Imports

**Use absolute imports with `@/` prefix:**
```typescript
import { Header } from '@/components/Header'
import { products } from '@/data/products'
import type { Product } from '@/types'
```

**Group imports in this order:**
1. React/Next imports
2. External libraries (lucide-react, zustand, etc.)
3. Internal imports (@/components, @/lib, @/store)
4. Type imports (type ...)

```typescript
import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingCart } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { Badge } from '@/components/ui/badge'
import type { Product } from '@/types'
```

### 2. TypeScript

**Use explicit types for props and function parameters:**
```typescript
interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  // ...
}
```

**Use `type` for type-only imports when using verbatimModuleSyntax:**
```typescript
import type { Product } from '@/types'  // ✅ Correct
import { Product } from '@/types'        // ❌ Will cause lint error
```

**Use React 19 compatible event handlers:**
```typescript
// ✅ Use React.FormEventHandler for form events
const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault()
}

// ✅ Use React.ChangeEventHandler for input events
const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  setValue(e.target.value)
}
```

### 3. Naming Conventions

**Components:** PascalCase
```typescript
export function ProductCard() { }
export function CartSheet() { }
```

**Files:** PascalCase for components, camelCase for utilities
```
ProductCard.tsx
cart.ts
utils.ts
```

**Variables/functions:** camelCase
```typescript
const handleSearch = () => { }
const filteredProducts = []
```

**Constants:** UPPER_SNAKE_CASE (if truly constant)
```typescript
const WHATSAPP_NUMBER = '573000000000'
```

### 4. State Management (Zustand)

**Always use selector pattern for Zustand:**
```typescript
// ✅ Good - individual selectors
const items = useCartStore((state) => state.items)
const isOpen = useCartStore((state) => state.isOpen)

// ❌ Avoid - accessing entire store
const store = useCartStore()
```

**Use useMemo for derived state from store:**
```typescript
const items = useCartStore((state) => state.items)

const itemCount = useMemo(() => 
  items.reduce((count, item) => count + item.quantity, 0),
  [items]
)
```

### 5. Component Structure

**Use explicit prop interfaces:**
```typescript
interface HeaderProps {
  onSearch?: (query: string) => void
}

export function Header({ onSearch }: HeaderProps) {
  // component code
}
```

**Keep components focused and small (under 150 lines)**

### 6. Tailwind CSS

**Use @theme custom colors defined in index.css:**
```css
/* Available colors */
--color-primary      /* #2E7D32 - green */
--color-primary-dark /* #1B5E20 */
--color-accent      /* #FDD835 - yellow */
--color-background  /* #FFFFFF */
--color-surface     /* #F8F9FA */
--color-text        /* #1A1A1A */
--color-text-muted  /* #6B7280 */
```

**Use consistent class ordering:**
1. Layout (flex, grid, absolute, etc.)
2. Sizing (w, h, p, m)
3. Typography (text, font, leading)
4. Visual (bg, border, rounded)
5. States (hover, focus, active)

```typescript
className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-colors"
```

### 7. Error Handling

**Use proper error boundaries for components**

**Validate props with TypeScript:**
```typescript
interface Props {
  products: Product[]  // Required - no need for default
  title?: string       // Optional - add default in component
}

function ProductGrid({ products, title = 'Productos' }: Props) {
  // title has default, products is required
}
```

### 8. Routing (React Router)

**Define routes in App.tsx:**
```typescript
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
```

**Use Link component for navigation:**
```typescript
import { Link } from 'react-router-dom'

<Link to="/about" className="text-primary">
  Nosotros
</Link>
```

### 9. shadcn/ui Components

**Available components in @/components/ui/:**
- Button (with variants: default, accent, outline, ghost, destructive)
- Card, CardHeader, CardTitle, CardContent
- Sheet (for slide-out panels)
- Badge (with variants: default, secondary, accent, outline, success)

**Usage:**
```typescript
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

<Button variant="accent" size="sm">Agregar</Button>
<Card> <CardContent>Content</CardContent> </Card>
```

### 10. Formatting

**Prefer inline styles for simple conditional classes:**
```typescript
// ✅ Good
className={isActive ? 'bg-primary text-white' : 'bg-gray-100'}

// ✅ Good - use cn() utility for complex merging
className={cn(
  'flex items-center',
  isActive && 'bg-primary',
  className
)}
```

**Use template literals for dynamic classes:**
```typescript
className={`grid grid-cols-${cols} gap-4`}
```

---

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── Header.tsx    # Main header with navigation
│   ├── Hero.tsx      # Hero section
│   ├── CategoryBanners.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── CartSheet.tsx
│   ├── WhatsAppButton.tsx
│   └── TrustBadges.tsx
├── pages/
│   ├── AboutPage.tsx
│   └── ContactPage.tsx
├── store/
│   └── cart.ts       # Zustand cart store
├── data/
│   └── products.ts   # Product data
├── types/
│   └── index.ts      # TypeScript interfaces
├── lib/
│   └── utils.ts     # Utility functions (cn())
├── App.tsx           # Main app with routing
├── main.tsx          # Entry point
└── index.css         # Global styles + Tailwind
```

---

## Testing

This project does not currently have a test framework configured. To add tests:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

Then add test script to package.json:
```json
"test": "vitest",
"test:ui": "vitest --ui"
```

---

## Common Issues & Solutions

1. **TypeScript import errors**: Ensure you're using `import type` for types
2. **Zustand reactivity**: Always use selectors, never destructure store
3. **React 19 events**: Use `React.FormEventHandler` instead of deprecated `FormEvent`
4. **Build errors**: Run `npm run lint` to check for issues before building

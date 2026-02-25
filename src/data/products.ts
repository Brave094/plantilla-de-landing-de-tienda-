import type { Product, Category } from '@/types'

export const categories: { id: Category; name: string; emoji: string }[] = [
  { id: 'bebidas', name: 'Bebidas', emoji: '🥤' },
  { id: 'lacteos', name: 'Lácteos', emoji: '🥛' },
  { id: 'snacks', name: 'Snacks', emoji: '🍟' },
  { id: 'aseo', name: 'Aseo', emoji: '🧺' },
  { id: 'granos', name: 'Granos', emoji: '🌾' },
]

export const products: Product[] = [
  // Bebidas
  {
    id: 'coca-cola-350ml',
    name: 'Coca-Cola 350ml',
    emoji: '🥤',
    price: 3500,
    category: 'bebidas',
    featured: true,
  },
  {
    id: 'postobon-350ml',
    name: 'Postobón 350ml',
    emoji: '🥤',
    price: 3500,
    category: 'bebidas',
  },
  {
    id: 'agua-botella-500ml',
    name: 'Agua sin gas 500ml',
    emoji: '💧',
    price: 2000,
    category: 'bebidas',
  },
  {
    id: 'jugo-hit-mango',
    name: 'Jugo Hit Mango',
    emoji: '🧃',
    price: 4500,
    category: 'bebidas',
  },
  {
    id: 'jugo-hit-fresa',
    name: 'Jugo Hit Fresa',
    emoji: '🧃',
    price: 4500,
    category: 'bebidas',
  },

  // Lácteos
  {
    id: 'leche-alqueria-1l',
    name: 'Leche Alquería 1L',
    emoji: '🥛',
    price: 5500,
    category: 'lacteos',
    featured: true,
  },
  {
    id: 'kumis-alqueria',
    name: 'Kumis Alquería',
    emoji: '🥛',
    price: 4000,
    category: 'lacteos',
  },
  {
    id: 'yogurt-griego',
    name: 'Yogurt Griego',
    emoji: '🥛',
    price: 3500,
    category: 'lacteos',
  },
  {
    id: 'leche-entera-1l',
    name: 'Leche Entera 1L',
    emoji: '🥛',
    price: 4800,
    category: 'lacteos',
  },

  // Snacks
  {
    id: 'papas-margarita-grandes',
    name: 'Papas Margarita Grandes',
    emoji: '🍟',
    price: 3000,
    category: 'snacks',
    featured: true,
  },
  {
    id: 'chocolatina-ferrero',
    name: 'Chocolatina Ferrero',
    emoji: '🍫',
    price: 2500,
    category: 'snacks',
  },
  {
    id: 'chicles-trident',
    name: 'Chicles Trident',
    emoji: '🍬',
    price: 1500,
    category: 'snacks',
  },
  {
    id: 'papas-margarita-pequenas',
    name: 'Papas Margarita Pequeñas',
    emoji: '🍟',
    price: 1500,
    category: 'snacks',
  },
  {
    id: 'galletas-oreo',
    name: 'Galletas Oreo',
    emoji: '🍪',
    price: 2800,
    category: 'snacks',
  },

  // Aseo
  {
    id: 'jabon-axion',
    name: 'Jabón Axion',
    emoji: '🧼',
    price: 2000,
    category: 'aseo',
  },
  {
    id: 'detergente-ariel-1kg',
    name: 'Detergente Ariel 1kg',
    emoji: '🧴',
    price: 12000,
    category: 'aseo',
    featured: true,
  },
  {
    id: 'papel-higienico-scott',
    name: 'Papel Higiénico Scott (4 rollos)',
    emoji: '🧻',
    price: 5000,
    category: 'aseo',
  },
  {
    id: 'shampoo-head-shoulders',
    name: 'Shampoo Head & Shoulders',
    emoji: '🧴',
    price: 15000,
    category: 'aseo',
  },

  // Granos
  {
    id: 'arroz-diana-1kg',
    name: 'Arroz Diana 1kg',
    emoji: '🍚',
    price: 5500,
    category: 'granos',
    featured: true,
  },
  {
    id: 'lentejas-1lb',
    name: 'Lentejas (por libra)',
    emoji: '🫘',
    price: 6000,
    category: 'granos',
  },
  {
    id: 'frijol-rojo-1lb',
    name: 'Frijol Rojo (por libra)',
    emoji: '🫘',
    price: 7000,
    category: 'granos',
  },
  {
    id: 'azucar-blanc',
    name: 'Azúcar Blanca 1kg',
    emoji: '🧂',
    price: 4500,
    category: 'granos',
  },
]

export const formatCOP = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

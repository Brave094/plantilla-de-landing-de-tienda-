import { MessageCircle } from 'lucide-react'
import { useCartStore, getWhatsAppLink } from '@/store/cart'

export function WhatsAppButton() {
  const items = useCartStore((state) => state.items)

  if (items.length === 0) {
    return null
  }

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center gap-2"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-semibold hidden md:inline">Pedir por WhatsApp</span>
    </a>
  )
}

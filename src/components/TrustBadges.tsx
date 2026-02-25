import { Truck, ShieldCheck, CreditCard, Clock } from 'lucide-react'

const trustItems = [
  {
    icon: Truck,
    title: 'Domicilios gratis',
    description: 'Envío sin costo desde $50.000',
  },
  {
    icon: ShieldCheck,
    title: 'Compras seguras',
    description: 'Tu información protegida',
  },
  {
    icon: CreditCard,
    title: 'Paga como quieras',
    description: 'Efectivo o transferencia',
  },
  {
    icon: Clock,
    title: 'Delivery rápido',
    description: 'Entrega en horas',
  },
]

export function TrustBadges() {
  return (
    <section className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Truck, ShoppingBag } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              ¡Bienvenido a Tienda Doña Gloria!
            </h1>
            <p className="text-lg md:text-xl text-primary-light mb-6 max-w-xl">
              Tu tienda de confianza en el barrio. Los mejores productos frescos y de calidad, delivery rápido a tu casa.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Truck className="h-4 w-4" /> Delivery en horas
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" /> Envío gratis desde $50.000
              </span>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop"
                alt="Tienda de abarrotes"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold text-center">
                  📍 Tu tienda de confianza
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { ArrowLeft, Store, Heart, Truck } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Sobre Tienda Doña Gloria
        </h1>

        <div className="prose max-w-none">
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Store className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Nuestra Historia
                </h2>
                <p className="text-gray-600">Desde 1995 al servicio del barrio</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Tienda Doña Gloria nació hace más de 25 años con el sueño de 
              proporcionar a nuestra comunidad los mejores productos de primera 
              necesidad. Lo que comenzó como un pequeño negocio familiar, hoy 
              es el punto de encuentro favorito de nuestro barrio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-primary/5 rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Nuestra Misión
              </h3>
              <p className="text-gray-600">
                Brindar a nuestras familias del barrio productos frescos, de 
                calidad y a precios justos, con un servicio amable y personalizado 
                que nos convierta en la primera opción de todos.
              </p>
            </div>

            <div className="bg-primary/5 rounded-xl p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Servicio a Domicilio
              </h3>
              <p className="text-gray-600">
                Llevamos tus compras hasta la puerta de tu casa. Contamos 
                con servicio de delivery rápido para que recibas todos tus 
                productos sin salir de casa.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              ¡Visítanos!
            </h2>
            <p className="text-gray-300 mb-6">
              Te esperamos con los brazos abiertos en nuestra tienda. 
              Encuentra todo lo que necesitas para tu hogar.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-accent text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-accent-dark transition-colors"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

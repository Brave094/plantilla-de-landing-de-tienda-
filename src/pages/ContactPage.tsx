import { Link } from 'react-router-dom'
import { ArrowLeft, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'

export function ContactPage() {
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
          Contáctanos
        </h1>

        <p className="text-gray-600 mb-8">
          Estamos disponibles para atenderte. Puedes contactarnos por cualquiera 
          de estos medios:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-2xl p-6 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">WhatsApp</h3>
                <p className="text-green-100">Escríbenos ahora</p>
              </div>
            </div>
          </a>

          <a
            href="tel:+573000000000"
            className="bg-primary hover:bg-primary-dark text-white rounded-2xl p-6 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Teléfono</h3>
                <p className="text-primary-light">+57 300 000 0000</p>
              </div>
            </div>
          </a>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-gray-900">Dirección</h2>
          </div>
          <p className="text-gray-600">
            Calle 123 #45-67<br />
            Barrio Los Rosales<br />
            Bogotá, Colombia
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-gray-900">Horarios de Atención</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-600">
            <div>
              <p className="font-medium">Lunes a Sábado</p>
              <p>7:00 AM - 9:00 PM</p>
            </div>
            <div>
              <p className="font-medium">Domingos</p>
              <p>8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-gray-900">Pedidos por WhatsApp</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Puedes hacer tus pedidos directamente por WhatsApp y te lo 
            llevamos a tu casa. Es más rápido y fácil.
          </p>
          <a
            href="https://wa.me/573000000000?text=Hola%20Doña%20Gloria%2C%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Hacer pedido por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

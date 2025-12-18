import { Truck,RotateCcw,Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"
const Location = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Stores</h1>

          {/* Location Search */}
          <div className="flex gap-4 mb-8 max-w-md">
            <input type="text" placeholder="Enter your location" className="flex-1 bg-gray-100 rounded-full p-3" />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 px-5 rounded-full">Find Me</button>
          </div>

          {/* Map and Store Info */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="relative w-full h-125 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.7305766!2d-0.3340!3d51.4479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI2JzUyLjQiTiAwwrAyMCcwMi40Ilc!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0"
                />
              </div>
            </div>

            {/* Store Details */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">All our store locations</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Twickenham</h3>

                <div className="space-y-2 text-sm text-gray-700">
                  <p>58 Richmond Road</p>
                  <p>Twickenham</p>
                  <p>TW1 3BE London</p>
                  <p>United Kingdom</p>
                </div>

                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>02088915321</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:info@bellababy.co.uk" className="text-blue-600 hover:underline">
                      info@bellababy.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Boxes */}
          
        </div>
    </>
  )
}

export default Location

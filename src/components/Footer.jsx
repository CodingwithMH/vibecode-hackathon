import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-bold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  30 Day Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Size Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Warranties & Repairs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Phone: 0800 123 4567</li>
              <li>Email: info@bellababy.co.uk</li>
              <li className="pt-4">
                <strong>Store Opening Hours</strong>
                <p className="text-xs mt-2">
                  Mon-Sat: 9am - 5:30pm
                  <br />
                  Sun: 11am - 4pm
                </p>
              </li>
              <li>
            <div className="flex gap-3 mb-6">
              <a href="#" className="bg-amber-500 text-[#2C3E50] p-2 rounded-full hover:opacity-80">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-amber-500 text-[#2C3E50] p-2 rounded-full hover:opacity-80">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-amber-500 text-[#2C3E50] p-2 rounded-full hover:opacity-80">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-amber-500 text-[#2C3E50] p-2 rounded-full hover:opacity-80">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Copyright */}
      </div>
        <div className="bg-white text-gray-700 p-8 text-sm flex justify-between items-center">
          <p>© www.bellababy.co.uk 2025 | All rights reserved</p>
          <div class="flex items-center flex-col lg:flex-row">
    <p class="font-bold lg:mr-8 mb-2 lg:mb-0 text-gray-600">Secure Payments</p>
    <div class="flex items-center"/>
        <img loading="lazy" src="https://www.bellababy.co.uk/static/version1764159769/frontend/Bellababy/hyva-base/en_GB/images/payment/ecommerce-europe.png" alt="Ecommerce Europe" width="42" height="23" class="mr-2"/>
        <img loading="lazy" src="https://www.bellababy.co.uk/static/version1764159769/frontend/Bellababy/hyva-base/en_GB/images/payment/amazonpay.png" alt="AmazonPay" width="63" height="25"/>
        <img loading="lazy" src="https://www.bellababy.co.uk/static/version1764159769/frontend/Bellababy/hyva-base/en_GB/images/payment/payments.jpg" alt="Payment Providers" width="165" height="47"/>
    </div>
</div>
    </footer>
  )
}

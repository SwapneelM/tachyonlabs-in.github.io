import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-800 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-16%20at%202.30.16%E2%80%AFPM-NGvXdzOJNKZhaK35tuHYU8b8cscl1f.png"
                alt="TachyonLabs Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[#e05d44] font-medium mb-2">Accelerating Innovation</p>
            <p className="text-gray-600 mb-4">
              TachyonLabs Innovations Private Limited - Providing expert technology consulting and innovative digital
              solutions for businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-[#e05d44] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#e05d44] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#e05d44] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#e05d44] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#e05d44] mt-0.5" />
                <span className="text-gray-600">
                  Ahmedabad, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#e05d44]" />
                <span className="text-gray-600">+919328086219</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#e05d44]" />
                <span className="text-gray-600">tachyonlabs.innovations@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} TachyonLabs Innovations Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


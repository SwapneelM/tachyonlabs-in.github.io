"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="w-full border-b bg-white fixed top-0 z-50">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-16%20at%202.30.16%E2%80%AFPM-NGvXdzOJNKZhaK35tuHYU8b8cscl1f.png"
            alt="TachyonLabs Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        <div className="hidden md:flex">
          <a href="#contact">
            <Button className="bg-[#e05d44] hover:bg-[#c94c36] text-white border-none">Get in Touch</Button>
          </a>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 mt-6">
              <a href="#contact">
                <Button className="w-full bg-[#e05d44] hover:bg-[#c94c36] text-white border-none mt-4">
                  Get in Touch
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}


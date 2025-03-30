"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Code, Database, Globe, Mail, MapPin, Phone, Server, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Form submitted successfully",
      description: "We'll get back to you as soon as possible.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="home" className="w-full pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-40 lg:pb-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                Innovative Digital Solutions for Your Business
              </h1>
              <p className="text-xl text-[#e05d44] font-medium mb-2">Accelerating Innovation</p>
              <p className="max-w-[600px] text-gray-600 md:text-xl mx-auto">
                TachyonLabs Innovations Private Limited provides expert technology consulting and custom software
                solutions to help your business thrive in the digital era.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="#contact">
                <Button size="lg" className="bg-[#e05d44] hover:bg-[#c94c36] text-white border-none">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="border-[#e05d44] text-[#e05d44] hover:bg-[#e05d44]/10">
                  Our Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#e05d44]">
                Our Services
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a comprehensive range of technology services to help your business thrive in the digital era.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-[#e05d44]/10 rounded-full">
                <Code className="h-10 w-10 text-[#e05d44]" />
              </div>
              <h3 className="text-xl font-bold text-center">Custom Software</h3>
              <p className="text-center text-gray-600">
                Tailored software solutions designed to address your specific business challenges.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-[#e05d44]/10 rounded-full">
                <Globe className="h-10 w-10 text-[#e05d44]" />
              </div>
              <h3 className="text-xl font-bold text-center">Web & Mobile Apps</h3>
              <p className="text-center text-gray-600">
                Responsive applications that deliver exceptional user experiences across all devices.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-[#e05d44]/10 rounded-full">
                <Database className="h-10 w-10 text-[#e05d44]" />
              </div>
              <h3 className="text-xl font-bold text-center">Data Analytics & AI</h3>
              <p className="text-center text-gray-600">
                Harness the power of your data with advanced analytics and artificial intelligence.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-[#e05d44]/10 rounded-full">
                <Server className="h-10 w-10 text-[#e05d44]" />
              </div>
              <h3 className="text-xl font-bold text-center">Cloud Solutions</h3>
              <p className="text-center text-gray-600">
                Scalable and secure cloud infrastructure to optimize your IT operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {/* Custom Software Development */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Custom Software Development"
                  className="rounded-lg object-cover shadow-xl"
                  width={600}
                  height={400}
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="p-2 bg-[#e05d44]/10 rounded-full w-fit">
                  <Code className="h-6 w-6 text-[#e05d44]" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-[#e05d44]">Custom Software Development</h2>
                  <p className="text-gray-600 md:text-lg">
                    We design and develop tailored software solutions that address your specific business challenges and
                    requirements.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Enterprise Applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Workflow Automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Integration Solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Legacy System Modernization</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Web & Mobile Applications */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="p-2 bg-[#e05d44]/10 rounded-full w-fit">
                  <Globe className="h-6 w-6 text-[#e05d44]" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-[#e05d44]">Web & Mobile Applications</h2>
                  <p className="text-gray-600 md:text-lg">
                    We create responsive web and mobile applications that deliver exceptional user experiences across
                    all devices.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Progressive Web Apps (PWA)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Native Mobile Applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Cross-platform Solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>UI/UX Design</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center order-1 lg:order-2">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Web & Mobile Applications"
                  className="rounded-lg object-cover shadow-xl"
                  width={600}
                  height={400}
                />
              </div>
            </div>

            {/* Data Analytics & AI */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Data Analytics & AI"
                  className="rounded-lg object-cover shadow-xl"
                  width={600}
                  height={400}
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="p-2 bg-[#e05d44]/10 rounded-full w-fit">
                  <Database className="h-6 w-6 text-[#e05d44]" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-[#e05d44]">Data Analytics & AI</h2>
                  <p className="text-gray-600 md:text-lg">
                    Harness the power of your data with advanced analytics and artificial intelligence solutions.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Business Intelligence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Predictive Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Machine Learning Models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Natural Language Processing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cloud Infrastructure */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="p-2 bg-[#e05d44]/10 rounded-full w-fit">
                  <Server className="h-6 w-6 text-[#e05d44]" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-[#e05d44]">Cloud Infrastructure</h2>
                  <p className="text-gray-600 md:text-lg">
                    Scalable and secure cloud solutions to optimize your IT infrastructure and reduce costs.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Cloud Migration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Infrastructure as Code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>DevOps Implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Managed Cloud Services</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center order-1 lg:order-2">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Cloud Infrastructure"
                  className="rounded-lg object-cover shadow-xl"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#e05d44]">About Us</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're a team of technology experts dedicated to helping businesses succeed in the digital era
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Our team"
                className="rounded-lg object-cover shadow-xl"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter text-[#e05d44]">Our Story</h3>
                <p className="text-gray-600 md:text-lg">
                  Founded with a simple mission: to help businesses leverage technology for growth and innovation. What
                  started as a small team of passionate technologists has grown into a leading technology consulting
                  firm serving clients across India and worldwide.
                </p>
                <p className="text-gray-600 md:text-lg">
                  Over the years, we've helped hundreds of businesses transform their operations, develop innovative
                  products, and stay ahead in an increasingly digital world. Our success is built on our commitment to
                  excellence, our deep technical expertise, and our client-centered approach.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md">
              <div className="p-3 bg-[#e05d44]/10 rounded-full">
                <CheckCircle className="h-10 w-10 text-[#e05d44]" />
              </div>
              <h3 className="text-xl font-bold text-center">Innovation</h3>
              <p className="text-center text-gray-600">
                We constantly explore new technologies and approaches to deliver cutting-edge solutions that drive
                business value.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md">
              <div className="p-3 bg-[#e05d44]/10 rounded-full">
                <CheckCircle className="h-10 w-10 text-[#e05d44]" />
              </div>
              <h3 className="text-xl font-bold text-center">Integrity</h3>
              <p className="text-center text-gray-600">
                We operate with honesty, transparency, and ethical standards in all our interactions with clients,
                partners, and employees.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md">
              <div className="p-3 bg-[#e05d44]/10 rounded-full">
                <CheckCircle className="h-10 w-10 text-[#e05d44]" />
              </div>
              <h3 className="text-xl font-bold text-center">Impact</h3>
              <p className="text-center text-gray-600">
                We measure our success by the tangible results and positive impact we create for our clients and their
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#e05d44]">Contact Us</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our team to discuss your technology needs
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#e05d44]/10 rounded-full">
                    <MapPin className="h-6 w-6 text-[#e05d44]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Our Office</h3>
                    <p className="text-gray-600">
                      BUNGLOW NO. 5 DIP BUNGLOW, OPP SATY TIRVENI TOWER,
                      <br />
                      Jodhpur Char Rasta, Ahmedabad, Ahmadabad City,
                      <br />
                      Gujarat, India, 380015
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#e05d44]/10 rounded-full">
                    <Phone className="h-6 w-6 text-[#e05d44]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600">+919328086219</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#e05d44]/10 rounded-full">
                    <Mail className="h-6 w-6 text-[#e05d44]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">tachyonlabs.innovations@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9061741211367!2d72.54170937599761!3d23.02999997917887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f521640d4b%3A0x6853ee97a9a2944b!2sJodhpur%20Char%20Rasta%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1710607601000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
            <div>
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project or inquiry"
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#e05d44] hover:bg-[#c94c36] text-white border-none"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


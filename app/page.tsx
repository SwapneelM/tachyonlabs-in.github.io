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
                Innovative Digital Solutions for Public Benefit
              </h1>
              <p className="text-xl text-[#e05d44] font-medium mb-2">Accelerating AI-led Innovation</p>
              <p className="max-w-[600px] text-gray-600 md:text-xl mx-auto">
                Tachyon Labs leverages decades of research and engineering experience to solve complex technological challenges in global development.
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
                  Our Mission
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
                Our Mission
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We build award-winning public interest artificial intelligence technology for societal benefit, and educate the next generation of technologists to lead responsible innovation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-[#e05d44]/10 rounded-full">
                <Code className="h-10 w-10 text-[#e05d44]" />
              </div>
              <h3 className="text-xl font-bold text-center">Public Interest Technology</h3>
              <p className="text-center text-gray-600">
                Tailored software solutions designed to advance economic benefit to local populations and mitigate digital harms.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-[#e05d44]/10 rounded-full">
                <Globe className="h-10 w-10 text-[#e05d44]" />
              </div>
              <h3 className="text-xl font-bold text-center">Accessibility Across Platforms</h3>
              <p className="text-center text-gray-600">
                Accessible technology designed to bridge languages, cultures, and populations. 
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-[#e05d44]/10 rounded-full">
                <Database className="h-10 w-10 text-[#e05d44]" />
              </div>
              <h3 className="text-xl font-bold text-center">Multimodal AI Models</h3>
              <p className="text-center text-gray-600">
                Advanced Generative AI for real-time understanding of patterns in text, images, audio, and video.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-[#e05d44]/10 rounded-full">
                <Server className="h-10 w-10 text-[#e05d44]" />
              </div>
              <h3 className="text-xl font-bold text-center">Cloud Solutions</h3>
              <p className="text-center text-gray-600">
                Scalable and secure cloud infrastructure for data privacy at affordable costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sakhi */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#e05d44]">
            Impact
          </h1>
          <div className="grid gap-12">            
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/sakhi-jalgaon.webp"
                  alt="Sakhi Health using Generative AI for Digital Literacy"
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
                  <h2 className="text-3xl font-bold tracking-tighter text-[#e05d44]">Sakhi Health</h2>
                  <p className="text-gray-600 md:text-lg">
                    We operate Sakhi Health in India, focused on national health literacy using a novel three-point Generative AI platform supporting mothers, community health workers, 
                    and nonprofit program officers working with state governments to deliver medical expert-verified multilingual healthcare information to the most vulnerable populations.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Medical Expert-verified Information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Evidence-based Health Intervention Technology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Community-based Model for Data Governance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Ongoing Multi-state Pilots with Indian Council of Medical Research</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SimPPL */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/simppl-team.webp"
                  alt="Collaborators"
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
                  <h2 className="text-3xl font-bold tracking-tighter text-[#e05d44]">Collaborators - SimPPL</h2>
                  <p className="text-gray-600 md:text-lg">
                    We collaborate with the team at SimPPL, a U.S. nonprofit dedicated to rebuilding digital trust and AI tools for the global majority. 
                    Our partnership focuses on developing a suite of enterprise tools for social listening and media literacy, with a special emphasis on multilingual capabilities.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Multilingual AI for Social Cybersecurity and Network Monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Multimodal AI Tools for Tracking and Fact-checking Influencers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>Terabyte-scale Social Data Processing across Localized Platforms and Communities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e05d44]" />
                    <span>International Research Programs awarded by Google and Mozilla</span>
                  </li>
                </ul>
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
                We're a team of technology experts from MIT, NYU, CERN, Google, and Oxford dedicated to helping businesses succeed in the digital era.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/tachyon-labs-team.webp"
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
                  Founded with a simple mission: to develop open-access technology for advancing democratic governance. We grew from a small team of passionate technologists in India has grown into a leading technology consulting
                  firm serving clients in seven countries across the globe.
                </p>
                <p className="text-gray-600 md:text-lg">
                  Over the years, we've helped 20+ intergovernmental agencies, civil society, universities, and nonprofits transform their operations, develop innovative
                  products, and stay ahead in an increasingly digital world. Our success is built on our commitment to
                  excellence, our deep technical expertise, cutting-edge research capabilities, and our approach to user-centered design.
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
                We constantly explore new technologies and approaches to deliver cutting-edge AI solutions that drive
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
                businesses reaching over 100 million users through our work.
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
                      Bunglow no. 5 Dip Bunglow, Opp Satya Triveni Tower,
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
                    <p className="text-gray-600">+91 9328086219</p>
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


"use client"

import Link from "next/link"
import Image from "next/image"
import { Leaf, Sprout, Tractor, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [bookmarks, setBookmarks] = useState([])

  const schemes = [
    {
      icon: "🌱",
      title: "Schemes",
      description: "Explore various government schemes designed to support and empower farmers across India.",
      buttonText: "View Schemes",
      buttonColor: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: "🌾",
      title: "Subsidies",
      description: "Find information about available government subsidies for agricultural inputs and equipment.",
      buttonText: "View Subsidies",
      buttonColor: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: "💰",
      title: "Financial Support",
      description: "Learn about financial support programs and assistance available for farmers.",
      buttonText: "View Financial Support",
      buttonColor: "bg-green-500 hover:bg-green-600",
    },
  ]

  const news = [
    {
      category: "Agriculture",
      date: "Jan 2025",
      title:
        "Agriculture Minister Chouhan assures of bumper wheat crop this year, prices may cool.",
    },
    {
      category: "Agriculture",
      date: "Feb 2025",
      title:
        "PHDCCI moots gradual reduction of chemical fertilizers for sustainable farming.",
    },
    {
      category: "Agriculture",
      date: "Dec 2024",
      title:
        "The role of government policies in promoting solar adoption among farmers ",
    },
  ]

  const addToBookmarks = (scheme) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, scheme])
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      
      <div className="container px-4 py-16 md:py-24">
      <div className="mt-[-50px] mb-0 text-center">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-3xl">
            किसान सहायता योजनाएं
          </h1>
          <p className="text-xl text-gray-600 md:text-2xl">Government Schemes and Support</p>
          
        </div>
        <div className="px-4 py-16">
        <Link href="/schemes/bookmarks"
                className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800"
              >
                bookmarks
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
        </div>
        
        <div className="ms-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:ml-4">
          {/* Schemes Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl h-80">
  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-100 opacity-50 transition-transform group-hover:scale-150" />
  <div className="relative">
    <div className="mb-4 inline-block rounded-lg bg-green-100 p-3">
      <Leaf className="h-6 w-6 text-green-600" />
    </div>
    <h3 className="mb-2 text-2xl font-bold text-gray-900">Schemes</h3>
    <p className="mb-4 text-gray-600">
      Explore various government schemes designed to support and empower farmers across India.
    </p>
    <Link
      href="/schemes/government-schemes"
      className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
    >
      View schemes
      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
</div>


          {/* Subsidies Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl h-80">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-100 opacity-50 transition-transform group-hover:scale-150" />
            <div className="relative">
              <div className="mb-4 inline-block rounded-lg bg-green-100 p-3">
                <Sprout className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">Subsidies</h3>
              <p className="mb-4 text-gray-600">
                Find information about available government subsidies for agricultural inputs and equipment.
              </p>
               <Link href="/schemes/subsidies"
                className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
              >
                View Subsidies
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Financial Support Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl h-80">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-100 opacity-50 transition-transform group-hover:scale-150" />
            <div className="relative">
              <div className="mb-4 inline-block rounded-lg bg-green-100 p-3">
                <Tractor className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">Financial Support</h3>
              <p className="mb-4 text-gray-600">
                Learn about financial support programs and assistance available for farmers.
               
              </p>
               <Link href="/schemes/financial-support"
                className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
              >
                View Financial Support
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        </div>
{/* 
        <div className="mt-16 text-center">
          <Image
            src="/placeholder.svg?height=200&width=800"
            width={800}
            height={200}
            alt="Farming landscape"
            className="mx-auto rounded-2xl object-cover"
          />
        </div> */}

        {/* News Section */}
        <div className="mt-20 grid gap-12 md:grid-cols-[300px_1fr]">
          <div>
            <h2 className=" mt-20 text-4xl font-bold">Latest News</h2>
            {/* <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p> */}
            <Link
              href="https://www.thehindubusinessline.com/economy/agri-business/"
              className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-green-500 text-white"
            >
              <ArrowUpRight className="h-6 w-6" />
            </Link>
          </div>

          <div className="space-y-4">
            {news.map((item, index) => (
              <Link
                key={index}
                href="https://www.thehindubusinessline.com/economy/agri-business/agriculture-minister-chouhan-assures-bumper-wheat-crop-this-year-prices-may-cool/article69246850.ece"
                className="group block rounded-lg bg-gray-50 p-6 transition-all hover:bg-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    <span className="text-sm font-medium text-green-500">{item.category}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-400">{item.date}</span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
//what i have done is 

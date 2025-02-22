"use client"
import { useState, useEffect, useCallback } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const SchemesList = ({ title, data }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredData, setFilteredData] = useState([])
  const itemsPerPage = 6

  const filterData = useCallback(() => {
    const arrayData = Array.isArray(data) ? data : []
    const filtered = arrayData.filter(
      (item) =>
        (item?.name?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
        (item?.description?.toLowerCase() || "").includes(searchQuery.toLowerCase()),
    )
    setFilteredData(filtered)
    setCurrentPage(1)
  }, [searchQuery, data])

  useEffect(() => {
    filterData()
  }, [filterData])

  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredData.slice(startIndex, endIndex)
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  // Map of scheme types to their gradients and icons
  const schemeStyles = {
    insurance: { gradient: "from-green-500 to-emerald-600", icon: "🌾" },
    financial: { gradient: "from-amber-500 to-orange-600", icon: "💰" },
    irrigation: { gradient: "from-blue-500 to-cyan-600", icon: "💧" },
    soil: { gradient: "from-brown-500 to-amber-700", icon: "🌱" },
    pension: { gradient: "from-purple-500 to-pink-600", icon: "👨‍🌾" },
    credit: { gradient: "from-red-500 to-rose-600", icon: "💳" },
    default: { gradient: "from-gray-500 to-gray-600", icon: "📋" },
  }

  return (
    <div className="min-h-screen bg-[#f8f9f5] px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-green-800">
          {/* <span className="block text-[2.5rem]">{title}</span> */}
          <span className="text-2xl text-gray-600">Government Schemes</span>
        </h1>

        <div className="mb-8 flex items-center justify-center">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder=" Search schemes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 border-2 bg-white pl-12 text-lg"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {getCurrentItems().map((item, index) => {
            const style = schemeStyles[item.type] || schemeStyles.default
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-4xl">{style.icon}</span>
                  <span className="text-sm text-gray-500">Date: {item.date}</span>
                </div>
                <h3 className="mb-1 text-xl font-bold text-gray-900">{item.nameHindi || item.name}</h3>
                {item.nameHindi && <h4 className="mb-3 text-sm font-medium text-gray-600">{item.name}</h4>}
                <p className="mb-4 text-gray-600">{item.description}</p>
                <Button
                  asChild
                  className={`bg-gradient-to-r ${style.gradient} text-white transition-transform hover:scale-105`}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-green-600">
                    Learn More →
                  </a>
                </Button>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            )
          })}
        </div>

        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="cursor-pointer"
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="cursor-pointer"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  )
}

export default SchemesList


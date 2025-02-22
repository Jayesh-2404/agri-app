'use client'
import SchemesList from '@/components/schemes/SchemeList'
import subsidies from '@/data/Subsides.json'

const SubsidiesPage = () => {
  // Access the subsidies array from the imported JSON object
  const subsidiesData = subsidies.Subsides || []

  // Add console.log to debug the data
  console.log('Subsidies data:', subsidiesData)

  return <SchemesList title="Government Subsidies" data={subsidiesData} />
}

export default SubsidiesPage
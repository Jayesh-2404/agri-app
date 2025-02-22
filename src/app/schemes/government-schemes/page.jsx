'use client'
import SchemesList from '@/components/schemes/SchemeList'
import schemesData from '@/data/scheme.json'

const GovernmentSchemesPage = () => {
  // Access the schemes array from the imported JSON object
  const schemes = schemesData.schemes || []

  // Add console.log to debug the data
  console.log('Schemes data:', schemes)

  return <SchemesList title="Government Schemes" data={schemes} />
}

export default GovernmentSchemesPage
'use client'
import SchemesList from '@/components/schemes/SchemeList'
import financialSupport from '@/data/financial-support.json'

const FinancialSupportPage = () => {
    const schemes = financialSupport.financialSchemes || []
    console.log('Schemes data:', schemes)
  
    return <SchemesList title="Financial Support" data={schemes} />
}

export default FinancialSupportPage
import ProductCard from '@/components/ProductCard'
import { products } from '@/utils'
import React from 'react'

const Page = () => {
  return (
    <main className='containery container1'>
        <div className='cards gap-8'>
        {
            products.map((v, i)=> (
                <ProductCard key={i} name={v.name} material={v.material} image={v.image} />
                ))
            }
            </div>

</main>
  )
  
}

export default Page
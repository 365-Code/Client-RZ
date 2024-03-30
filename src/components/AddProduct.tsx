"use client"
import React, { useState } from 'react'
import ProductCardSkeleton from './ProductCardSkeleton'
import ProductInput from './ProductInput'

const AddProduct = () => {
  const [add, setAdd] = useState(false)

  return (
    <div className='w-full min-w-[var(--card-size)]'>
        <div onClick={() => setAdd(true)}>
        <ProductCardSkeleton />
        </div>
      {
        add &&
        <ProductInput setEdit={setAdd} type="add" />
      }
    </div>
  )
}

export default AddProduct
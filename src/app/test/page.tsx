import Carousel from '@/components/Carousel'
import React from 'react'

const page = () => {
    const images = [
        "https://img.freepik.com/free-photo/bananas-apple-near-laptop-glasses_23-2147761544.jpg?t=st=1709037555~exp=1709041155~hmac=51657cb4949e966078db04ead9867261ec887a51aa969ff5f80d8f9c0772f1dc&w=1060",
        "https://img.freepik.com/free-photo/top-view-colored-apples-bowl-with-laptop-limes-cup-tea-cinnamon-white-surface_141793-18340.jpg?t=st=1709037575~exp=1709041175~hmac=a0e55b13701eafe6623d048cb677b96cbd5ae950a533c31b41f11ae6238bcfdb&w=1060",
        "https://img.freepik.com/free-photo/appetizing-peach-wooden-surface-generative-ai_169016-29384.jpg?t=st=1709037598~exp=1709041198~hmac=9e0d34c8e5c1b0d1f0fec37546eb94167023956f54e9e8c58e86cd2e43a5742c&w=1380"
    ]
  return (
    <div>
        <Carousel images={images}/>
    </div>
  )
}

export default page
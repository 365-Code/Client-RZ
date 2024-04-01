import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

const ImgPreview = ({view, setView}: {view: string, setView: Dispatch<SetStateAction<string>>}) => {
  return (
    <div
      onClick={() => setView("")}
        className={`bg-black/40 fixed ${
          view
            ? "w-full h-full flex items-center justify-center z-10"
            : "overflow-hidden h-0 w-0"
        }`}
      >
        <div>
          <Image
            width={600}
            height={600}
            src={view}
            alt="product1"
            // className="w-full h-full object-fill"
            className={`w-full h-full object-center object-scale-down `}
          />
        </div>
      </div>
  )
}

export default ImgPreview
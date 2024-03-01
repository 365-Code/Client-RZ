"use client"
import React, { useEffect, useState } from 'react'

const Carousel = ({images}: {images: Array<string>}) => {

    const [imgs, setImgs] = useState<Array<string>>([])
    const [currentImg, setCurrentImg] = useState(0)
    // const [currentImg, setCurrentImg] = useState<string>("")


    const handleCarousel = (num: boolean)=>{
        if(images.length <= 1){
            return;
        }

    if(num){
        if( currentImg + 1 >= imgs.length ){
            setCurrentImg(0)
        } else{
            setCurrentImg( (currentImg + 1) )
        }
    }
        else{
            if( currentImg - 1 == 0 ){
            setCurrentImg(0)
        } else{
            setCurrentImg(currentImg - 1)
        }
        }
        // if( !num ){
        //     let images = imgs;
        //     images.push(images.pop() || "")
        //     setImgs(images);
        //     setCurrentImg(images[0])
        // } else{
        //     let images = imgs;
        //     images.reverse()
        //     let x = images.pop();
        //     images.reverse();
        //     images.push(x || "");
        //     setCurrentImg(images[0])
        //     setImgs(images)
        // }
    }

    useEffect(() => {
        setImgs(images);
        setCurrentImg(0)
        // setCurrentImg(images[0])
    }, [])

    // useEffect(()=>{
    //     const debounce = setTimeout(() =>{
    //         handleCarousel(true);
    //     }, 2000)
    //     return () => clearTimeout(debounce)
    // }, [currentImg])

  return (
    <div className='flex flex-col p-24 justify-center items-center'>
        <div className='w-full flex items-center justify-center max-w-[1500px] bg-black'>
            <div className='flex items-center transition-all w-[500px] min-h-[500px]'>
                {
                    imgs.map((i, ind) => (
                        <img key={ind} srcSet={i} className={`${ind == currentImg ? "translate-x-0 w-full" : "translate-x-full w-0"} object-cover transition-all aspect-[16/9]`}/>
                    ))
                }
            </div>
        </div>
        <div>
        <button onClick={() => handleCarousel(false)} className='hover:bg-black hover:text-white border-black border mx-2 py-2 px-4 rounded-lg'>left</button>
        <button onClick={() => handleCarousel(true)} className='hover:bg-black hover:text-white border-black border mx-2 py-2 px-4 rounded-lg'>right</button>
        </div>

    </div>
  )
}

export default Carousel
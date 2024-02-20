import React from 'react'

const Subscribe = () => {
  return (
    <section className='containery container1 space-y-2'>
        <h3 className='text-center'>CONTACT US</h3>
      <hr className="w-[100px] mx-auto bg-slate-900 h-[2px] rounded-lg" />
        <div className='flex w-[400px] items-center justify-center border border-black min-w-fit mx-auto'>
            <input type="text" placeholder='Enter your email' className='w-full p-4 outline-none' />
            <button className='p-4 bg-slate-900 text-white h-full'>Subscribe</button>
        </div>
    </section>
  )
}

export default Subscribe
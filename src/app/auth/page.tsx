"use client"
import { useAdmin } from "@/context/AdminSlice";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const Page = () => {

    const nav = useRouter()
    const {setAdmin} = useAdmin()

    const [adminDet, setAdminDet] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setAdminDet({...adminDet, [name]: value})
    }

    const handleSubmit = async (e : ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const result = await fetch('/api/auth', {
                method: "POST",
                body: JSON.stringify(adminDet)
            })
            const res = await result.json()
            if(res.success){
                setAdmin(true)
                nav.push('/auth/products')
            } else{
                setAdmin(false)
                nav.push('/error')
            }
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center py-12 p-4 gap-4 w-[500px] max-w-full">
        <h2 className="text-center text-3xl">Admin Login</h2>
        <div className="flex items-center text-2xl w-full">
          <i className="fi fi-sr-user p-4" />
          <input name="username" required value={adminDet.username} onChange={handleChange} type="text" placeholder="Enter Username" className="w-full outline-none border-b-2 p-1" />
        </div>
        <div className="flex items-center text-2xl w-full">
          <i className="fi fi-sr-lock p-4" />
          <input name="password" required value={adminDet.password} onChange={handleChange} type="password" placeholder="Enter Password" className="w-full outline-none border-b-2 p-1" />
        </div>
        <button type="submit" className="btn bg-blue-500 text-white hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
};

export default Page;

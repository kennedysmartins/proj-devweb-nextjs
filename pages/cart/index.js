"use client"
import Appbar from "@/app/components/Appbar"
import Bottom from "@/app/components/Bottom"
import Drawer from "@/app/components/Drawer"
import { CartContext } from "@/app/contexts/CartContext"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import React, { useContext, useEffect, useState } from "react"
import "tailwindcss/tailwind.css"

const CartPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState()
  const { cartItems, removeFromCart } = useContext(CartContext)

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const { data: session } = useSession()
  const router = useRouter()

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      Produtos
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img
              src={item.image}
              width={250}
              height={250}
              alt="Picture of the author"
            />
            <p>{item.title}</p>
            <p>{item.description} </p>
            <p>{item.quantity} </p>
            <button
              onClick={removeFromCart(item.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Remove From Cart
            </button>
          </li>
        ))}
      </ul>
      <Bottom></Bottom>
    </main>
  )
}
export default CartPage

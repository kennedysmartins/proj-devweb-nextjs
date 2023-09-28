import React, { createContext, useEffect, useState } from "react"

const CART_STORAGE_KEY = "cart"
const getStoredCart = () => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY)
    return storedCart ? JSON.parse(storedCart) : []
  }
  return []
}

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getStoredCart())

  const saveToLocalStorage = (cart) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems]
      const existingCartItemIndex = updatedCartItems.findIndex(
        (item) => item.id === product.id
      )
      if (existingCartItemIndex != -1) {
        updatedCartItems[existingCartItemIndex].quantity += 1
      } else {
        updatedCartItems.push({ ...product, quantity: 1 })
      }

      saveToLocalStorage(updatedCartItems)
      return updatedCartItems
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (item) => item.id !== productId
      )
      saveToLocalStorage(updatedCartItems)
      return updatedCartItems
    })
  }

  useEffect(() => {
    saveToLocalStorage(cartItems)
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

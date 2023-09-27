'use client'
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, {useEffect, useState} from 'react';
import 'tailwindcss/tailwind.css'
import { fetchProducts } from '@/app/utils/api';
import Image from "next/image"

const Products = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts()
      setProducts(productsData)
    }
    getProducts()
  }, [])

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const { data: session } = useSession();
  const router = useRouter();


  
  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
      Produtos
      <h1>Produtos da Loja Virtual</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              width={250}
              height={250}
              alt="Picture of the author"
            />
            <p className="bg-red-500">{product.title}</p>
            <p>{product.description} </p>
            <p>{product.category} </p>
            <button>Add Cart</button>
          </li>
        ))}
      </ul>
      <Bottom></Bottom>
    </main>
  )






}
export default Products;
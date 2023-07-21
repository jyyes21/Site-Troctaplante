import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Acceuil from '@/components/Acceuil'


export default function Home() {
  return (
    <div className=' pt-3 flex flex-col h-screen justify-between'>
      <Header />
      <Acceuil />
      <Footer />
    </div>
    
  )
}

'use client'

import { Hero, Catalogue, Navbar, Footer } from '@/components'
import Link from "next/link";

export default function page() {

  return (
    <main className="overflow-hidden">
      <Hero />
      {/* <Catalogue /> */}
      <Footer />
    </main >
  )
}

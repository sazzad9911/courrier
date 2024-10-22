"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Footer() {
  const params=usePathname()
  if(params.includes("/dashboard")) return null
  return (
    <div>
      Footer
    </div>
  )
}

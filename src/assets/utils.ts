// @ts-nocheck

import { useState } from 'react'

export const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible((prevState) => !prevState)
  }

  const inputType = visible ? 'text' : 'password'

  return { inputType, visible, toggleVisibility }
}

export const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const extractNum = (value: string) => {
  return Number(value.match(/\d+/g))
}

export const getRandomProducts = (productsArray, numOfProducts) => {
  const shuffled = [...productsArray] // Create a shallow copy to avoid mutating the original array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, numOfProducts)
}

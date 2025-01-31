"use client"

import { createContext, useContext, useEffect, useState } from "react"

const initialState = {
  theme: "dark",
  setTheme: () => null,
}

const ThemeProviderContext = createContext(initialState)

export function ThemeProvider({ children, defaultTheme = "dark" }) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.className = savedTheme
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.documentElement.className = theme
  }, [theme])

  return <ThemeProviderContext.Provider value={{ theme, setTheme }}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}


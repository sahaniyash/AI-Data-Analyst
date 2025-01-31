import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Data Analyst",
  description: "Advanced Machine Learning Platform: Analyze, Train, and Deploy with Ease",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen bg-background text-foreground`}>
        <ThemeProvider>
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


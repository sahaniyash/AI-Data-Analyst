"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, BarChart2, Database, Brain, TrendingUp, LineChart } from "lucide-react"

const mainNavItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Data Management", href: "/data", icon: Database },
  { name: "Preprocessing", href: "/preprocess", icon: BarChart2 },
  { name: "Model Training", href: "/model", icon: Brain },
]

const analysisNavItems = [
  { name: "Model Comparison", href: "/model-comparison", icon: TrendingUp },
  { name: "Graphs", href: "/graphs", icon: LineChart },
]

const recentProjects = [
  { name: "Customer Churn Analysis", href: "/projects/churn", date: "2 hours ago" },
  { name: "Sales Prediction", href: "/projects/sales", date: "5 hours ago" },
  { name: "Market Segmentation", href: "/projects/segment", date: "1 day ago" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "flex flex-col bg-card border-r border-border transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      {/* Rest of the component remains the same */}
    </div>
  )
}


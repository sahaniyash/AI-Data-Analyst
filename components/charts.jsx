"use client"

import { ResponsiveContainer } from "recharts"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

export function AreaChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {/* Chart content remains the same */}
    </ResponsiveContainer>
  )
}

export function BarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {/* Chart content remains the same */}
    </ResponsiveContainer>
  )
}

export function PieChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {/* Chart content remains the same */}
    </ResponsiveContainer>
  )
}

export function ScatterPlot({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {/* Chart content remains the same */}
    </ResponsiveContainer>
  )
}

export function LineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {/* Chart content remains the same */}
    </ResponsiveContainer>
  )
}

export function HeatMap({ data }) {
  const uniqueX = Array.from(new Set(data.map((item) => item.x)))
  const uniqueY = Array.from(new Set(data.map((item) => item.y)))

  return (
    <ResponsiveContainer width="100%" height="100%">
      {/* Chart content remains the same */}
    </ResponsiveContainer>
  )
}


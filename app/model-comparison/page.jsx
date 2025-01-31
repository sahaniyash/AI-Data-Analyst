"use client"

import { useState } from "react"

const modelData = [
  { name: "Random Forest", accuracy: 0.92, precision: 0.9, recall: 0.94, f1Score: 0.92 },
  { name: "Logistic Regression", accuracy: 0.88, precision: 0.87, recall: 0.89, f1Score: 0.88 },
  { name: "SVM", accuracy: 0.9, precision: 0.89, recall: 0.91, f1Score: 0.9 },
  { name: "Neural Network", accuracy: 0.93, precision: 0.92, recall: 0.94, f1Score: 0.93 },
]

export default function ModelComparison() {
  const [selectedMetric, setSelectedMetric] = useState("accuracy")

  const chartData = modelData.map((model) => ({
    name: model.name,
    value: model[selectedMetric],
  }))

  return <div className="space-y-6">{/* Component content remains the same */}</div>
}


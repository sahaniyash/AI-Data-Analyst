"use client"

import { useState } from "react"

export default function Preprocess() {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (event) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile.name)
    }
  }

  return <div className="container mx-auto px-4 py-8">{/* Rest of the component remains the same */}</div>
}


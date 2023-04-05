import './styles.css'
import React from 'react'

export function Loading({ isLoading }) {
  return (
    <div className="loading-container">
      {isLoading && <div className="loader"></div>}
    </div>
  )
}

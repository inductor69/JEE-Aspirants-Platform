import React from 'react'

const FormError = ({ error }) => {
  return (
    error && (
      <p className="text-red-500 text-xs italic pb-1">{error}</p>
    )) || null
}

export default FormError

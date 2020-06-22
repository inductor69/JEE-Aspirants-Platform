import React from 'react'
import { FulfillingSquareSpinner } from 'react-epic-spinners'

const Loader = () => (
  <div className="top-auto left-auto mx-auto">
    <FulfillingSquareSpinner
      color="red"
      size={150} />
  </div>
)

export default Loader

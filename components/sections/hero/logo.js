import React from 'react'

const Logo = () => (
  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
    <div className="flex items-center justify-between w-full md:w-auto">
      <a href="/">
        <img className="h-8 w-auto sm:h-10" src="/static/images/logo.png" alt="XYZ Ltd. " />
      </a>
    </div>
  </div>
)

export default Logo

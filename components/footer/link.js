import React from 'react'

const Link = ({ t, u }) => (
  <li>
    <a href={u} title={t} className="text-gray-600 hover:text-gray-800">{ t }</a>
  </li>
)

export default Link

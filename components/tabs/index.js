import React, { useState } from 'react'

const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(0)

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap mb-20">
          { tabs.map((t, i) => {
            const aClass = active === i ? 'bg-gray-100 border-indigo-500 text-indigo-500' : 'hover:text-gray-900 border-gray-200'

            return (
              <div key={i} onClick={() => setActive(i)} className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${aClass} tracking-wider rounded-t`}>
                { t.icon } { t.name }
              </div>
            )
          })
          }
        </div>
        { tabs[active].content }
      </div>
    </section>
  )
}

export default Tabs

import React from 'react'

const TabContent = ({ title, desc, cont }) => (
  <div className="text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">{ title }</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">{ desc }</p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        { cont.map((c, i) => (
          <div key={i} className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-200 rounded flex p-4 h-full items-center">
              { c.icon }
              <span className="title-font font-medium"><a href={c.url}>{ c.txt }</a></span>
            </div>
          </div>
        ))}
      </div>
      {/* action button */}
    </div>
  </div>
)

export default TabContent

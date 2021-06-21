import React from 'react'
import {FiPlus} from 'react-icons/fi';
const Section = ({title, description, right = null, handlerClick =null, children}) => {
  return (
    <div className="relative w-full p-4 mb-2 rounded-lg bg-white border border-grey-100 dark:bg-grey-895 dark:border-grey-890">

   {
      handlerClick && (
        <div className="absolute right-0 top-1 mr-3">
          <button className="btn btn-circle btn-circle-lg bg-blue-500 hover:bg-blue-600 text-white shadow-lg">
            <FiPlus className="stroke-current text-white" size={20} />
          </button>
        </div>
      )
    }



      <div className="flex flex-row items-center justify-between mb-6">
        <div className="flex flex-col">



          <div className="text-sm font-light text-grey-500">{title}</div>
          <div className="text-sm font-bold">{description}</div>
        </div>
        {right}
      </div>
      {children}
    </div>
  )
}

export default Section

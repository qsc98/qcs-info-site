import React from 'react'

const ButtonOutline = ({ children }) => {
  return (
    <button className="hover:shadow-green rounded-l-full rounded-r-full border border-green-500 bg-white-500 px-5 py-2 font-medium capitalize tracking-wide text-green-500 outline-none transition-all hover:bg-green-500 hover:text-white-500 sm:px-8">
      {' '}
      {children}
    </button>
  )
}

export default ButtonOutline

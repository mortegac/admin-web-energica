import React from 'react'
import {Link} from 'react-router-dom'
import ForgotPassword from '../components/sample-forms/forgot-password'
const ForgotPasswordPage = () => {

  return (
    <>
      <div className="w-full flex flex-row h-screen overflow-hidden">
      <div className="hidden lg:flex lg:flex-col w-2/3 items-center justify-center bg-auto bg-no-repeat bg-start bg-gradient-to-r from-blue-500 to-blue-700 ">
        
          <img
            className="object-contain w-auto mb-8 w-2/4"
            src="/images/01.png"
            alt="Energica City"
            />
        </div>
        <div className="w-full lg:w-1/3 bg-white flex flex-col items-start justify-center p-4 lg:px-24">
          <div className="flex flex-col w-full mb-4">
             <img
                className="object-contain h-32 mb-8 w-2/4"
                src="/logos/logo_energica.svg"
                alt="Energica City"
             />
            <div className="text-xl font-bold mb-2">
              Ingrese sus datos
            </div>
          </div>
          <ForgotPassword />
          <div className="w-full mt-4">
            <span>
              <Link className="link" to="/">
                {'< Volver'}
              </Link>
            </span>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default ForgotPasswordPage


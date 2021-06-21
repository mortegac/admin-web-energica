import React from 'react'
import Layout from '../layouts/centered'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full max-w-xl text-center">
        <img
          className="object-contain w-auto h-64 mb-8"
          src="/pages/error-page/illustration.svg"
          alt="svg"
        />
        <h1 className="text-6xl text-blue-500 mb-4">404</h1>

        <div className="mb-8 text-center text-grey-500">
          We're sorry. The page you requested could not be found. Please go back
          to the homepage or contact us at support@dashboard.com
        </div>
        <div className="flex w-full">
          <Link
            to="/"
            className="btn btn-lg btn-rounded btn-block bg-blue-500 hover:bg-blue-600 text-white">
            Go back
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default ErrorPage

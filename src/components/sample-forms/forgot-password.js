import React, {useState} from 'react'
import Validation from '../forms/validation'
import Alert from '../alerts'

const ForgotPassword = ({message = null}) => {
  const [data, onSubmit] = useState(null)
  let items = [
    {
      label: 'Email',
      error: {required: 'Ingrese un email Válido'},
      name: 'email',
      type: 'email',
      placeholder: 'Ingrese su email'
    },
  ]
  return (
    <>
      <div className="flex flex-col w-full mb-4">
        {data && message && (
          <div className="w-full mb-4">
            <Alert
              color="bg-transparent border-green-500 text-green-500"
              borderLeft
              raised>
              {message}
            </Alert>
          </div>
        )}
        <Validation items={items} onSubmit={onSubmit} />
      </div>
    </>
  )
}

export default ForgotPassword

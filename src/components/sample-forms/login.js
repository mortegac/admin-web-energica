import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Amplify, { Auth } from 'aws-amplify';

import Validation from '../forms/validation';
import Alert from '../alerts';
import config from '../../aws-exports';
Amplify.configure(config);

const Login = ({message = null}) => {
  const history = useHistory();
  console.log('--history--',history)

  const [onSubmit, setOnSubmit] = useState(null)
  const [errorAuth, setErrorAuth] = useState('');
  let items = [
    {
      label: 'Email',
      error: {required: 'Ingrese un email Válido'},
      name: 'email',
      type: 'email',
      placeholder: 'Ingrese su email'
    },
    {
      label: 'Clave',
      error: {
        required: 'Password is required',
        minLength: {
          value: 4,
          message: 'Your password should have at least 4 characters'
        },
        maxLength: {
          value: 8,
          message: 'Your password should have no more than 8 characters'
        }
      },
      name: 'password',
      type: 'password',
      placeholder: 'Ingrese su clave'
    },
  ]

  // const requestCode = () =>{
  //   // Auth.resendSignUp(user ? user.username : email)
  // }
  const handlerSubmit = async (data) => {
    const {email, password} = data;

    setOnSubmit(data)
    try {



      //REGISTRY
      // const signUpResponse = await Auth.signUp({
      //   username: email,
      //   password,
      //   attributes: {
      //     name: 'Manu',
      //     email: email,
      //   },
      // });
      // console.log('--signUpResponse-', signUpResponse);

      // setErrorAuth(signUpResponse.userConfirmed);



      const user = (email && password) ?
        await Auth.signIn({
          username: email,
          password,
        })
        : setErrorAuth('Datos incorrectos')


      // const user = await Auth.signIn({
      //   username: email,
      //   password,
      // })

      user.attributes.sub && history.push('inicio')


      // console.log('--user-cognito--', user.attributes);

      // user.attributes.sub && redirect('Home');

      // attributes:
      // email: "mortega@apgca.cl"
      // email_verified: true
      // sub:"d8d2ff8a-5889-4796-9c6f-e40e51e073ab"

      //

    } catch (error) {

      // if(error.hasOwnProperty('message')){

        // const msg = errorDictionary[error.code].message && errorDictionary['0'].message;
        setErrorAuth(error)
        console.log('--error-AUTH--', error)


      // }else{
        // setErrorAuth('Debe ingresar los datos para continuar');
      // }
      // console.log('--ERROR--', error.message);
      // console.log('--ERROR--', error.code);

    }

  };


  useEffect(() => {

    Auth.currentSession().then( data => data.getAccessToken().getJwtToken() && history.push('inicio') );

  }, []);

  return (
    <>
      <div className="flex flex-col w-full mb-4">
        <span>{JSON.stringify(onSubmit)}</span>
        {onSubmit && message && (
          <div className="w-full mb-4">
            <Alert
              color="bg-transparent border-green-500 text-green-500"
              borderLeft
              raised>
              {message}
            </Alert>
          </div>
        )}
        <Validation items={items} onSubmit={handlerSubmit} />
        <span className="mt-4 w-1/2">{JSON.stringify(errorAuth)}</span>
      </div>
    </>
  )
}

export default Login

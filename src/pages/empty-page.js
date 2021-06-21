import React from 'react';
// import SectionTitle from '../components/section-title';
// import Widget from '../components/widget';
import {Error403} from '../components/httpError';
const EmptyPage = () => (
  <>
    {/* <SectionTitle title="Pages" subtitle="Página no encontrada" /> */}
    {/* <Widget title="Page title" description={<span>Page description</span>}>
      <p>Recurso no encontrado</p> */}
      {/* <Error401/> */}

      <Error403
        title="La ruta solicitada no existe"
				subTitle="El servicio no se encuentra disponible, por favor intente más tarde "
      />

      {/* <Error404/>
      <Error500/> */}
    {/* </Widget> */}
  </>
)
export default EmptyPage;

// import React from 'react';
// import {Link} from 'react-router-dom';

// const EmptyPage = () => {

//   return (
//     <>
//       <div className="w-full flex flex-row h-screen overflow-hidden">
//       <div className="hidden lg:flex lg:flex-col w-2/3 items-center justify-center bg-auto bg-no-repeat bg-start bg-gradient-to-r from-blue-500 to-blue-700 ">

//           <img
//             className="object-contain w-auto mb-8 w-2/4"
//             src="/images/01.png"
//             alt="Energica City"
//             />
//         </div>
//         <div className="w-full lg:w-1/3 bg-white flex flex-col items-start justify-center p-4 lg:px-24">
//           <div className="flex flex-col w-full mb-4">
//              <img
//                 className="object-contain h-32 mb-8 w-2/4"
//                 src="/logos/logo_energica.svg"
//                 alt="Energica City"
//              />
//             <div className="text-xl font-bold mb-2">
//               Página no encontrada
//             </div>
//           </div>

//           <div className="w-full mt-4">
//             <span>
//               <Link className="link" to="/">
//                 {'< Ir al inicio'}
//               </Link>
//             </span>
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }

// export default EmptyPage


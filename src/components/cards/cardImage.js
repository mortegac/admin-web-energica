import React from 'react';
import {FiStar, FiCheck} from 'react-icons/fi'

const CardImage = ({title}) => {

  return(
    <div className="overflow-hidden rounded border bg-white shadow mr-4 mt-4" style={{minWidth: '30%'}}>
        <div className="relative">
          <div className="h-48 bg-cover bg-no-repeat bg-center"
            style={{backgroundImage: 'url(https://picsum.photos/245/245)'}}
            >
          </div>
          <div
          style={{backgroundColor: 'rgba(0,0,0,0.6)'}}
          className="absolute w-full bottom-0 text-sm px-2 py-1 text-white">
             <div className="flex flex-row items-center justify-between space-x-1">
              <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded btn-icon">
                <FiStar className="stroke-current mr-2" />
                <span>EDITAR</span>
              </button>
              <button className="btn btn-circle bg-green-400 hover:bg-green-600 text-white">
                <FiCheck className="stroke-current"  size={20}/>
              </button>

            </div>
          </div>

        </div>
        <div className="p-3">
          <h3 className="mr-10 text-sm truncate-2nd">
            <a className="hover:text-blue-500">{title}</a>
          </h3>
          <div className="flex items-start justify-between">
            <p className="text-xs text-gray-500">lorem ipsum sdsdsdsdsdsdqkhajkshkjhKSajshkjaHSKJHshk</p>
            <button className="outline text-xs text-gray-500 hover:text-blue-500" title="Bookmark this ad"><i className="far fa-bookmark"></i></button>
          </div>

        </div>
    </div>
  );
};

export default CardImage;

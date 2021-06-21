import React, {useState} from 'react'
import {FiGrid, FiMenu} from 'react-icons/fi'
import Section from '../components/dashboard/section';
import SectionTitle from '../components/dashboard/section-title';
import CardImage from '../components/cards/cardImage';
import List5 from '../components/lists/list-5';
const lists = [
  {
    "title": "TITULO NOTICIA",
    "sentence": "Doloribus non est reiciendis consequatur.",
    "description": "Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.",
    "number": 10,
    "img": "/images/faces/m1.png",
    "timeago": "a few seconds ago"
  },
  {
    "title": "TITULO NOTICIA",
    "sentence": "Commodi nihil labore voluptatem eos.",
    "description": "Officia deleniti officiis sequi beatae eum aut cum illum architecto.",
    "number": 4,
    "img": "/images/faces/m1.png",
    "timeago": "a day ago"
  },
  {
    "title": "TITULO NOTICIA",
    "sentence": "Vero facilis cupiditate atque illum.",
    "description": "Consequatur libero magnam impedit repudiandae quo minima reprehenderit eos et.",
    "number": 5,
    "img": "/images/faces/m1.png",
    "timeago": "2 days ago"
  },
  {
    "title": "TITULO NOTICIA",
    "sentence": "Perferendis dolor eveniet est in.",
    "description": "Ut nihil quia omnis aperiam velit dolorem numquam error perferendis.",
    "number": 7,
    "img": "/images/faces/m1.png",
    "timeago": "3 days ago"
  },
  {
    "title": "TITULO NOTICIA",
    "sentence": "Doloribus non est reiciendis consequatur.",
    "description": "Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.",
    "number": 10,
    "img": "/images/faces/m1.png",
    "timeago": "a few seconds ago"
  },
  {
    "title": "TITULO NOTICIA",
    "sentence": "Commodi nihil labore voluptatem eos.",
    "description": "Officia deleniti officiis sequi beatae eum aut cum illum architecto.",
    "number": 4,
    "img": "/images/faces/m1.png",
    "timeago": "a day ago"
  },
  {
    "title": "TITULO NOTICIA",
    "sentence": "Vero facilis cupiditate atque illum.",
    "description": "Consequatur libero magnam impedit repudiandae quo minima reprehenderit eos et.",
    "number": 5,
    "img": "/images/faces/m1.png",
    "timeago": "2 days ago"
  },
  {
    "title": "TITULO NOTICIA",
    "sentence": "Perferendis dolor eveniet est in.",
    "description": "Ut nihil quia omnis aperiam velit dolorem numquam error perferendis.",
    "number": 7,
    "img": "/images/faces/m1.png",
    "timeago": "3 days ago"
  },
  {
    "title": "TITULO NOTICIA",
    "sentence": "Doloribus non est reiciendis consequatur.",
    "description": "Voluptatem velit et consectetur incidunt vero officiis commodi soluta iure.",
    "number": 10,
    "img": "/images/faces/m1.png",
    "timeago": "a few seconds ago"
  },
  {
    "title": "TITULO NOTICIA",
    "sentence": "Commodi nihil labore voluptatem eos.",
    "description": "Officia deleniti officiis sequi beatae eum aut cum illum architecto.",
    "number": 4,
    "img": "/images/faces/m1.png",
    "timeago": "a day ago"
  },
  {
    "title": "TITULO NOTICIA",
    "sentence": "Vero facilis cupiditate atque illum.",
    "description": "Consequatur libero magnam impedit repudiandae quo minima reprehenderit eos et.",
    "number": 5,
    "img": "/images/faces/m1.png",
    "timeago": "2 days ago"
  },
  {
    "title": "TITULO NOTICIA",
    "sentence": "Perferendis dolor eveniet est in.",
    "description": "Ut nihil quia omnis aperiam velit dolorem numquam error perferendis.",
    "number": 7,
    "img": "/images/faces/m1.png",
    "timeago": "3 days ago"
  }
];


const NewsPage = () => {
  const [grid, setGrid] = useState(true)
  return (
    <>
      <SectionTitle title="Sección" subtitle="Administración de Noticias"/>
        {/* lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4 */}
      <div className="w-full">
        <Section
          title=""
          description={<span></span>}
        >
          {/* <div className="flex flex-col w-full">  lg:overflow-hidden */}
          <div className="flex flex-col items-center justify-center space-x-1">
            <div className="overflow-x-scroll">
              <div className="flex flex-row w-full mb-4">

                <div className="w-1/3">
                  <div className="flex flex-col items-center justify-center space-x-2">
                    <div className="text-2xl">{'45'}</div>
                    <div className="text-sm text-grey-500">{'Vigentes'}</div>
                  </div>
                </div>

                <div className="w-1/3">
                  <div className="flex flex-col items-center justify-center space-x-2">
                    <div className="text-2xl text-blue-700 font-black">{'22'}</div>
                    <div className="text-sm text-blue-700 font-black">{'Pendientes'}</div>
                  </div>
                </div>

                 <div className="w-1/3">
                  <div className="flex flex-col items-center justify-center space-x-2">
                    <div className="text-2xl">{'20'}</div>
                    <div className="text-sm text-grey-500">{'Ultimas ingresadas'}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Section>

        <Section
        title="Noticias Pendientes"
        description={<span>Listado de Noticias</span>}
        handlerClick={ ()=>{} }
        >
        <div className="flex flex-row items-center justify-center space-x-1">
          <button
            className="btn btn-circle bg-transparent text-grey-500"
            onClick={() => setGrid(false)}>
            <FiGrid className="stroke-current" size={20} />
          </button>
          <button
            className="btn btn-circle bg-transparent text-grey-500"
            onClick={() => setGrid(true)}>
            <FiMenu className="stroke-current" size={20} />
          </button>
        </div>
        <div className="flex flex-row justify-between flex-wrap">

          {/* <div className="overflow-x-scroll lg:overflow-hidden"> */}

            { grid ?
              (
                <List5 items={lists} />
              )
              :(
                <>
                  <CardImage title='TITULO NOTICIA'/>
                  <CardImage title='TITULO NOTICIA'/>
                  <CardImage title='TITULO NOTICIA'/>
                  <CardImage title='TITULO NOTICIA'/>
                  <CardImage title='TITULO NOTICIA'/>
                  <CardImage title='TITULO NOTICIA'/>
                  <CardImage title='TITULO NOTICIA'/>
                </>

              )}


          {/* </div> */}
        </div>
      </Section>
      </div>

    </>
  );
};
export default NewsPage;

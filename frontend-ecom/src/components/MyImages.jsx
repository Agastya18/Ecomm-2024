import React from 'react'
import { useState } from 'react'
const MyImages = ({imgs=[" "]}) => {
    //console.log(imgs)
    const [mainImg, setMainImg] = useState(imgs[0])
  return (
    <div className="lg:flex lg:items-start">
          <div className="lg:order-2 lg:ml-5">
            <div className="max-w-xl overflow-hidden rounded-lg md:ml-36 ">
              <img
                className=" h-full md:h-96  w-full max-w-full md:object-cover "
                src={mainImg}
                alt=""
              />
            </div>
          </div>
          <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0 ">
            <div className="flex flex-row items-start lg:flex-col">
               {
                imgs.map((currImg,index)=>(
                  <button
                  key={index}
                type="button"
                className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                onClick={()=>setMainImg(currImg)}
              >
                <img
                  className="h-full w-full object-cover"
                  src={currImg}
                  alt=""
                />
                
              </button>
                ))
               }
              {/* <button
                type="button"
                className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
              >
                <img
                  className="h-full w-full object-cover"
                  src={imgs[1]}
                  alt=""
                />
              </button>
              <button
                type="button"
                className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
              >
                <img
                  className="h-full w-full object-cover"
                  src={imgs[2]}
                  alt=""
                />
              </button>
              <button
                type="button"
                className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
              >
                <img
                  className="h-full w-full object-cover"
                  src={imgs[3]}
                  alt=""
                />
              </button> */}
            </div>
          </div>
        </div>
  )
}

export default MyImages
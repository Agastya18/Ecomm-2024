

const OrderCard = ({name,images,price,countInStock,rating,brand,category,_id,qty}) => {
  return (
    <div className=" bg-gray-100 rounded-md mt-6 md:mt-3 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
              <div className="w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  // src="https://i.ibb.co/s6snNx0/Rectangle-17.png"
                  src={images[0]}
                  alt="dress"
                />
                <img
                  className="w-full md:hidden"
                  // src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png"
                  src={images[0]}
                  alt="dress"
                />
              </div>
              <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">
                   {name}
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2 ">
                    <p className="text-sm  leading-none text-gray-800">
                      <span className=" text-gray-900">
                        Brand:{" "}
                      </span>{" "}
                      {brand}
                    </p>
                   
                    <p className="text-sm  leading-none text-gray-800">
                      <span className=" text-gray-900">
                        Product Id:{" "}
                      </span>{" "}
                      {_id}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  
                  <div className="text-base  xl:text-lg leading-6 text-gray-800 ml-8">
                  <p className=" font-semibold">Qauntity</p>
                  <p className=" ml-5 mt-2">{qty}</p>
                  </div>
                  
                  <div className="text-base  xl:text-lg leading-6 text-gray-800 ">
                  <p className=" font-semibold">Price</p>
                  <p className=" mr-5 mt-2">${price}</p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default OrderCard
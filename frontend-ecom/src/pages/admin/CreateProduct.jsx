import AdminLayout from '@/components/adminComp/AdminLayout'
import { FaRegImages } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
const CreateProduct = () => {
  return (
    <>
        <AdminLayout>
      
       
          <div className=" mt-2 mx-auto max-w-md w-full space-y-8 p-2 bg-slate-50 rounded-xl shadow-lg z-10">
            <div className="grid  gap-8 grid-cols-1">
              <div className="flex flex-col ">
                <div className="flex flex-col sm:flex-row items-center bg-blue-200 rounded-md">
                  <h2 className="font-semibold  md:ml-36 text-xl ">Add New Product</h2>
                  <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
                </div>
                <div className="mt-5">
                  <div className="form">
                    <div className="md:space-y-2 mb-3">
                      
                      <div className="flex items-center py-6">
                        <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                        <FaRegImages size={'35px'} className='ml-1 mt-1' />
                        </div>
                        <label className="text-gray-600  mr-3 ">Image:</label>
                        <div>
        
        <>
 

  <span className="sr-only  ">Choose profile photo</span>
  <input
    type="file"
    accept=".jpg, .jpeg, .png"
    multiple="true"
   
    className="  block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold  file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 "
  />
</>

                     

        </div>
                      </div>
                    </div>
                    <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                      <div className="mb-3 space-y-2 w-full text-xs">
                        <label className="font-semibold text-gray-600 py-2">Product  Name <abbr title="required">*</abbr></label>
                        <input placeholder="Company Name" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name" />
                        <p className="text-red text-xs hidden">Please fill out this field.</p>
                      </div>
                      <div className="mb-3 space-y-2 w-full text-xs">
                        <label className="font-semibold text-gray-600 py-2">Product Brand <abbr title="required">*</abbr></label>
                        <input placeholder="Email ID" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name" />
                        <p className="text-red text-xs hidden">Please fill out this field.</p>
                      </div>
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className=" font-semibold text-gray-600 py-2">Category</label>
                      <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                        <div className="flex">
                          <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark  w-12 h-10 bg-blue-300 justify-center   text-xl rounded-lg text-white">
                          <MdCategory />
                          </span>
                        </div>
                        <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px  border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://" />
                      </div>
                    </div>
                    <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                      <div className="w-full flex flex-col mb-3">
                        <label className="font-semibold text-gray-600 py-2">Price</label>
                        <input placeholder="Address" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="integration[street_address]" id="integration_street_address" />
                      </div>
                      <div className="w-full flex flex-col mb-3">
                        <label className="font-semibold text-gray-600 py-2">Stock<abbr title="required">*</abbr></label>
                        <select className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" name="integration[city_id]" id="integration_city_id">
                          <option value>Seleted location</option>
                          <option value>Cochin,KL</option>
                          <option value>Mumbai,MH</option>
                          <option value>Bangalore,KA</option>
                        </select>
                        <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                      </div>
                    </div>
                    <div className="flex-auto w-full mb-1 text-xs space-y-2">
                      <label className="font-semibold text-gray-600 py-2">Description</label>
                      <textarea required name="message" id className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Enter your comapny info" spellCheck="false" defaultValue={""} />
                      
                    </div>
                    <p className="text-xs text-red-500 text-right my-3">Required fields are marked with an
                      asterisk <abbr title="Required field">*</abbr></p>
                    <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                      <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"> back </button>
                      <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </AdminLayout>
        
    </>
  )
}

export default CreateProduct
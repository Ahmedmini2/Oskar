import arrow2 from "../../assets/arrow2.svg";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsDiscord, BsFacebook, BsInstagram } from "react-icons/bs";

function EcommersContact() {
  return (
   
      <div className="flex  justify-center items-center ">
        <div className="w-full flex flex-col  sm:flex-row sm:justify-between xs:m-5 max-w-5xl  rounded-xl shadow-lg bg-white">
          {/* inside card */}

          <div className=" relative sm:w-[40%] bg-[#48B0E4] rounded-tr-lg rounded-bl-lg rounded-tl-lg  p-8 m-2 overflow-hidden">
            <div className="absolute w-60 h-60 bg-[#364255] rounded-full -right-20 -bottom-20 z-10">
              <div className="absolute w-28 h-28 bg-gray-600/30 -left-5   z-20  rounded-full "></div>
            </div>

            <div className="flex flex-col gap-24 justify-between  text-white  ">
              <div className="grid gap-3 my-4">
                <h1 className="font-semibold text-3xl">Ecommers Contact</h1>
                <h4 className="text-gray-200">John Doe </h4>
              </div>
              <div className="my-4 grid gap-12">
                <div className=" flex gap-6">
                  <AiOutlinePhone className="text-xl" />
                  <span className=" font-thin text-sm">+971 56 20 86 893</span>
                </div>
                <div className="flex gap-6">
                  <AiOutlineMail className="text-xl" />
                  <span className=" font-thin text-md">anar@anargmail.com</span>
                </div>
                <div className="flex gap-6">
                  <BiTimeFive className="text-xl" />
                  <span className=" font-thin text-md">
                    mon-sat, 9 am to 8 pm
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6 my-5 text-2xl">
                  
                  
                  <BsInstagram color="black" 
                  onMouseOver={({target})=>target.style.color="white"}
                  onMouseOut={({target})=>target.style.color="black"}/>
                  <BsDiscord color="black"
                  onMouseOver={({target})=>target.style.color="white"}
                  onMouseOut={({target})=>target.style.color="black"}/>
                  <BsFacebook color="black" 
                  onMouseOver={({target})=>target.style.color="white"}
                  onMouseOut={({target})=>target.style.color="black"}
                   />
                </div>
              </div>
            </div>
          </div>

          {/* card end */}
          <div className=" sm:w-[60%]  ">
            <form className=" pt-8 pr-8 pl-8  mt-8">
              <div className="grid sm:grid-cols-2 sm:gap-6">
                <div className="relative w-full mb-6 ">
                  <label className="font-medium absolute text-xs text-gray-600 bottom-9 ">
                    First Name
                  </label>

                  <input
                    type="text"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-100 "
                    placeholder=" "
                    required
                  />
                </div>
                <div className="relative z-0 w-full mb-6 ">
                  <label className="font-medium absolute text-xs text-gray-600 bottom-9 ">
                    Last Name
                  </label>

                  <input
                    type="text"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-100 "
                    placeholder=" "
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <label className="font-medium absolute text-xs text-gray-600 bottom-9 ">
                    Email Id
                  </label>

                  <input
                    type="text"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-100 "
                    placeholder=" "
                    required
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label className="font-medium absolute text-xs text-gray-600 bottom-9 ">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-100 "
                    placeholder=" "
                    required
                  />
                </div>
              </div>
              <div className="relative flex flex-row items-start justify-start mt-10 gap-8 w-full mb-6 ">
                <label className="font-bold absolute text-xs  text-gray-600 bottom-9 ">
                  Select Subject?
                </label>
                <div className=" flex items-center ">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded-full checked:bg-[#48B0E4]  "
                  />
                  <label className="ml-2  text-xs font-medium text-gray-500 ">
                    General Inquiry
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded-full checked:bg-[#48B0E4] "
                  />
                  <label className="ml-2 text-xs font-medium text-gray-500 ">
                    General Inquiry
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded-full checked:bg-[#48B0E4] "
                  />
                  <label className="ml-2 text-xs font-medium text-gray-500 ">
                    General Inquiry
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded-full checked:bg-[#48B0E4] "
                  />
                  <label className="ml-2 text-xs font-medium text-gray-500 ">
                    General Inquiry
                  </label>
                </div>
              </div>

              <div className="relative  w-full mb-6 pt-8 ">
                <label className="font-medium absolute text-xs text-gray-400 bottom-9 ">
                  Message
                </label>
                <input
                  type="emial"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-100 "
                  placeholder=" Write your message.."
                  required
                />
              </div>
              <div className="flex items-end justify-end">
                <button
                  type="submit"
                  className="text-white outline_primary_btn font-medium  text-xs w-full mt-7 md:w-2/6 px-5 py-2.5 text-center "
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="flex  xs:item-start xs:justify-start sm:items-end sm:justify-end mr-24 mb-0 ">
              <img src={arrow2} alt="" className="h-52 p-0" />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default EcommersContact;

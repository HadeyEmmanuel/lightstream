import Navbar from "../../components/Navbar"
import Swiper from "../../components/Swiper"
import { CircleCheck } from "lucide-react";
import slides from "../../movies.json";
const homescreen = () => {
  return (
    <div className='h-screen text-white relative'>
      <Navbar/>
          <div className="p-10 max-sm:p-5 bg-[#000A1A] ">
            <Swiper slides={slides}/>
          </div>
          <div className="p-10 flex flex-col items-center justify-center bg-[#000A1A] ">
            <h1 className="font-extrabold font-[playfair] text-6xl max-md:text-5xl  mb-2 ">Stream, Grow, </h1>
            <span className="text-[#FF9815] max-md:text-5xl text-6xl font-[playfair] font-extrabold text-center">Be inspired.</span>
            <p className="mb-3 mt-3 max-md:text-sm font-[lato]">Unlimited Christian movies and TV shows await you.</p>
            <button className="bg-[#FF9815] rounded-md px-3 py-2">Start your 7-days free trial</button>
          </div>
 
			{/* separator */}
      <div className='flex-1 md:text-left bg-theme2 text-center p-10 text-wrap'>
                        <h2 className=' py-5 text-3xl lg:text-5xl font-extrabold mb-4 text-center font-[Playfair Display] '>
                        Join the Light community today!
                        </h2>
                        <p className='text-2xl md:text-3xl   text-center text-wrap font-[Lato]'>
                        Explore our faithful community 
                        </p>
                        <p className='text-lg md:text-2xl  text-center text-wrap font-[Lato]'>
                          Connect with millions of members around the world 
                        </p>
                        <div className=" mt-2  flex justify-center items-center">
                          <button className=" mt-1 mb-10 bg-[#001232] rounded-md px-5 py-3">Get started now</button>
                        </div>
          </div>
          
<div className='h-4 w-full bg-theme1' aria-hidden='true' />
        <div className="bg-[#000A1A]">
{/* 1st section */}
            <div className="flex justify-start px-10 py-10 max-lg:p-10 ">
              <h1 className="font-[inter] font-semibold mb-10 text-3xl  max-lg:font-bold max-lg:mb-5">Pricing</h1>
            </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-[lato] font-semibold mb-10 text-2xl md:text-5xl max-lg:font-bold">Choose a plan that works for you</h1>
          <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-x-10 max-lg:gap-y-5 mb-14 ">
            <div className="card shadow bg-white  pl-2 w-60">
              <div className=" flex flex-col">
                <div className="p-2">
                <h3 className="text-black font-[lato] font-extrabold text-xl">Regular</h3>
                <h3 className="text-black font-[lato] font-bold text-3xl mt-3">N1100/mo</h3>
                <div className="flex mt-3 ">
                <CircleCheck className='size-5 md:size-5 text-[#FAAD07]' />
                <span className="text-black pl-1 font-[lato]">Single device streaming</span>
                </div>
                <div className="flex mt-1 ">
                <CircleCheck className='size-5 md:size-5 text-[#FAAD07]' />
                <span className="text-black pl-1 font-[lato]">Standard streaming</span>
                </div>
                <div className=" mt-10 mb-4 flex justify-center items-center">
					        <button className="bg-[#FF9815] rounded-md px-5 py-1">Start free trial</button>
                </div>
                </div>
              </div>
            </div>
            <div className="card shadow bg-white  pl-2 w-60">
              <div className=" flex flex-col">
                <div className="p-2">
                <h3 className="text-black font-[lato] font-extrabold text-xl">Regular</h3>
                <h3 className="text-black font-[lato] font-bold text-3xl mt-3">N3000/mo</h3>
                <div className="flex mt-3 ">
                <CircleCheck className='size-5 md:size-5 text-[#FAAD07]' />
                <span className="text-black pl-1 font-[lato]">Single device streaming</span>
                </div>
                <div className="flex mt-1 ">
                <CircleCheck className='size-5 md:size-5 text-[#FAAD07]' />
                <span className="text-black pl-1 font-[lato]">Standard streaming</span>
                </div>
                <div className=" mt-10 mb-4 flex justify-center items-center">
					        <button className="bg-[#FF9815] rounded-md px-5 py-1">Start free trial</button>
                </div>
                </div>
              </div>
            </div>
            <div className="card shadow bg-white  pl-2 w-60">
              <div className=" flex flex-col">
                <div className="p-2">
                <h3 className="text-black font-[lato] font-extrabold text-xl">Regular</h3>
                <h3 className="text-black font-[lato] font-bold text-3xl mt-3">N5500/mo</h3>
                <div className="flex mt-3 ">
                <CircleCheck className='size-5 md:size-5 text-[#FAAD07]' />
                <span className="text-black pl-1 font-[lato]">Single device streaming</span>
                </div>
                <div className="flex mt-1 ">
                <CircleCheck className='size-5 md:size-5 text-[#FAAD07]' />
                <span className="text-black pl-1 font-[lato]">Standard streaming</span>
                </div>
                <div className=" mt-10 mb-4 flex justify-center items-center">
					        <button className="bg-[#FF9815] rounded-md px-5 py-1">Start free trial</button>
                </div>  
                </div>
              </div>
            </div>
            </div>
          </div>
          
          <div className='h-6 w-full bg-theme' aria-hidden='true' />
        </div>

        
        <div className='py-10  bg-[#000A1A] text-white'>
                <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                    {/* left side */}
                    <div className='flex-1 '>
                        <div className='pl-5 '>
                            <img src='/kiddies.png' alt='' className='mt-4 ' />
                        </div>
                    </div>
                    {/* right side */}

                    <div className='flex-1 md:text-left text-center px-10 text-wrap'>
                        <h2 className='text-4xl md:text-6xl font-extrabold mb-4 text-center font-[Langar] '>
                            Fun meets faith.
                        </h2>
                        <p className='text-lg md:text-xl text-center text-wrap font-[Lato]'>
                          Dive into the world of wholesome entertainment designed to inspire, educate and delight young minds.
                        </p>

                        <p className=' mt-10 text-sm md:text-base text-center '>
                          Start the adventure today.
                        </p>
                        
                        <div className=" mt-2 mb-4 flex justify-center items-center">
                          <button className="bg-[#FF9815] rounded-md px-5 py-1">Get started now</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
    </div>
  )
}

export default homescreen
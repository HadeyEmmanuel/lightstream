import Navbar from "../../components/Navbar"

const homescreen = () => {
  return (
    <div className='h-screen text-white relative'>
      <Navbar/>
      <div className='absolute top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center -z-10 shimmer' />
    </div>
  )
}

export default homescreen
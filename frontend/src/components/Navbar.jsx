import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
	return (
		<header className='width-full mx-auto flex flex-wrap items-center justify-between px-5 md:px-20  h-20 shadow-2xl bg-[#000A1A]'>
			<div className='flex items-center gap-10 z-50'>
    <Link to={"/"}>
		<img src='/lightstreamYellow.png' alt='logo' className='w-52' />	
    </Link>

				{/* desktop navbar items */}
				
			</div>

      <div className='flex gap-5 items-center z-50 '>
				<div className='hidden  sm:flex max-lg:hidden gap-5 items-center '>
					<Link to='/' className='hover:text-[#FF9815] text-[#F7FFFB]'>
						Home
					</Link>
					<Link to='/' className='hover:text-[#FF9815] text-[#F7FFFB]'>
						About Us
					</Link>
					<Link to='/pricing' className='hover:text-[#FF9815] text-[#F7FFFB]'>
						Pricing
					</Link>
					</div>
					<Link to={"/login"}>
					<button className="border-2 border-[#FF9815] rounded-md py-2 px-3 hover:bg-[#FF9815]" >Login</button>
					</Link>
					<Link to={"/signup"}>
					<button className="bg-[#FF9815] rounded-md px-3 py-2">Join Us</button>
					</Link>
					
					<div className='sm:hidden'>
						<Menu className='size-6 cursor-pointer hover:text-[#FF9815]' onClick={toggleMobileMenu} />
					</div>
				</div>


			{/* mobile navbar items */}
      {isMobileMenuOpen && (
					<div className='w-full sm:hidden mt-4 z-50 bg-[#000A1A] border rounded border-gray-800'>
						<Link to={"/"} className='block hover:bg-[#FF9815] p-2' onClick={toggleMobileMenu}>
							Movies
						</Link>
						<Link to={"/"} className='block hover:bg-[#FF9815] p-2' onClick={toggleMobileMenu}>
							Tv Shows
						</Link>
						<Link to={"/history"} className='block hover:bg-[#FF9815] p-2' onClick={toggleMobileMenu}>
							Search History
						</Link>
					</div>
				)}
			
		</header>
	);
};
export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, Search } from "lucide-react";
import { useAuthStore } from "../store/authUser";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout } = useAuthStore();
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
	return (
		<header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
			<div className='flex items-center gap-10 z-50'>
    <Link to={"/"}>
        <h1 className="font-semibold text-4xl text-purple-700">LightStream</h1>
    </Link>

				{/* desktop navbar items */}
				<div className='hidden sm:flex gap-2 items-center px-20'>
					<Link to='/' className='hover:text-purple-600'>
						Movies
					</Link>
					<Link to='/' className='hover:text-purple-600'>
						Tv Shows
					</Link>
					<Link to='/history' className='hover:text-purple-600'>
						Search History
					</Link>
				</div>
			</div>

      <div className='flex gap-2 items-center z-50'>
					<Link to={"/search"}>
						<Search className='size-6 cursor-pointer hover:text-purple-600' />
					</Link>
					<LogOut className='size-6 cursor-pointer hover:text-purple-600' onClick={logout} />
					<div className='sm:hidden'>
						<Menu className='size-6 cursor-pointer hover:text-purple-600' onClick={toggleMobileMenu} />
					</div>
				</div>


			{/* mobile navbar items */}
      {isMobileMenuOpen && (
					<div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
						<Link to={"/"} className='block hover:bg-purple-800 p-2' onClick={toggleMobileMenu}>
							Movies
						</Link>
						<Link to={"/"} className='block hover:bg-purple-800 p-2' onClick={toggleMobileMenu}>
							Tv Shows
						</Link>
						<Link to={"/history"} className='block hover:bg-purple-800 p-2' onClick={toggleMobileMenu}>
							Search History
						</Link>
					</div>
				)}
			
		</header>
	);
};
export default Navbar;

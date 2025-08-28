import Image from 'next/image';
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="w-full bg-black text-white fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo and brand name */}
        <div className="flex items-center space-x-2">
          <Image
            src="/Cobra logo.jpg"
            alt="Logo"
            width={70}
            height={50}
            className="object-contain"
          />
          <p className="font-bold text-lg">The Car Club</p>
        </div>
        
        {/* Navigation links */}
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-gray-300 cursor-pointer transition-colors"><Link href="/">Home</Link></li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors"><Link href="/about">About</Link></li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors"><Link href="/blogs">Blogs</Link></li>
            <li className="hover:text-gray-300 cursor-pointer transition-colors"><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
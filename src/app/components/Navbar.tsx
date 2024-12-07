import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 text-center text-2xl font-bold italic text-gray-800">
          Exclusive
        </div>

        {/* Links */}
        <ul className="flex items-center space-x-6 text-gray-600 font-medium">
          <li className="hover:text-gray-900 cursor-pointer">Home</li>
          <li className="hover:text-gray-900 cursor-pointer">Contact</li>
          <li className="hover:text-gray-900 cursor-pointer">About</li>
          <li className="hover:text-gray-900 cursor-pointer">SignUp</li>
        </ul>

        {/* Search Bar & Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          </div>
          {/* Heart Icon */}
          <FaHeart className="text-gray-600 hover:text-red-500 cursor-pointer text-lg" />
          {/* Trolley Icon */}
          <FaShoppingCart className="text-gray-600 hover:text-blue-500 cursor-pointer text-lg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

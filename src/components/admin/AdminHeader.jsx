import { FaBars, FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

const AdminHeader = ({ sidebarOpen, setSidebarOpen, activeTabLabel }) => {
  return (
    <header className="bg-white shadow-sm px-6 py-4 sticky top-0 z-40 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden text-gray-600 hover:text-gray-800"
        >
          <FaBars size={24} />
        </button>
        <h1 className="text-xl font-semibold text-slate-800">
          {activeTabLabel || "Dashboard"}
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
          <FaSearch className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent outline-none text-sm text-gray-600 w-48"
          />
        </div>

        {/* Notifications */}
        <button className="relative text-gray-600 hover:text-gray-800">
          <FaBell size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Admin Profile */}
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-3xl text-gray-400" />
          <span className="text-sm font-medium text-gray-700 hidden sm:block">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
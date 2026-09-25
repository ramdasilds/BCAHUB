import { useState } from "react";
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaStickyNote, 
  FaFilePdf, 
  FaProjectDiagram, 
  FaBriefcase, 
  FaQuestionCircle, 
  FaBullhorn, 
  FaImages, 
  FaEnvelope, 
  FaUserPlus, 
  FaChartBar, 
  FaCog, 
  FaSignOutAlt,
  FaGraduationCap,
  FaTimes
} from "react-icons/fa";

const AdminSidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { id: "students", label: "Student Management", icon: <FaUsers /> },
    { id: "notes", label: "Notes Management", icon: <FaStickyNote /> },
    { id: "pyq", label: "PYQ Management", icon: <FaFilePdf /> },
    { id: "projects", label: "Projects Management", icon: <FaProjectDiagram /> },
    { id: "internship", label: "Internship Management", icon: <FaBriefcase /> },
    { id: "interview", label: "Interview Questions", icon: <FaQuestionCircle /> },
    { id: "announcements", label: "Announcements", icon: <FaBullhorn /> },
    { id: "gallery", label: "Gallery", icon: <FaImages /> },
    { id: "messages", label: "Contact Messages", icon: <FaEnvelope /> },
    { id: "users", label: "Registered Users", icon: <FaUserPlus /> },
    { id: "analytics", label: "Downloads Analytics", icon: <FaChartBar /> },
    { id: "settings", label: "Settings", icon: <FaCog /> },
  ];

  const handleLogout = () => {
    // Add logout logic here
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-all duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:static`}>
        
        {/* Sidebar Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-white font-bold text-xl">Admin Panel</h2>
                <p className="text-blue-100 text-xs">Rajju Bhaiya University</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:text-gray-200"
            >
              <FaTimes size={24} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 overflow-y-auto h-[calc(100vh-120px)]">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm border-r-4 border-blue-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
                {activeTab === item.id && (
                  <span className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Logout Button */}
          <div className="border-t border-gray-200 mt-6 pt-4">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium text-red-600 hover:bg-red-50"
            >
              <FaSignOutAlt className="text-lg" />
              Logout
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default AdminSidebar;
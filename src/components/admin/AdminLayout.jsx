import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children, activeTab, setActiveTab }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = {
    dashboard: "Dashboard",
    students: "Student Management",
    notes: "Notes Management",
    pyq: "PYQ Management",
    projects: "Projects Management",
    internship: "Internship Management",
    interview: "Interview Questions",
    announcements: "Announcements",
    gallery: "Gallery",
    messages: "Contact Messages",
    users: "Registered Users",
    analytics: "Downloads Analytics",
    settings: "Settings",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeTabLabel={navItems[activeTab]}
        />
        
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
import AdminLayout from "../../components/admin/AdminLayout";
import DashboardCard from "../../components/admin/DashboardCard";
import { 
  FaUsers, 
  FaStickyNote, 
  FaFilePdf, 
  FaProjectDiagram, 
  FaDownload, 
  FaEnvelope,
  FaEye,
  FaDownload as FaDownloadIcon
} from "react-icons/fa";

const AdminDashboard = () => {
  const stats = [
    { label: "Total Students", value: "2,847", icon: <FaUsers />, color: "blue" },
    { label: "Total Notes", value: "156", icon: <FaStickyNote />, color: "green" },
    { label: "Total PYQs", value: "89", icon: <FaFilePdf />, color: "purple" },
    { label: "Total Projects", value: "234", icon: <FaProjectDiagram />, color: "orange" },
    { label: "Total Downloads", value: "12,543", icon: <FaDownload />, color: "red" },
    { label: "Contact Messages", value: "45", icon: <FaEnvelope />, color: "pink" },
  ];

  const recentActivities = [
    { action: "New PDF downloaded", time: "2 minutes ago", icon: <FaDownloadIcon />, color: "blue" },
    { action: "New student registered", time: "15 minutes ago", icon: <FaUsers />, color: "green" },
    { action: "Project submitted", time: "1 hour ago", icon: <FaProjectDiagram />, color: "orange" },
    { action: "New contact message", time: "3 hours ago", icon: <FaEnvelope />, color: "pink" },
    { action: "Note updated", time: "5 hours ago", icon: <FaStickyNote />, color: "purple" },
  ];

  return (
    <AdminLayout activeTab="dashboard">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
              <div className={`w-10 h-10 bg-${activity.color}-100 rounded-full flex items-center justify-center text-${activity.color}-600`}>
                {activity.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-800">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <FaEye size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
import { useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { FaCog, FaSave, FaUser, FaGlobe, FaBell, FaLock } from "react-icons/fa";

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: "Rajju Bhaiya University",
    siteEmail: "info@rbu.edu",
    sitePhone: "+91-1234567890",
    maintenanceMode: false,
    allowRegistration: true,
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <AdminLayout activeTab="settings">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-6">
          <FaCog className="text-gray-600" />
          Settings
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* General Settings */}
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-lg font-semibold text-slate-800 flex items-center gap-2 mb-4">
                <FaGlobe className="text-blue-600" />
                General Settings
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Site Name
                  </label>
                  <input
                    type="text"
                    name="siteName"
                    value={settings.siteName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Site Email
                  </label>
                  <input
                    type="email"
                    name="siteEmail"
                    value={settings.siteEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="sitePhone"
                    value={settings.sitePhone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-lg font-semibold text-slate-800 flex items-center gap-2 mb-4">
                <FaLock className="text-red-600" />
                Security Settings
              </h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="maintenanceMode"
                    checked={settings.maintenanceMode}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="text-sm text-gray-700">Enable Maintenance Mode</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="allowRegistration"
                    checked={settings.allowRegistration}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="text-sm text-gray-700">Allow New Registrations</span>
                </label>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="pb-6">
              <h4 className="text-lg font-semibold text-slate-800 flex items-center gap-2 mb-4">
                <FaBell className="text-yellow-600" />
                Notification Settings
              </h4>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={settings.notifications}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Enable Email Notifications</span>
              </label>
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-200"
            >
              <FaSave /> Save Settings
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Settings;
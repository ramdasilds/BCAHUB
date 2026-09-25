import AdminLayout from "../../components/admin/AdminLayout";
import { FaPlus, FaEdit, FaTrash, FaBriefcase } from "react-icons/fa";

const Internship = () => {
  return (
    <AdminLayout activeTab="internship">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <FaBriefcase className="text-pink-600" />
            Internship Management
          </h3>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-pink-700 transition-all shadow-lg shadow-pink-200">
            <FaPlus /> Add Internship
          </button>
        </div>
        <p className="text-gray-600">Manage internship opportunities here...</p>
      </div>
    </AdminLayout>
  );
};

export default Internship;
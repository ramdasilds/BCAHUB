import AdminLayout from "../../components/admin/AdminLayout";
import { FaPlus, FaEdit, FaTrash, FaProjectDiagram } from "react-icons/fa";

const Projects = () => {
  return (
    <AdminLayout activeTab="projects">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <FaProjectDiagram className="text-orange-600" />
            Projects Management
          </h3>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-orange-700 transition-all shadow-lg shadow-orange-200">
            <FaPlus /> Add Project
          </button>
        </div>
        <p className="text-gray-600">Manage student projects here...</p>
      </div>
    </AdminLayout>
  );
};

export default Projects;
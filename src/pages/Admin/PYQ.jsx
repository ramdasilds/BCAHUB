import AdminLayout from "../../components/admin/AdminLayout";
import { FaPlus, FaEdit, FaTrash, FaFilePdf } from "react-icons/fa";

const PYQ = () => {
  return (
    <AdminLayout activeTab="pyq">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <FaFilePdf className="text-purple-600" />
            PYQ Management
          </h3>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-purple-700 transition-all shadow-lg shadow-purple-200">
            <FaPlus /> Add PYQ
          </button>
        </div>

        {/* PYQ List */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-slate-800">Subject Name {item}</h4>
                <p className="text-sm text-gray-600">Semester 3 • 2025-2026</p>
              </div>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                  <FaEdit />
                </button>
                <button className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition-colors">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default PYQ;
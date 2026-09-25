import AdminLayout from "../../components/admin/AdminLayout";
import { FaPlus, FaEdit, FaTrash, FaStickyNote } from "react-icons/fa";

const Notes = () => {
  return (
    <AdminLayout activeTab="notes">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <FaStickyNote className="text-green-600" />
            Notes Management
          </h3>
          <button className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-green-700 transition-all shadow-lg shadow-green-200">
            <FaPlus /> Add Note
          </button>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-slate-800 mb-2">Note Title {item}</h4>
              <p className="text-sm text-gray-600 line-clamp-2">This is a sample note description for testing purposes...</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">Semester 3 • PDF</span>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800"><FaEdit /></button>
                  <button className="text-red-600 hover:text-red-800"><FaTrash /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Notes;
import { useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { FaPlus, FaSearch, FaEdit, FaTrash, FaUserGraduate } from "react-icons/fa";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    { id: 1, name: "John Doe", email: "john@email.com", semester: "3", branch: "CSE" },
    { id: 2, name: "Jane Smith", email: "jane@email.com", semester: "5", branch: "ECE" },
    { id: 3, name: "Mike Johnson", email: "mike@email.com", semester: "1", branch: "ME" },
  ];

  return (
    <AdminLayout activeTab="students">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <FaUserGraduate className="text-blue-600" />
            Student Management
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full sm:w-64"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              <FaPlus /> Add Student
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Semester</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Branch</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-slate-800">{student.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{student.email}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">Semester {student.semester}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                      {student.branch}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 p-1 hover:bg-blue-50 rounded-lg transition-colors">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800 p-1 hover:bg-red-50 rounded-lg transition-colors">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Students;
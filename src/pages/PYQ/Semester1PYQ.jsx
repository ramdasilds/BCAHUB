// {/*import Layout from "../../components/layout/Layout"; */}
import semester1pyq from "../../data/semester1pyq";
import { FaFilePdf, FaEye, FaDownload, FaUniversity, FaCalendarAlt, FaClock, FaBookOpen, FaUserGraduate } from "react-icons/fa";

const Semester1PYQ = () => {
  return (
    <>

      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 flex justify-center">
        <div className="max-w-7xl w-full px-6">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-200">
              📚 Previous Year Question Papers
            </span>

            <h1 className="text-5xl font-extrabold text-slate-800 mt-4">
              Semester <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">1</span> PYQs
            </h1>

            <p className="text-gray-600 mt-3 text-2xl flex items-center justify-center gap-2">
              <span className="w-12 h-0.5 bg-blue-400 inline-block"></span>
              View and Download Previous Year Question Papers
              <span className="w-12 h-0.5 bg-blue-400 inline-block"></span>
            </p>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-center gap-3 border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-xl">
                <FaBookOpen className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Total Papers</p>
                <p className="text-xl font-bold text-slate-800">{semester1pyq.length}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-center gap-3 border border-gray-100">
              <div className="bg-green-100 p-3 rounded-xl">
                <FaUserGraduate className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Students Benefited</p>
                <p className="text-xl font-bold text-slate-800">500+</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-center gap-3 border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-xl">
                <FaCalendarAlt className="text-purple-600 text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Last Updated</p>
                <p className="text-xl font-bold text-slate-800">2026</p>
              </div>
            </div>
          </div>
        
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {semester1pyq.map((item, index) => (
              <div
                key={item.id || index}
                className="bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 h-[500px] flex flex-col overflow-hidden group"
              >
                {/* Top Section with Gradient Animation */}
                <div className="h-[40%] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 rotate-45 transition-all duration-700"></div>
                  <div className="text-center text-white">
                    <FaFilePdf className="mx-auto drop-shadow-2xl group-hover:scale-110 transition-transform duration-300" size={80} />
                    <p className="text-xs font-medium text-white/80 mt-2">Question Paper</p>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex-1 flex flex-col p-5">
                  {/* Subject Title */}
                  <div>
                    <h2 className="text-xl font-bold text-center text-slate-800 line-clamp-1">
                      {item.subject}
                    </h2>
                  
                    <div className="flex justify-center mt-2">
                      <span className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1.5 rounded-full text-[10px] font-semibold border border-blue-100">
                        <FaUniversity className="text-blue-500 text-2xl" />
                        Rajju Bhaiya University
                      </span>
                    </div>
                    
                    <p className="text-center text-gray-800 text-xl mt-2">
                      Semester 1 Previous Year Examination Paper
                    </p>
                  </div>
                  
                  {/* Additional Info with White Backgrounds */}
                  <div className="mt-3 space-y-3">
                    <div className="bg-white rounded-xl px-3 py-1.5 border border-gray-200 flex items-center justify-between hover:border-blue-200 transition-colors">
                      <span className="text-lg font-medium text-gray-600 flex items-center gap-2">
                        <FaCalendarAlt className="text-blue-500 text-2xl" />
                        Examination Year
                      </span>
                      <span className="text-lg font-semibold text-slate-700">2025-2026</span>
                    </div>
                    <br/>
                    <div className="bg-white rounded-xl px-3 py-1.5 border border-gray-200 flex items-center justify-between hover:border-blue-200 transition-colors">
                      <span className="text-lg font-medium text-gray-600 flex items-center gap-2">
                        <FaClock className="text-purple-500 text-xs" />
                        Duration
                      </span>
                      <span className="text-lg font-semibold text-slate-700">3 Hours</span>
                    </div>
                    <br/>
                    <div className="bg-white rounded-xl px-3 py-1.5 border border-gray-200 flex items-center justify-between hover:border-blue-200 transition-colors">
                      <span className="text-lg font-medium text-gray-600 flex items-center gap-2">
                        <FaBookOpen className="text-green-500 text-xs" />
                        Total Marks
                      </span>
                      <span className="text-lg font-semibold text-slate-700">100</span>
                    </div>
                  </div>

                  {/* Compact Details Grid */}
                  <div className="grid grid-cols-3 gap-2.5 mt-3">
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl px-2 py-1.5 text-center border border-slate-100">
                      <p className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider">Semester</p>
                      <p className="text-xs font-bold text-blue-600 mt-0.5">1</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-red-50 rounded-xl px-2 py-1.5 text-center border border-slate-100">
                      <p className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider">Format</p>
                      <p className="text-xs font-bold text-red-500 mt-0.5">PDF</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-green-50 rounded-xl px-2 py-1.5 text-center border border-slate-100">
                      <p className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider">Status</p>
                      <p className="text-xs font-bold text-green-500 mt-0.5 flex items-center justify-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block animate-pulse"></span>
                        Available
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-3">
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="w-[42%] flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-200 hover:shadow-xl transition-all duration-300 text-sm"
                    >
                      <FaEye className="text-xs" />
                      View
                    </a>

                    <a
                      href={item.pdf}
                      download
                      className="w-[42%] flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-green-200 hover:shadow-xl transition-all duration-300 text-sm"
                    >
                      <FaDownload className="text-xs" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br/>
          {/* Bottom Info Banner */}
          <div className="mt-12 bg-white rounded-3xl shadow-lg p-6 border border-gray-100 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-2xl">
                  <FaFilePdf className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">Need More Papers?</h3>
                  <p className="text-xs text-gray-500">Check other semesters for more question papers</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-200 text-xs">
                  Semester 2
                </button>
                <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-200 text-xs">
                  Semester 3
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
      <br/>
   </>
  );
};

export default Semester1PYQ;
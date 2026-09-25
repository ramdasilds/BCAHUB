import {
  FaBriefcase,
  FaCertificate,
  FaFileAlt,
  FaLaptopCode,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";

const internshipResources = [
  {
    title: "Internship Guide",
    description: "Step-by-step guide to get your first internship.",
    icon: <FaBriefcase className="text-5xl text-blue-600" />,
  },
  {
    title: "Internship Report",
    description: "University approved internship report format.",
    icon: <FaFileAlt className="text-5xl text-green-600" />,
  },
  {
    title: "Completion Certificate",
    description: "Sample Internship Certificate.",
    icon: <FaCertificate className="text-5xl text-yellow-500" />,
  },
  {
    title: "Interview Questions",
    description: "Most asked Internship Interview Questions.",
    icon: <FaLaptopCode className="text-5xl text-red-500" />,
  },
];

const Internship = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-blue-700">
          Internship Resources
        </h1>

        <p className="text-xl text-gray-600 mt-4">
          Everything You Need For Your Internship Journey
        </p>
      </section>

      {/* Cards */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {internshipResources.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-8 text-center"
            >

              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 mb-6">
                {item.description}
              </p>

              <div className="flex gap-3">

                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 flex items-center justify-center gap-2">

                  <FaExternalLinkAlt />
                  View

                </button>

                <button className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 flex items-center justify-center gap-2">

                  <FaDownload />
                  Download

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Internship;
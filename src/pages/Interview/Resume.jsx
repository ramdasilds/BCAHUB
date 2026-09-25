import { Link } from "react-router-dom";

const resumeSections = [
  {
    title: "Resume Format",
    icon: "📄",
    description: "Professional Resume Templates for Freshers",
    path: "/resume/format",
  },
  {
    title: "Resume Samples",
    icon: "📝",
    description: "BCA Student Resume Examples",
    path: "/resume/samples",
  },
  {
    title: "Resume Projects",
    icon: "💻",
    description: "Best Projects to Add in Resume",
    path: "/resume/projects",
  },
  {
    title: "Skills for Resume",
    icon: "🚀",
    description: "Technical & Soft Skills",
    path: "/resume/skills",
  },
  {
    title: "Resume Tips",
    icon: "💡",
    description: "Do's & Don'ts for Resume",
    path: "/resume/tips",
  },
  {
    title: "ATS Resume Guide",
    icon: "🎯",
    description: "Create ATS Friendly Resume",
    path: "/resume/ats",
  },
];

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-blue-700">
            📄 Resume Preparation
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Build a Professional Resume for Campus Placements & Jobs
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {resumeSections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-t-4 border-blue-600 p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl text-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold text-center">
                {item.title}
              </h2>

              <p className="text-center text-gray-600 mt-4 mb-6">
                {item.description}
              </p>

              <Link to={item.path}>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                  Explore
                </button>
              </Link>
            </div>
          ))}

        </div>

        {/* Bottom Section */}

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            ⭐ Resume Checklist
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-blue-50 rounded-xl p-5">
              ✅ Personal Information
            </div>

            <div className="bg-green-50 rounded-xl p-5">
              ✅ Career Objective
            </div>

            <div className="bg-yellow-50 rounded-xl p-5">
              ✅ Education Details
            </div>

            <div className="bg-purple-50 rounded-xl p-5">
              ✅ Technical Skills
            </div>

            <div className="bg-pink-50 rounded-xl p-5">
              ✅ Academic Projects
            </div>

            <div className="bg-red-50 rounded-xl p-5">
              ✅ Certifications & Achievements
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Resume;
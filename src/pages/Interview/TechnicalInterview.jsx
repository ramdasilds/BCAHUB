import { Link } from "react-router-dom";

const technicalTopics = [
  {
    title: "Python Interview",
    icon: "🐍",
    description: "Basic to Advanced Python Interview Questions",
    path: "/interview/technical/python",
  },
  {
    title: "Java Interview",
    icon: "☕",
    description: "Core Java & OOP Interview Questions",
    path: "/interview/technical/java",
  },
  {
    title: "React Interview",
    icon: "⚛️",
    description: "React JS Interview Questions with Answers",
    path: "/interview/technical/react",
  },
  {
    title: "DBMS Interview",
    icon: "🗄️",
    description: "SQL & Database Interview Questions",
    path: "/interview/technical/dbms",
  },
  {
    title: "Operating System",
    icon: "💻",
    description: "OS Concepts & Interview Questions",
    path: "/interview/technical/os",
  },
  {
    title: "Computer Network",
    icon: "🌐",
    description: "Networking Interview Questions",
    path: "/interview/technical/network",
  },
  {
    title: "Data Structure",
    icon: "📊",
    description: "DSA Interview Questions",
    path: "/interview/technical/dsa",
  },
  {
    title: "Web Development",
    icon: "🌍",
    description: "HTML, CSS, JavaScript Interview",
    path: "/interview/technical/web",
  },
];

const TechnicalInterview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-blue-50 py-10">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-700">
            💻 Technical Interview Preparation
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Prepare Subject-wise Technical Interview Questions
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {technicalTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl text-center mb-5">
                {topic.icon}
              </div>

              <h2 className="text-xl font-bold text-center text-slate-800">
                {topic.title}
              </h2>

              <p className="text-gray-500 text-center mt-3 mb-6">
                {topic.description}
              </p>

              <Link to={topic.path}>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                  Explore
                </button>
              </Link>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default TechnicalInterview;
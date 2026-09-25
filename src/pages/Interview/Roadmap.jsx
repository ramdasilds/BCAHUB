import { Link } from "react-router-dom";

const roadmaps = [
  {
    title: "Python Full Stack",
    icon: "🐍",
    description: "Learn Python, Django, React & Become a Full Stack Developer",
    path: "/roadmap/python-fullstack",
  },
  {
    title: "Java Full Stack",
    icon: "☕",
    description: "Master Java, Spring Boot & React",
    path: "/roadmap/java-fullstack",
  },
  {
    title: "Data Analyst",
    icon: "📊",
    description: "Excel, SQL, Power BI & Python",
    path: "/roadmap/data-analyst",
  },
  {
    title: "Data Science",
    icon: "🤖",
    description: "Python, Machine Learning & AI",
    path: "/roadmap/data-science",
  },
  {
    title: "Cyber Security",
    icon: "🔐",
    description: "Networking, Linux, Ethical Hacking",
    path: "/roadmap/cyber-security",
  },
  {
    title: "Cloud Computing",
    icon: "☁️",
    description: "AWS, Azure & DevOps",
    path: "/roadmap/cloud",
  },
  {
    title: "UI / UX Design",
    icon: "🎨",
    description: "Figma, Wireframe & Prototyping",
    path: "/roadmap/uiux",
  },
  {
    title: "Placement Roadmap",
    icon: "💼",
    description: "Complete Placement Preparation Guide",
    path: "/roadmap/placement",
  },
];

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold text-blue-700">
            🗺 Career Roadmaps
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Choose Your Career Path After BCA
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {roadmaps.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-t-4 border-blue-600 p-6 hover:shadow-2xl hover:-translate-y-2 transition"
            >

              <div className="text-5xl text-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-xl font-bold text-center">
                {item.title}
              </h2>

              <p className="text-gray-600 text-center mt-4 mb-6">
                {item.description}
              </p>

              <Link to={item.path}>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                  View Roadmap
                </button>
              </Link>

            </div>

          ))}

        </div>

        {/* Why Follow Roadmap */}

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            ⭐ Why Follow a Roadmap?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-blue-50 p-5 rounded-xl text-center">
              📚
              <h3 className="font-bold mt-3">Learn Step by Step</h3>
            </div>

            <div className="bg-green-50 p-5 rounded-xl text-center">
              💻
              <h3 className="font-bold mt-3">Build Real Projects</h3>
            </div>

            <div className="bg-yellow-50 p-5 rounded-xl text-center">
              🎯
              <h3 className="font-bold mt-3">Prepare for Placement</h3>
            </div>

            <div className="bg-purple-50 p-5 rounded-xl text-center">
              🚀
              <h3 className="font-bold mt-3">Get Job Ready</h3>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Roadmap;
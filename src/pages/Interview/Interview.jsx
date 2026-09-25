import { Link } from "react-router-dom";

const interviewSections = [
  {
    title: "HR Interview",
    icon: "👨‍💼",
    description: "Most Frequently Asked HR Interview Questions",
    path: "/interview/hr",
  },
  {
    title: "Technical Interview",
    icon: "💻",
    description: "Programming, DBMS, OS, CN, Python, Java, React",
    path: "/interview/technical",
  },
  {
    title: "Aptitude",
    icon: "🧠",
    description: "Quantitative, Reasoning & Verbal Practice",
    path: "/interview/aptitude",
  },
  {
    title: "Resume Guide",
    icon: "📄",
    description: "Professional Resume Format & Templates",
    path: "/interview/resume",
  },
  {
    title: "Group Discussion",
    icon: "🎤",
    description: "Latest GD Topics with Answers",
    path: "/interview/gd",
  },
  {
    title: "Placement Roadmap",
    icon: "🚀",
    description: "Step-by-Step Placement Preparation",
    path: "/interview/roadmap",
  },
];

const Interview = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-700">
            💼 Placement Preparation
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Crack Your Dream Job with Interview Preparation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {interviewSections.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-7 hover:shadow-2xl hover:-translate-y-2 transition"
            >

              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 mb-6">
                {item.description}
              </p>
              <Link to={item.path}>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
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

export default Interview;
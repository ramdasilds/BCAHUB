import { Link } from "react-router-dom";

const aptitudeTopics = [
  {
    title: "Quantitative Aptitude",
    icon: "📊",
    description: "Percentage, Profit & Loss, Time & Work, Average, Ratio",
    path: "/interview/aptitude/quantitative",
  },
  {
    title: "Logical Reasoning",
    icon: "🧩",
    description: "Blood Relation, Coding-Decoding, Puzzle, Seating",
    path: "/interview/aptitude/reasoning",
  },
  {
    title: "Verbal Ability",
    icon: "📖",
    description: "Grammar, Vocabulary, Reading Comprehension",
    path: "/interview/aptitude/verbal",
  },
  {
    title: "Data Interpretation",
    icon: "📈",
    description: "Pie Chart, Bar Graph, Line Graph, Tables",
    path: "/interview/aptitude/di",
  },
  {
    title: "Mock Test",
    icon: "📝",
    description: "Practice Aptitude Tests with Timer",
    path: "/interview/aptitude/mock-test",
  },
  {
    title: "Placement Tips",
    icon: "🎯",
    description: "Company-wise Preparation Strategy",
    path: "/interview/aptitude/tips",
  },
];

const Aptitude = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-blue-700">
            🧠 Aptitude Preparation
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Prepare for Campus Placements with Topic-wise Aptitude Questions
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {aptitudeTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border-t-4 border-blue-600"
            >
              <div className="text-5xl text-center mb-5">
                {topic.icon}
              </div>

              <h2 className="text-2xl font-bold text-center text-slate-800">
                {topic.title}
              </h2>

              <p className="text-gray-600 text-center mt-3 mb-6">
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

export default Aptitude;
import { Link } from "react-router-dom";

const gdTopics = [
  {
    title: "Current Affairs GD",
    icon: "📰",
    description: "Latest trending topics for campus placement GD.",
    path: "/gd/current-affairs",
  },
  {
    title: "Technology GD",
    icon: "💻",
    description: "AI, Cyber Security, Blockchain, Cloud Computing etc.",
    path: "/gd/technology",
  },
  {
    title: "Social Issues",
    icon: "🌍",
    description: "Education, Women Empowerment, Environment and more.",
    path: "/gd/social",
  },
  {
    title: "Business & Economy",
    icon: "📈",
    description: "Startup, Economy, Digital India, Inflation etc.",
    path: "/gd/business",
  },
  {
    title: "GD Tips & Tricks",
    icon: "🎯",
    description: "How to crack Group Discussion confidently.",
    path: "/gd/tips",
  },
  {
    title: "Mock GD",
    icon: "🎤",
    description: "Practice topics with sample points.",
    path: "/gd/mock",
  },
];

const GD = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-700">
            🎤 Group Discussion (GD)
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Practice the most important GD topics for Campus Placements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gdTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-blue-600 p-6"
            >
              <div className="text-5xl text-center mb-5">
                {topic.icon}
              </div>

              <h2 className="text-2xl font-bold text-center">
                {topic.title}
              </h2>

              <p className="text-center text-gray-600 mt-4 mb-6">
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

        {/* Tips Section */}

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            ⭐ GD Success Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-blue-50 p-5 rounded-xl">
              <h3 className="font-bold text-xl mb-2">
                🗣 Speak Clearly
              </h3>

              <p className="text-gray-600">
                Speak confidently with clear pronunciation and proper body language.
              </p>
            </div>

            <div className="bg-green-50 p-5 rounded-xl">
              <h3 className="font-bold text-xl mb-2">
                👂 Be a Good Listener
              </h3>

              <p className="text-gray-600">
                Listen carefully to others before giving your opinion.
              </p>
            </div>

            <div className="bg-orange-50 p-5 rounded-xl">
              <h3 className="font-bold text-xl mb-2">
                📚 Stay Updated
              </h3>

              <p className="text-gray-600">
                Read newspapers and current affairs regularly.
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-xl">
              <h3 className="font-bold text-xl mb-2">
                🤝 Respect Others
              </h3>

              <p className="text-gray-600">
                Never interrupt others and always respect different opinions.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default GD;
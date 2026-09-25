import {
  FaGithub,
  FaGlobe,
  FaDownload,
  FaFilePdf,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "BCA Hub Portal",
    image: "/Projects/project.png",

    description:
      "A complete portal specially designed for BCA students. Students can access Semester-wise Notes, Previous Year Papers, Projects, Interview Preparation, MCQs, Roadmaps, Internship Resources and much more from one place.",

    technology: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    github: "https://github.com/ramdasilds",
    demo: "https://bcahub.vercel.app",
    documentation: "/docs/bca-hub.pdf",
    download: "/zip/bca-hub.zip",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 pt-32 pb-20 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700">
          💻 My Projects
        </h1>

        <p className="text-gray-600 text-lg mt-4">
          Explore My Best Development Projects
        </p>
      </div>

      {/* Project Card */}
      <div className="flex justify-center">

        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden hover:-translate-y-2 hover:shadow-blue-300 transition-all duration-300"
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />

            {/* Content */}
            <div className="p-10">

              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                ⭐ Featured Project
              </span>

              <h2 className="text-4xl font-bold text-gray-800 mt-5">
                {project.title}
              </h2>

              <p className="text-gray-600 mt-5 leading-8 text-lg">
                {project.description}
              </p>

              {/* Technology */}
              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Technology Used
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-5 mt-10">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="w-full flex justify-center items-center gap-2 bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-semibold transition">
                    <FaGithub />
                    GitHub
                  </button>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="w-full flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition">
                    <FaGlobe />
                    Live Demo
                  </button>
                </a>

                <a
                  href={project.documentation}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="w-full flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition">
                    <FaFilePdf />
                    Documentation
                  </button>
                </a>

                <a
                  href={project.download}
                  download
                >
                  <button className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition">
                    <FaDownload />
                    Download Source Code
                  </button>
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
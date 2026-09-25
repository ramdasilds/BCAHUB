import { title } from "framer-motion/client";

const semesters = [
  {
    semester: "Semester 1",
    subjects: [
      {
        title: "Programming Principles & Algorithms",
        pdf: "/notes/semester1/Programming_Principles_Algorithms.pdf",
      },
      {
        title: "computer fundamentals",
        pdf: "/notes/semester1/Computer_Fundamental.pdf",
      },
      {
        title: "Mathematics-1",
        pdf: "/notes/semester1/Mathematics_1.pdf",
      },
      {
        title: "Communication Skills",
        pdf: "/notes/semester1/Communication_Skills.pdf",
      },
    ],
  },
  {
    semester: "Semester 2",
    subjects: [
      {
        title: "C Programming",
        pdf: "/notes/semester2/C_Programming_Notes.pdf"
      },
      {
        title: "Digital Electronics",
        pdf: "/notes/semester2/Digital_Electronics.pdf"
      },
      {
        title: "Mathematics-II",
        pdf: "/notes/semester2/Mathematics_2.pdf"
      },
      {
        title: "Operating System",
        pdf: "/notes/semester2/Operating_System.pdf"
      },
    ],
  },
  {
    semester: "Semester 3",
    subjects: [
      {
        title: "Data Structure",
        pdf: "/notes/semester3/Data_Structure.pdf"
      },
      {
        title: "DBMS",
        pdf: "/notes/semester3/DBMS.pdf"
      },
      {
        title: "Computer Network",
        pdf: "/notes/semester3/Computer_Network.pdf"
      },
      {
        title: "Python",
        pdf: "/notes/semester3/Python.pdf"
      },
    ],
  },
  {
    semester: "Semester 4",
    subjects: [
      {
        title: "Java",
        pdf: "/notes/semester4/Java.pdf"
      },
      {
        title: "Software Engineering",
        pdf: "/notes/semester4/Software_Engineering.pdf"
      },
      {
        title: "Web Technology",
        pdf: "/notes/semester4/Web_Technology.pdf"
      },
      {
        title: "Computer Graphics",
        pdf: "/notes/semester4/Computer_Graphics.pdf"
      },
    ],
  },
  {
    semester: "Semester 5",
    subjects: [
      {
        title: "Design and Analysis of Algorithms (DAA)",
        pdf: "/notes/semester5/DAA.pdf"
      },
      {
        title: "Introduction to Python",
        pdf: "/notes/semester5/Python.pdf"
      },
      {
        title: "Internet and Web Design",
        pdf: "/notes/semester5/IWD.pdf"
      },
      {
        title: "Data Communication and Networks",
        pdf: "/notes/semester5/DCN.pdf"
      },
    ],
  },
  {
    semester: "Semester 6",
    subjects: [
      {
        title: "Cloud Computing",
        pdf: "/notes/semester6/Cloud_Computing.pdf"
      },
      {
        title: "Data Mining ",
        pdf: "/notes/semester6/Data_Mining_Notes.pdf"
      },
      {
        title: "Soft Computing",
        pdf: "/notes/semester6/Soft_Computing.pdf"
      },
      {
        title: "Major Research Project",
        pdf: "/notes/semester6/Major_Project_Guide.pdf"
      },
    ],
  },
];
const Notes = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-5">

        <h1 className="text-5xl font-bold text-center text-blue-500">
          📚 BCA Notes
        </h1>

        <p className="text-center text-2xl text-red-600 mt-3 mb-40">
          Semester Wise Notes
        </p>

        {semesters.map((sem, index) => (
          <div key={index} className="mb-10">

            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              {sem.semester}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {sem.subjects.map((subject, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg p-5"
                >
                  <h3 className="font-bold text-lg">
                    {subject.title}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    PDF Notes Available
                  </p>

                  <div className="flex gap-3 mt-5">

                    <a
                      href={subject.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                        👁 View
                      </button>
                    </a>

                    <a
                      href={subject.pdf}
                      download
                      className="flex-1"
                    >
                      <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg">
                        ⬇ Download
                      </button>
                    </a>

                  </div>
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Notes;
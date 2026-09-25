const Home = () => {
  return (
    <>
    {/* // <Layout> */}
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">
            <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold shadow-sm">
              🎓 Welcome to BCA Hub Portal
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 ml-32">
              One Platform for{" "}
              <span className="text-blue-600 ml-32">Every BCA Student</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Download semester-wise Notes, Previous Year Question Papers,
              Mini Projects, Major Projects, Internship Resources,
              Interview Preparation, MCQs and much more.
              <span className="block mt-12 text-blue-700 font-semibold">
                📚 All study materials are organized according to the BCA syllabus of
                Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj.
              </span>
            </p>
            <br/>
            <div className="flex flex-wrap gap-5 mt-8 mb-12">
              <button className="px-16 py-6 bg-blue-600 text-2xl text-white rounded-2xl shadow-lg hover:bg-blue-700 transition-all duration-300">
                Explore Notes
              </button>

              <button className="px-16 py-6 border-2 text-2xl border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img
              src="/banners/banner2.png"
              alt="BCA Hub Banner"
              className="w-full max-w-xl ml-10 rounded-3xl shadow-2xl object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>
    <br/>
      {/* Stats Section */}
      <section className="bg-white pb-8 pt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-blue-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition">
              <h2 className="text-4xl font-bold text-blue-600">500+</h2>
              <p className="mt-3 text-gray-600 font-medium">Study Notes</p>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition">
              <h2 className="text-4xl font-bold text-green-600">100+</h2>
              <p className="mt-3 text-gray-600 font-medium">Projects</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition">
              <h2 className="text-4xl font-bold text-orange-500">1000+</h2>
              <p className="mt-3 text-gray-600 font-medium">Active Students</p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition">
              <h2 className="text-4xl font-bold text-purple-600">8</h2>
              <p className="mt-3 text-gray-600 font-medium">BCA Semesters</p>
            </div>
            <br/>
          </div>
        </div>
      </section>

      {/* What Will You Get Section */}

<section className="py-20 bg-gradient-to-b from-white to-blue-50 ml-[30px] ">
  <div className="max-w-7xl ml-0 mr-24 px-6">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg">
        📚 WHAT YOU WILL GET?
      </span>

      <h2 className="text-4xl font-bold text-slate-800 mt-6">
        Everything a <span className="text-blue-600">BCA Student</span> Needs
      </h2>

      <p className="text-gray-600 mt-3 text-lg">
        One Platform • Unlimited Resources • Better Future
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 ml-[30px] ml-auto h-full">

      {/* Notes */}
      <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 border-blue-600 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">

       <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-5 mx-auto">
          <i className="fas fa-book-open"></i>
        </div>

        <h3 className="text-xl font-bold mb-4 text-center">
          BCA Notes
        </h3>

        <ul className="space-y-2 text-gray-600 text-sm text-justify">
          <li>✔ Semester Wise Notes</li>
          <li>✔ Subject Wise Notes</li>
          <li>✔ Easy Language</li>
          <li>✔ Updated Content</li>
        </ul>

      </div>

      {/* PYQ */}
      <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-purple-600 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 text-3xl mb-6">
          <i className="fas fa-file-alt"></i>
        </div>

        <h3 className="text-xl font-bold mb-4 text-center">
          Previous Papers
        </h3>

        <ul className="space-y-2 text-gray-600 text-sm text-justify">
          <li>✔ University Papers</li>
          <li>✔ Solved Papers</li>
          <li>✔ Important Questions</li>
          <li>✔ Exam Preparation</li>
        </ul>

      </div>

      {/* Projects */}
      <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-orange-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 text-3xl mb-6">
          <i className="fas fa-code"></i>
        </div>

        <h3 className="text-xl font-bold mb-4 text-center">
          Projects
        </h3>

        <ul className="space-y-2 text-gray-600 text-sm text-justify">
          <li>✔ Mini Projects</li>
          <li>✔ Major Projects</li>
          <li>✔ Source Code</li>
          <li>✔ Documentation</li>
        </ul>

      </div>

      {/* MCQ */}
      <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-green-600 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 text-2xl mb-5">
          <i className="fas fa-list-check"></i>
        </div>

        <h3 className="text-xl font-bold mb-4 text-center">
          MCQs
        </h3>

        <ul className="space-y-2 text-gray-600 text-sm text-justify">
          <li>✔ Topic Wise MCQs</li>
          <li>✔ Practice Tests</li>
          <li>✔ Quiz Mode</li>
          <li>✔ Instant Result</li>
        </ul>

      </div>

      {/* Interview */}
      <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-red-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-500 text-2xl mb-5">
          <i className="fas fa-user-tie"></i>
        </div>

        <h3 className="text-xl font-bold mb-4 text-center">
          Placement Prep
        </h3>

        <ul className="space-y-2 text-gray-600 text-sm text-justify">
          <li>✔ HR Questions</li>
          <li>✔ Technical Interview</li>
          <li>✔ Aptitude</li>
          <li>✔ Resume Guide</li>
        </ul>

      </div>

      {/* Internship */}
      <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-cyan-600 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

        <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 text-2xl mb-5">
          <i className="fas fa-briefcase"></i>
        </div>

        <h3 className="text-xl font-bold mb-4 text-center">
          Internship
        </h3>

        <ul className="space-y-2 text-gray-600 text-sm text-justify">
          <li>✔ Internship Guide</li>
          <li>✔ Certificates</li>
          <li>✔ Report Format</li>
          <li>✔ Career Resources</li>
        </ul>

      </div>
    <br/>
    </div>
  </div>
</section>
    {/* // </Layout> */}
    </>
  );
};

export default Home;
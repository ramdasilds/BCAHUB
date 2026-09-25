import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-32">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              BCA Hub Portal
            </h2>

            <p className="text-gray-300 mt-5 leading-7 text-justify">
              One Platform for Every BCA Student.
              Download semester-wise Notes, Previous Year Papers,
              Projects, MCQs, Interview Preparation and much more.
            </p>

            <p className="text-gray-400 mt-5 text-sm md:text-justify">
              📚 All study materials are based on the BCA syllabus of
              <br />
              <span className="font-semibold text-white">
                Prof. Rajendra Singh (Rajju Bhaiya) University,
                Prayagraj.
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-blue-300">
              Quick Links
            </h3>

           <ul className="space-y-3 text-gray-300">
  <li>
    <Link to="/" className="group hover:text-blue-400 transition-all duration-300">
      <span className="border-b-2 border-transparent group-hover:border-blue-400 transition-all duration-300">Home</span>
    </Link>
  </li>
  <li>
    <Link to="/notes" className="group hover:text-blue-400 transition-all duration-300">
      <span className="border-b-2 border-transparent group-hover:border-blue-400 transition-all duration-300">Notes</span>
    </Link>
  </li>
  <li>
    <Link to="/previous-papers" className="group hover:text-blue-400 transition-all duration-300">
      <span className="border-b-2 border-transparent group-hover:border-blue-400 transition-all duration-300">Previous Papers</span>
    </Link>
  </li>
  <li>
    <Link to="/projects" className="group hover:text-blue-400 transition-all duration-300">
      <span className="border-b-2 border-transparent group-hover:border-blue-400 transition-all duration-300">Projects</span>
    </Link>
  </li>
  <li>
    <Link to="/mcqs" className="group hover:text-blue-400 transition-all duration-300">
      <span className="border-b-2 border-transparent group-hover:border-blue-400 transition-all duration-300">MCQs</span>
    </Link>
  </li>
  <li>
    <Link to="/internship" className="group hover:text-blue-400 transition-all duration-300">
      <span className="border-b-2 border-transparent group-hover:border-blue-400 transition-all duration-300">Internship</span>
    </Link>
  </li>
  <li>
    <Link to="/contact" className="group hover:text-blue-400 transition-all duration-300">
      <span className="border-b-2 border-transparent group-hover:border-blue-400 transition-all duration-300">Contact</span>
    </Link>
  </li>
</ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-blue-300">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-300">

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                Saurabh Sharma
              </p>

              <p className="ml-7">
                +91 8299552791
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                Ramdas Patel
              </p>

              <p className="ml-7">
                +91 7080344938
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-400" />
                Prayagraj, Uttar Pradesh
              </p>

            </div>
          </div>

          {/* WhatsApp & Social */}
          <div>

            <h3 className="text-xl font-semibold mb-5 text-blue-300">
              Join Community
            </h3>

            <a
              href="https://chat.whatsapp.com/Dqnu45CqIvXFjqnhD0NmIx?mode=ems_copy_c"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 rounded-xl py-3 font-semibold transition"
            >
              <FaWhatsapp size={22} />
              Join WhatsApp Group
            </a>

            <div className="flex gap-4 mt-8">

              <a href="#">
                <FaFacebookF
                  className="text-2xl hover:text-blue-500 duration-300"
                />
              </a>

              <a href="#">
                <FaInstagram
                  className="text-2xl hover:text-pink-500 duration-300"
                />
              </a>

              <a href="#">
                <FaYoutube
                  className="text-2xl hover:text-red-500 duration-300"
                />
              </a>

              <a href="https://www.linkedin.com/in/saurabh-sharma-593080340/">
                <FaLinkedinIn
                  className="text-2xl hover:text-blue-400 duration-300"
                />
              </a>

              <a href="https://github.com/Saurabhsharma8299/">
                <FaGithub
                  className="text-2xl hover:text-gray-300 duration-300"
                />
              </a>

            </div>

          </div>

        </div>

        <hr className="border-slate-700 my-10" />

       <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-gray-400 text-sm">
  <p>© 2026 BCA Hub Portal. All Rights Reserved.</p>
  <span className="hidden sm:block">|</span>
  <p>Designed & Developed ❤️ by <span className="text-white font-semibold">Saurabh Sharma & Ramdas Patel</span></p>
</div>
      </div>
    </footer>
  );
};

export default Footer;
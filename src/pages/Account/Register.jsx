import { useState } from "react";
import {
  FaUserGraduate,
  FaCamera,
  FaArrowRight,
} from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    photo: "",
    fullname: "",
    father: "",
    mother: "",
    dob: "",
    gender: "",
    category: "",
    mobile: "",
    email: "",
    university: "Prof. Rajendra Singh (Rajju Bhaiya) University",
    course: "BCA",
    semester: "",
    admissionYear: "",
    college: "",
    address: "",
    district: "",
    state: "Uttar Pradesh",
    pinCode: "",
    country: "India",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    const requiredFields = [
      "fullname",
      "father",
      "mother",
      "dob",
      "gender",
      "category",
      "mobile",
      "email",
      "semester",
      "admissionYear",
      "college",
      "address",
      "district",
      "pinCode"
    ];
    
    for (let field of requiredFields) {
      if (!formData[field] || formData[field].trim() === "") {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      alert("Registration Submitted Successfully!");
      // Add your form submission logic here
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-20 flex justify-center">
        <div className="max-w-4xl w-full px-6">
          
          {/* ROW 1 - Banner Section */}
          <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
              BCA Hub Portal
            </h1>
            <h2 className="text-xl md:text-2xl mt-3 font-semibold">
              Student Registration
            </h2>
            <p className="mt-4 text-blue-100 leading-7 max-w-2xl mx-auto text-sm md:text-base">
              Register yourself to access Notes, Previous Year Papers, Projects, 
              Internship, MCQs, Placement Resources and much more.
            </p>
            <img
              src="/banners/banner2.png"
              className="w-full max-w-2xl mx-auto mt-6 rounded-2xl shadow-2xl"
              alt="Banner"
            />
          </div>

          {/* ROW 2 - Registration Form */}
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-100 flex justify-center items-center flex-shrink-0">
                  <FaUserGraduate
                    className="text-blue-700"
                    size={28}
                  />
                </div>
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold">
                    Student Registration
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    Personal Information
                  </p>
                </div>
              </div>

              {/* PHOTO */}
              <div className="mb-8">
                <label className="font-semibold text-sm md:text-base">
                  Passport Size Photo
                </label>
                <div className="border-2 border-dashed rounded-2xl mt-2 h-24 md:h-28 flex flex-col justify-center items-center hover:border-blue-600 transition">
                  <FaCamera
                    size={24}
                    className="text-blue-600"
                  />
                  <input
                    type="file"
                    className="mt-2 text-sm"
                  />
                </div>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="text-sm md:text-base">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm md:text-base">Father's Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="father"
                    value={formData.father}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm md:text-base">Mother's Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="mother"
                    value={formData.mother}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm md:text-base">Date of Birth <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm md:text-base">Gender <span className="text-red-500">*</span></label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm md:text-base">Category <span className="text-red-500">*</span></label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  >
                    <option value="">Select</option>
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="EWS">EWS</option>
                  </select>
                </div>

                {/* Contact Information */}
                <div className="md:col-span-2 mt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 border-b pb-2">
                    📞 Contact Information
                  </h3>
                </div>

                <div>
                  <label className="text-sm md:text-base">Mobile Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="mobile"
                    maxLength="10"
                    value={formData.mobile}
                    placeholder="Enter Mobile Number"
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm md:text-base">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter Email"
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  />
                </div>

                {/* Academic Details */}
                <div className="md:col-span-2 mt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 border-b pb-2">
                    🎓 Academic Details
                  </h3>
                </div>

                <div>
                  <label className="text-sm md:text-base">University</label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    readOnly
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 bg-gray-100 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="text-sm md:text-base">Course</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                  >
                    <option value="BCA">BCA</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm md:text-base">Semester <span className="text-red-500">*</span></label>
                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  >
                    <option value="">Select Semester</option>
                    <option value="Semester 1">Semester 1</option>
                    <option value="Semester 2">Semester 2</option>
                    <option value="Semester 3">Semester 3</option>
                    <option value="Semester 4">Semester 4</option>
                    <option value="Semester 5">Semester 5</option>
                    <option value="Semester 6">Semester 6</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm md:text-base">Admission Year <span className="text-red-500">*</span></label>
                  <select
                    name="admissionYear"
                    value={formData.admissionYear}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  >
                    <option value="">Select Year</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm md:text-base">College Name <span className="text-red-500">*</span></label>
                  <select
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  >
                    <option value="">Select College</option>
                    <option value="Ewing Christian College, Prayagraj">Ewing Christian College, Prayagraj</option>
                    <option value="Allahabad Degree College">Allahabad Degree College</option>
                    <option value="CMP Degree College">CMP Degree College</option>
                    <option value="Kulbhaskar Ashram Degree College">Kulbhaskar Ashram Degree College</option>
                    <option value="Iswar Saran Degree College">Iswar Saran Degree College</option>
                    <option value="United Institute of Management">United Institute of Management</option>
                    <option value="United College of Engineering">United College of Engineering</option>
                    <option value="Shambhunath Institute of Engineering">Shambhunath Institute of Engineering</option>
                    <option value="Ganga Gurukulam">Ganga Gurukulam</option>
                    <option value="Jagat Taran Girls Degree College">Jagat Taran Girls Degree College</option>
                    <option value="S.S. Khanna Girls Degree College">S.S. Khanna Girls Degree College</option>
                    <option value="R.B.S. College">R.B.S. College</option>
                    <option value="KP Training College">KP Training College</option>
                    <option value="Rajarshi Tandon Mahila Mahavidyalaya">Rajarshi Tandon Mahila Mahavidyalaya</option>
                    <option value="LDC Institute of Technical Studies">LDC Institute of Technical Studies</option>
                    <option value="Rama Degree College">Rama Degree College</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Address */}
                <div className="md:col-span-2 mt-2">
                  <h3 className="text-xl md:text-2xl font-bold border-b pb-2">
                    🏠 Address Details
                  </h3>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm md:text-base">Full Address <span className="text-red-500">*</span></label>
                  <textarea
                    name="address"
                    value={formData.address}
                    rows={4}
                    placeholder="Enter Full Address"
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm md:text-base">District <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    placeholder="District"
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm md:text-base">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    readOnly
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 bg-gray-100 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="text-sm md:text-base">PIN Code <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    placeholder="PIN Code"
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm md:text-base">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    readOnly
                    className="w-full mt-1 border rounded-xl px-4 py-2.5 md:py-3 bg-gray-100 text-sm md:text-base"
                  />
                </div>

                {/* ========================== */}
                {/* Account Details */}
                {/* ========================== */}

                <div className="md:col-span-2 mt-12">
                  <h3 className="text-2xl font-bold text-slate-800 border-b pb-2">
                    🔐 Account Details
                  </h3>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:col-span-2">

                  <div className="grid md:grid-cols-2 gap-6">

                    <div>
                      <label className="font-semibold text-gray-700">
                        Student Login ID
                      </label>
                      <div className="mt-2 bg-white border rounded-xl px-5 py-4 font-bold text-blue-700">
                        BCA2026XXXX
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Login ID will be generated automatically.
                      </p>
                    </div>

                    <div>
                      <label className="font-semibold text-gray-700">
                        Temporary Password
                      </label>
                      <div className="mt-2 bg-white border rounded-xl px-5 py-4 font-bold text-green-700">
                        ********
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Password will be generated automatically.
                      </p>
                    </div>

                  </div>

                </div>

                {/* ========================== */}
                {/* Registration Summary */}
                {/* ========================== */}

                <div className="md:col-span-2 mt-10">

                  <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-xl">

                    <h2 className="text-3xl font-bold">
                      Registration Summary
                    </h2>

                    <p className="mt-3 text-blue-100">
                      Please verify your information before submitting the registration form.
                      After successful registration, you will receive your Student Login ID and Password.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-8">

                      <div className="bg-white/10 rounded-xl p-5">
                        <h3 className="font-semibold">
                          📚 Notes Access
                        </h3>
                        <p className="text-sm mt-2 text-blue-100">
                          Semester wise premium notes.
                        </p>
                      </div>

                      <div className="bg-white/10 rounded-xl p-5">
                        <h3 className="font-semibold">
                          📄 PYQs
                        </h3>
                        <p className="text-sm mt-2 text-blue-100">
                          Download previous year papers.
                        </p>
                      </div>

                      <div className="bg-white/10 rounded-xl p-5">
                        <h3 className="font-semibold">
                          💻 Projects
                        </h3>
                        <p className="text-sm mt-2 text-blue-100">
                          Mini & Major Project Source Code.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

                {/* ========================== */}
                {/* Declaration */}
                {/* ========================== */}

                <div className="md:col-span-2 mt-10">

                  <div className="flex items-start gap-3">

                    <input
                      type="checkbox"
                      className="mt-1 h-5 w-5 accent-blue-600"
                      required
                    />

                    <p className="text-gray-700 leading-7">
                      I hereby declare that all the information provided by me is true and correct to the best of my knowledge. I understand that providing incorrect information may lead to cancellation of my registration.
                    </p>

                  </div>

                </div>

                {/* ========================== */}
                {/* Buttons */}
                {/* ========================== */}

                <div className="md:col-span-2 mt-10">

                  <div className="flex flex-col md:flex-row gap-5">

                    <button
                      type="submit"
                      disabled={!isFormValid()}
                      className={`flex-1 py-4 rounded-2xl font-bold text-lg shadow-lg transition ${
                        isFormValid()
                          ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white cursor-pointer"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Submit Registration
                    </button>

                    <button
                      type="button"
                      className="flex-1 border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white py-4 rounded-2xl font-bold text-lg transition"
                    >
                      Already Registered? Login
                    </button>

                  </div>

                </div>

                {/* ========================== */}
                {/* Footer */}
                {/* ========================== */}

                <div className="md:col-span-2 mt-12 text-center text-gray-500 text-sm">
                  © 2026 BCA Hub Portal • Powered by Prof. Rajendra Singh (Rajju Bhaiya) University Student Resources
                </div>

              </div>
            </div>
          </form>
        </div>
      </section>
      <br/>
    </>
  );
};

export default Register;
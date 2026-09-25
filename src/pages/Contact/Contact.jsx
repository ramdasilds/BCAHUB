import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-blue-700">
          Contact Us
        </h1>

        <p className="text-lg text-gray-600 mt-4">
          We'd love to hear from you. Send us your questions, feedback or suggestions.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-16 grid lg:grid-cols-2 gap-12">

        {/* Contact Form */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Send Message
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
        {/* Contact Details */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl shadow-lg p-8 flex items-center gap-5">
            <div className="bg-blue-100 p-5 rounded-full">
              <FaEnvelope className="text-3xl text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Email
              </h3>
              <p className="text-gray-600">
                support@bcahub.com
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-8 flex items-center gap-5">
            <div className="bg-green-100 p-5 rounded-full">
              <FaPhoneAlt className="text-3xl text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Phone
              </h3>
              <p className="text-gray-600">
                +91 7080344938 , +91 8299552791
              </p>
            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 flex items-center gap-5">

            <div className="bg-red-100 p-5 rounded-full">
              <FaMapMarkerAlt className="text-3xl text-red-500" />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Address
              </h3>

              <p className="text-gray-600">
                Prayagraj, Uttar Pradesh, India
              </p>
            </div>

          </div>

          {/* FAQ Box */}

          <div className="bg-blue-600 text-white rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-3">
              Need Quick Help?
            </h3>

            <p className="opacity-90">
              Contact us anytime regarding Notes, Projects,
              Previous Year Papers, Internship, Placement
              Preparation or any technical issue.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;
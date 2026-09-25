import { useState } from "react";
import { 
  FaUserGraduate, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaUniversity,
  FaShieldAlt,
  FaArrowRight
} from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setVerificationStatus("verifying");
    
    setTimeout(() => {
      setLoading(false);
      setVerificationStatus("success");
      setTimeout(() => {
        alert("✅ Login Successful! Redirecting to Dashboard...");
        // window.location.href = "/dashboard";
      }, 500);
    }, 2000);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 flex items-center justify-center p-4 relative overflow-hidden py-16">
        
        {/* Animated Background Orbs */}
        <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>

        {/* Floating University Badge */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
          <div className="bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full shadow-lg border border-white/50 flex items-center gap-3 hover:shadow-xl transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
              <FaUniversity className="text-white text-sm" />
            </div>
            <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
              Prof. Rajendra Singh (Rajju Bhaiya) University
            </span>
          </div>
        </div>

        {/* Main Login Card */}
        <div className="w-full max-w-md relative z-10 md:mt-16">
          
          {/* Card with Glassmorphism */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10 md:p-16 hover:shadow-3xl transition-all duration-500">
            
            {/* Header */}
            <div className="text-center mb-12">
              {/* Logo Circle */}
              <div className="relative inline-block">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center mx-auto shadow-lg shadow-blue-200/50 transform hover:scale-105 transition-transform duration-300">
                  <FaUserGraduate className="text-white text-5xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-6 tracking-tight">
                Welcome Back
              </h2>
              <p className="text-gray-500 text-base mt-1.5 font-medium">
                Student Login Portal
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-4 rounded-full"></div>
              <p className="text-gray-400 text-sm mt-4">
                Login to access your BCA resources
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Student ID */}
              <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-2.5">
                  <FaUserGraduate className="text-blue-500 text-xs" />
                  Student ID
                </label>
                <br/>
                <div className="relative group">
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    placeholder="Enter your Student ID"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 pl-12 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none text-sm bg-white/80 transition-all duration-300 group-hover:border-blue-300"
                    required
                  />
                  <FaUserGraduate className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-base" />
                </div>
                <p className="text-[11px] text-gray-400 mt-2.5">
                  Enter your registered Student ID
                </p>
              </div>
                <br/>
              {/* Password */}
              <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-2.5">
                  <FaLock className="text-blue-500 text-xs" />
                  Password
                </label>
                <div className="relative group">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 pl-12 pr-12 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none text-sm bg-white/80 transition-all duration-300 group-hover:border-blue-300"
                    required
                  />
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-base" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-all duration-300"
                  >
                    {showPassword ? <FaEyeSlash className="text-base" /> : <FaEye className="text-base" />}
                  </button>
                </div>
              </div>
                <br/>
              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-3">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 accent-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors font-medium">
                    Remember Me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-indigo-700 hover:underline transition-all font-semibold"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-5 rounded-xl text-white text-base font-bold transition-all duration-300 shadow-lg ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-200/50 active:scale-[0.98]"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    LOGIN
                    <FaArrowRight className="text-sm" />
                  </div>
                )}
              </button>

              {/* Register Link */}
              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="text-blue-600 font-semibold hover:text-indigo-700 hover:underline transition-all inline-flex items-center gap-1.5 group"
                  >
                    Register Now
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      <FaArrowRight className="text-xs" />
                    </span>
                  </a>
                </p>
              </div>
            </form>

            {/* Verification Status */}
            {verificationStatus === "verifying" && (
              <div className="mt-6 p-3.5 bg-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-xl flex items-center gap-3 animate-fadeIn">
                <div className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                <p className="text-sm text-blue-700 font-medium">Verifying Student ID...</p>
              </div>
            )}

            {verificationStatus === "success" && (
              <div className="mt-6 p-3.5 bg-green-50/80 backdrop-blur-sm border border-green-200 rounded-xl flex items-center gap-3 animate-fadeIn">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-green-700 font-medium">✓ Verified! Redirecting...</p>
              </div>
            )}

            {/* Security Badge & Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200/50">
              <div className="flex items-center justify-center gap-2.5">
                <FaShieldAlt className="text-green-500 text-sm" />
                <span className="text-xs text-gray-400 font-medium">
                  Secured • Rajju Bhaiya University
                </span>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              © 2026 BCA Hub Portal • All Rights Reserved
            </p>
          </div>
        </div>

        {/* Add custom animation */}
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </div>
    </>
  );
};

export default Login;